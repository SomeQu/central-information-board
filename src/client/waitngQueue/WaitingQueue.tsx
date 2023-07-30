import React, { useEffect, useState } from 'react'
import { WebsocketBuilder } from 'websocket-ts';

const WaitingQueue = () => {
    const [waitingList, setWaitingList] = useState<any>([])
    useEffect(()=>{
        const ws2 = new WebsocketBuilder('ws://35.228.114.191/ws/waitlist/3/')
        .onOpen((i, ev) => { console.log("opened2") })
        .onClose((i, ev) => { console.log("closed2") })
        .onError((i, ev) => { console.log("error2") })
        .onMessage((i, ev) => { 
            console.log(JSON.parse(ev.data))
          setWaitingList(JSON.parse(ev.data).ticket_cabinet_data          )
        })
        .onRetry((i, ev) => { console.log("retry2") })
        .build();
        
           
        console.log(waitingList)

    },[])
  return (

    <div className='waiting-queue'>
        {waitingList.map((item:any)=>{
          return  <h1 className='waiting-queue__list'>{item.ticket_number}</h1>
        })}
    </div>
  )
    }

export default WaitingQueue