import React, { useEffect, useState } from "react";
// import axios from "../../../server/axios/axios";
import { ITicketIntefrace, Ticketinfo } from "../../types/types";
import axios from "axios";
const { Howl } = require("howler");

const QueueComponent = (props: {
  ticketInfo: ITicketIntefrace;
}): JSX.Element => {
  const { ticketInfo } = props;
  console.log(ticketInfo);
  const [tickets, setTickets] = useState<Ticketinfo[]>([]);
  useEffect(() => {
    setTickets(ticketInfo.ticket_data);
  }, [ticketInfo.ticket_data]);
  return (
    <article>
      <div className="clients">
        <h3>Клиент</h3>
        {tickets?.map((item: Ticketinfo) => {
          return (
            <h3
              key={item.id}
              className={item?.status === "called" ? "animated" : "started"}
            >
              {item?.ticket_number}
            </h3>
          );
        })}
      </div>
      <div className="operators">
        <h3>Окно</h3>
        {tickets?.map((item: Ticketinfo) => {
          if (item.status === "called") {
            const sound = new Howl({
              src: ["hangover-sound.mp3"],
              autoplay: true,
              loop: false,
              volume: 0.5,
              onend: function () {
                console.log("Finished!");
              },
            });
            sound.play();

            const itemText = ` Клиент номер, ${item.ticket_number}, подойдите к окну номер, ${item.window_number} `;
            console.log(itemText);
            axios
              .post(
                "http://35.228.114.191/ticket_dictor/",
                { text: itemText },
                {
                  responseType: "arraybuffer", // Указываем, что ожидаем получить данные в виде массива байтов
                }
              )
              .then((response: any) => {
                const blob = new Blob([response.data], { type: "audio/ogg" });
                console.log(response.data);
                const audioUrl = window.URL.createObjectURL(blob);

                const sound = new Howl({
                  src: [audioUrl],
                  format: "ogg",
                  onend: () => {
                    console.log("Воспроизведение завершено");
                  },
                  onloaderror: (error: any) => {
                    console.error("Ошибка загрузки аудио:", error);
                  },
                });

                // Начинаем воспроизведение
                sound.play();
              })
              .catch((error: any) => {
                console.error("Ошибка получения файла:", error);
              });
          } else if (item.status === "started") {
            return null;
          }
          return (
            <h3
              key={item.id}
              className={item?.status === "called" ? "animated" : "started"}
            >
              {item?.window_number}
            </h3>
          );
        })}
      </div>
      <div className="floor">
        <h3>Этаж</h3>
        {tickets?.map((item: Ticketinfo) => {
          return (
            <h3 className={item?.status === "called" ? "animated" : "started"}>
              {item?.floor}
            </h3>
          );
        })}
      </div>
      <div className="cabinet">
        <h3>Кабинет</h3>
        {tickets?.map((item: Ticketinfo) => {
          return (
            <h3
              key={item.id}
              className={item?.status === "called" ? "animated" : "started"}
            >
              {item?.cabinet}
            </h3>
          );
        })}
      </div>
    </article>
  );
};

export default QueueComponent;
