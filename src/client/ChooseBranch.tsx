import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ClientMainPage from './ClientMainPage'
import './ChooseBranch.scss'
import axios from '../server/axios/axios'

const ChooseBranch = () => {
  const [branches, getBranches] = useState<any>([])
  const [branchID, setBranchID] = useState<number>()
  useEffect(()=>{
    const getApi = axios.get('http://35.228.114.191/branches/').then((response)=>{
      getBranches(response.data.results)
    })
  },[])
  console.log(branches)
  return (
    <div>

    <div className='branch'>
      <div className='branch-header'>

         <img src="RSK_Bank_Logo 1.jpg" alt="" />
      </div>
    </div>
    <div className='branch-hero'>
      <h1>Выберите филиал</h1>
      <select onChange={((e:any)=>{
        setBranchID(e.target.value)
        console.log(branchID)
      })}>

      {
        branches.map((item:any)=>{
          return <option key={item.id} value={item.id}>{item.name}</option>
        })
      }
      </select>
      {branchID ?  <button>Click</button> : ''}
    </div>
    </div>
  )
}

export default ChooseBranch