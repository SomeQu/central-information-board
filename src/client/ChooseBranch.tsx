import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ChooseBranch.scss";
import axios from "../axios/axios";
import { useAppDispatch, useAppSelector } from "../redux/hooks/redux";
import { idSlice } from "../redux/reducers/IdSlice";
import { IBranch } from "./types/types";
import { boardIdSlice } from "../redux/reducers/boardIdSlice";

const ChooseBranch = () => {
  const { id } = useAppSelector((state) => state.idReducer);
  const { changeId } = idSlice.actions;
  const { boardId } = useAppSelector((state) => state.boardIdReducer);
  const { changeBoardId } = boardIdSlice.actions;
  const dispatch = useAppDispatch();
  const [branches, setBranches] = useState<IBranch[]>([]);
  const [boards, setBoards] = useState<any>();
  useEffect(() => {
    const getApi = axios
      .get("http://35.228.114.191/branches/")
      .then((response: any) => {
        setBranches(response.data.results);
      });
  }, []);
  useEffect(() => {
    console.log(boards);
  }, [boardId]);
  return (
    <div>
      <div className="branch">
        <div className="branch-header">
          <img src="RSK_Bank_Logo 1.jpg" alt="" />
        </div>
      </div>
      <div className="branch-hero">
        <h1>Выберите филиал</h1>
        <select
          onChange={(e) => {
            dispatch(changeId(e.target.value));
            const getBranches = axios
              .get(`http://35.228.114.191/boards/${e.target.value}/boards/`)
              .then((response) => {
                setBoards(response.data);
                console.log(boards);
              });
          }}
        >
          <option disabled selected>
            {" "}
            Выберите филиал{" "}
          </option>
          {branches.map((item: IBranch) => {
            return (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            );
          })}
        </select>
        <div>
          {id ? <h1> Выберите информационное окно</h1> : ""}
          <select
            onChange={(e) => {
              dispatch(changeBoardId(e.target.value));
              console.log(boardId);
            }}
          >
            <option disabled selected>
              {" "}
              Выберите окно{" "}
            </option>
            {id
              ? boards?.map((item: any) => {
                  return <option key={item.id}>{item.id}</option>;
                })
              : ""}
          </select>

          {boards ? (
            <Link to={"/client"}>
              <button onClick={() => console.log(boardId)}>Click</button>
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ChooseBranch;
