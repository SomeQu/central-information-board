import AdComponent from './components/adComponent/AdComponent'
import './clientMainPage.scss'
import Header from './components/header/Header'
import QueueComponent from './components/queue/QueueComponent'
import MarqueeText from './components/marquee/MarqueeText'
import { useEffect, useRef, useState } from 'react'
import { Socket } from 'net'
import { WebsocketBuilder } from 'websocket-ts'
import axios from '../server/axios/axios'
import WaitingQueue from './waitngQueue/WaitingQueue'

export interface IData
  {
    id?: number,
    ads?: [],
    number?: number,
    text_size?: string,
    text?: string,
    сoursive?: boolean,
    italic?: boolean,
    bold?: boolean,
    speed?: number,
    branch?: number
  }
  export interface Ticketinfo {
    cabinet?: number,
    created_at?: string,
    floor?: number,
    id?: number,
    status?: string,
    ticket_number?: string,
    window_number?: number
  }
  const ClientMainPage = () => {
    
    useEffect(()=>{
      const ws = new WebsocketBuilder('ws://35.228.114.191/ws/board/3/')
      .onOpen((i, ev) => { console.log("opened") })
      .onClose((i, ev) => { console.log("closed") })
      .onError((i, ev) => { console.log("error") })
      .onMessage((i, ev) => { 
        console.log(JSON.parse(ev.data)) 
        setTicketInfo(JSON.parse(ev.data))
        console.log(ticketInfo)
      })
      .onRetry((i, ev) => { console.log("retry") })
      .build();
     },[])
    
  const [ticketInfo, setTicketInfo] = useState<any>([])
  const [waitingList, setWaitingList] = useState<any>([])



    return (
      <div className='container'>
        <Header/>
        <button>getdata</button>
        <div className='hero'>
        <QueueComponent ticketInfo={ticketInfo}/>
        <div>
        <AdComponent/>
        <WaitingQueue/>
        </div>
        </div>
        <MarqueeText/>
      </div>
    )
  }
  
  export default ClientMainPage