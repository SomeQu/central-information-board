import React, { useEffect, useState } from "react";
import { WebsocketBuilder } from "websocket-ts";
import { IWaitingList } from "../types/types";

const WaitingQueue = (): JSX.Element => {
  const [waitingList, setWaitingList] = useState<IWaitingList[]>([]);
  useEffect(() => {
    const ws2 = new WebsocketBuilder("ws://35.228.114.191/ws/waitlist/3/")
      .onOpen((i, ev) => {
        console.log("Соединение с оиидающиии талонами установлено");
      })
      .onClose((i, ev) => {
        console.log("Соединение с ожидающими талонами прервано");
      })
      .onError((i, ev) => {
        console.log("Ошибка в соединении с ожидающими талонами");
      })
      .onMessage((i, ev) => {
        setWaitingList(JSON.parse(ev.data).ticket_cabinet_data);
      })
      .onRetry((i, ev) => {
        console.log("retry");
      })
      .build();
  }, []);
  return (
    <div className="waiting-queue">
      {waitingList.map((item: IWaitingList) => {
        return <h1 className="waiting-queue__list">{item.ticket_number}</h1>;
      })}
    </div>
  );
};

export default WaitingQueue;
