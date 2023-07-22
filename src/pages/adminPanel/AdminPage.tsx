import React, { useState } from 'react'
import { useGetBoardQuery } from '../../redux/boardConfiguration/apiSlice'
import axios from '../../server/axios/axios'

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
    <div>
      <select>
  {id.map((id:any, index:number)=>{ 
    <option>1123213</option>
  })}
</select>
  <button onClick={()=>{  getboards()}}>Show</button>
    </div>
  )
}

export default AdminPage