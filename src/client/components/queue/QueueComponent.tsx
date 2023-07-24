import React, { useEffect, useState } from 'react'
import { Ticketinfo } from '../../ClientMainPage'
const QueueComponent = ({ticketInfo}:any) => {
    console.log(ticketInfo.ticket_data)
    const [tickets,setTickets] = useState<any>([])
   
    useEffect(()=>{
        setTickets(ticketInfo.ticket_data)
        console.log(tickets)
        },[ticketInfo.ticket_data])
  return (
    <article>
         <div className='clients'>
            <h3>
            Клиент
            </h3> 
            {tickets?.map((item:any)=>{
               return (
                <h3>
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
               return (
                <h3>
               {item?.window_number}
                </h3>
                )
            })}
         </div>
    </article>
  )
}

export default QueueComponent