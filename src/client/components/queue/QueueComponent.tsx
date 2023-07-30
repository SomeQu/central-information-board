import React, { useEffect, useState } from 'react'
import { Ticketinfo } from '../../ClientMainPage'
import axios from '../../../server/axios/axios';
const {Howl, Howler} = require('howler');

const QueueComponent = ({ticketInfo}:any) => {
  const notificationAudio = new Audio('/public/mixkit-clear-announce-tones-2861.wav'); // Созд
    console.log(ticketInfo.ticket_data)
    const [tickets,setTickets] = useState<any>([])
   
    useEffect(()=>{
        setTickets(ticketInfo.ticket_data)
        console.log(tickets)
        },[ticketInfo.ticket_data])
        const playNotificationSound = () => {
          notificationAudio.currentTime = 0; // Reset audio to start
          notificationAudio.play();
        
        };
       
       
  return (
    <article>
         <div className='clients'>
            <h3>
            Клиент
            </h3> 
            {tickets?.map((item:any)=>{
               return (
                <h3 className={item?.status==='called' ? 'animated' : 'started'}>
               {item?.ticket_number}
                </h3>
                )
            })}
         </div>
         <div className='operators'>
            <h3>
                Окно
            </h3>
            {tickets?.map((item:any)=>{
              if(item.status === 'called'){
                const sound = new Howl({
                  src: ['hangover-sound.mp3'],
                  autoplay: true,
                  loop: false,
                  volume: 0.5,
                  onend: function() {
                    console.log('Finished!');
                  }
                });
                sound.play();
              
                const itemText =` Ка, ${item.ticket_number[2]}, ${item.ticket_number[3]}, подойдите к окну номер, ${item.window_number} `
                console.log(itemText)
                axios
                .post('http://35.228.114.191/ticket_dictor/', {text:itemText}, {
                  responseType: "arraybuffer", // Указываем, что ожидаем получить данные в виде массива байтов
                })
                .then((response) => {
                  // Создаем blob из полученных данных
                  const blob = new Blob([response.data], { type: "audio/ogg" });
                  console.log(response.data)
                  // Создаем URL blob
                  const audioUrl = window.URL.createObjectURL(blob);
                  
                  // Создаем объект Howl и воспроизводим аудио
                  const sound = new Howl({
                    src: [audioUrl],
                    format: "ogg", // Указываем формат аудио файла
                    onend: () => {
                      // Функция, которая выполнится после окончания воспроизведения
                      console.log("Воспроизведение завершено");
                    },
                    onloaderror: (error:any) => {
                      console.error("Ошибка загрузки аудио:", error);
                    },
                  });
                  
                  // Начинаем воспроизведение
                  sound.play();
                })
                .catch((error) => {
                  console.error("Ошибка получения файла:", error);
                });
              }else if(item.status ==='started'){
                return null
              }
                return (
                  <h3 className={item?.status==='called' ? 'animated' : 'started'}>
               {item?.window_number}
                </h3>
                )
            })}
         </div>
         <div className='floor'>
            <h3>
                Этаж
            </h3>
            {tickets?.map((item:any)=>{
               return (
                <h3 className={item?.status==='called' ? 'animated' : 'started'}>
               {item?.floor}
                </h3>
                )
            })}
         </div>
         <div className='cabinet'>
            <h3>
                Кабинет
            </h3>
            {tickets?.map((item:any)=>{
             
              return (
                <h3 className={item?.status==='called' ? 'animated' : 'started'}>
               {item?.cabinet}
                </h3>
                )
              })}
            
         </div>
    </article>
  )
}

export default QueueComponent