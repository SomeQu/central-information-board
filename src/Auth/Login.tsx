import React, { useRef, useState } from 'react'
import { GET_INFO, LOGIN_URL } from '../server/API/api';
import Marquee from 'react-fast-marquee';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import JoditEditor from 'jodit-react';
const Login = ():JSX.Element => {
  const [RunningTextValue, setRunningTextValue] = useState<any>('Hello world');
  const [updatedRunningTextValue, setUpdatedRunningTextValue]= useState(RunningTextValue);
  const editor = useRef(null);
	const [content, setContent] = useState('');

  const ChangeText = () =>{
   setUpdatedRunningTextValue(RunningTextValue)
   console.log(updatedRunningTextValue)
  }
  const check = (e:any) =>{
    e.preventDefault()
    setRunningTextValue(e.target.value)
  }

  return (
    <div>
      <Marquee speed={150} delay={5}>
      <h1>{updatedRunningTextValue}</h1>
      </Marquee>
      <JoditEditor
			ref={editor}
			value={content}
			onChange={newContent => {setRunningTextValue(newContent)}}
		/>
        <input value={RunningTextValue} type="text" onChange={(e)=>check(e)} />
        <button onClick={()=>ChangeText()} >Allow </button>

      </div>
  )
}

export default Login