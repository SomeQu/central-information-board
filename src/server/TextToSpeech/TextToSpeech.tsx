import React, { CSSProperties, useEffect, useState } from 'react'

/** @defaultValue null */
type Id = string | number | null

type Button = JSX.Element | string

/** @defaultValue 5 */
type Number = 0 | 1 | 1.2 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

/** @defaultValue 10 */
type Volume = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

type Props = { id: Id, text: string, startBtn: Button, stopBtn: Button, pitch: Number, rate: Number, volume: Volume, lang: string}

function TextToSpeech({id = null, text, startBtn = <button>Start Speech</button>, stopBtn = <button>Stop Speech</button >, pitch = 5, rate = 5, volume = 10, lang = '' }: Props): JSX.Element {
    const [speechIcon, setSpeechIcon] = useState<Button>(startBtn)
    const [speechId, setSpeechId] = useState<Id>(null)
    const voices = window.speechSynthesis.getVoices();
    function reset() {
        setSpeechId(null)
        setSpeechIcon(startBtn)
    }

    function newSpeech() {
        setSpeechId(id)
        setSpeechIcon(stopBtn)
        // below is the method to speak:
        // window.speechSynthesis.speak(new window.speechSynthesisUtterance(text to be spoken))
        const utterance = new window.SpeechSynthesisUtterance(text?.replace(/\s/g, ' '))
        utterance.pitch = pitch / 5
        utterance.rate = rate / 5
        utterance.volume = volume / 10
        utterance.lang = lang
        utterance.onend = reset;
        utterance.onerror = reset;
        // utterance.voice= voices[63];
        window.speechSynthesis.speak(utterance);
    }

    function speech() {
        if (!window.speechSynthesis) return alert('Browser not supported! Try some other browser')

        if (!window.speechSynthesis.speaking) return newSpeech()
        window.speechSynthesis.cancel();
        speechId === id ? reset() : newSpeech()
    }

    useEffect(() => { window.speechSynthesis?.cancel() }, [])
    interface IWindow {
        name: string,
        ticket:string
      }
     
      const arr: IWindow[] = [
        {
          name: 'operator1',
          ticket: 'ZW048'
        },
        {
          name: 'operator2',
          ticket: 'ZW049'
        },
        {
          name:'operator3',
          ticket: 'CB071'
        },
        {
          name:'operrator4',
          ticket:'OP151'
        },
        {
          name:'operator5',
          ticket:'ZW050'
        }]
  
    return (
        <div>

            {arr.map((element)=> 
            
           <div style={{display:'flex', gap:'20px'}}>

           <div>
                {element.name}
            </div>
            <div>
                {element.ticket}
            </div>
           </div>
            )}
        </div>
        
    )
}

export default TextToSpeech