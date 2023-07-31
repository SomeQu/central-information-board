import AdComponent from "./components/adComponent/AdComponent";
import "./clientMainPage.scss";
import Header from "./components/header/Header";
import QueueComponent from "./components/queue/QueueComponent";
import MarqueeText from "./components/marquee/MarqueeText";
import { useEffect, useState } from "react";
import { WebsocketBuilder } from "websocket-ts";
import WaitingQueue from "./waitngQueue/WaitingQueue";
import { useAppSelector } from "../redux/hooks/redux";
import { ITicketIntefrace } from "./types/types";
import { boardIdSlice } from "../redux/reducers/boardIdSlice";
import axios from "axios";

const ClientMainPage = () => {
  const { id } = useAppSelector((state) => state.idReducer);
  const [boardInfo, setBoardInfo] = useState<any>();
  const { boardId } = useAppSelector((state) => state.boardIdReducer);
  useEffect(() => {
    const ws = new WebsocketBuilder(`ws://35.228.114.191/ws/board/${id}/`)
      .onOpen((i, ev) => {
        console.log("Подключено");
      })
      .onClose((i, ev) => {
        console.log("Соединениие прервано");
      })
      .onError((i, ev) => {
        console.log("Ошибка");
      })
      .onMessage((i, ev) => {
        console.log(JSON.parse(ev.data));
        setTicketInfo(JSON.parse(ev.data));
        console.log(ticketInfo);
      })
      .build();
  }, []);

  const [ticketInfo, setTicketInfo] = useState<ITicketIntefrace>();
  useEffect(() => {
    const boardInfoApi = axios
      .get(`http://35.228.114.191/boards/${id}/boards/`)
      .then((response) => {
        console.log(response.data, "hello response");
        const api = response.data;
        const matchedApi = api.find((e: any) => e.id == boardId);
        setBoardInfo(matchedApi);
        console.log(boardInfo);
      });
  }, [ticketInfo]);
  console.log(ticketInfo);
  if (!ticketInfo) {
    return null;
  }
  return (
    <div className="container">
      <Header />
      <div className="hero">
        <QueueComponent ticketInfo={ticketInfo} />
        <div>
          <AdComponent ads={boardInfo.ads} />
          <WaitingQueue />
        </div>
      </div>
      <MarqueeText
        bold={boardInfo.bold}
        text={boardInfo.text}
        italic={boardInfo.italic}
        speed={boardInfo.speed}
        textSize={boardInfo.text_size}
        coursise={boardInfo.coursive}
        delay={boardInfo.number}
      />
    </div>
  );
};

export default ClientMainPage;
