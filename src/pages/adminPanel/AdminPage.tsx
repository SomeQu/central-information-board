import React, { useState } from 'react'
import { useGetBoardQuery } from '../../redux/boardConfiguration/apiSlice'
import axios from '../../server/axios/axios'
import './AdminPage.scss'
interface IBoard {
  ads: any,
  bold: boolean,
  branch: number,
  id: number,
italic: boolean,
number: number,
speed: number,
text:string,
text_size: string,
cursive: boolean,
}

const AdminPage = () => {
  const [id, setId] = useState<any>([]) 
  const getboards = async () =>{
    const {data}:any= await axios.get('http://35.228.114.191/boards')
    const {results} = data
    
    console.log(results[0].id)
    results.map((item:any)=>{
      setId((id :any)=>[...id, item.id])
    })
    console.log(id)
  }

  return (
    <div className='main'>
      <div className="secondary">
      <h1>
    Выберите филиал
      </h1>
      <button className='btn'>Перейти</button>

      </div>
    </div>
  )
}

export default AdminPage