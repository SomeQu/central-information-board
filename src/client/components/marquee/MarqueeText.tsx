import React from 'react'
import Marquee from 'react-fast-marquee'
import { IData } from '../../ClientMainPage'

const MarqueeText = ({text}:any) => {
  return (
    <footer>
         <Marquee speed={150} delay={1}>
      <p>{text}</p>
      </Marquee>
    </footer>
  )
}

export default MarqueeText