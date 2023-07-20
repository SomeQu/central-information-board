import React from 'react'
import Marquee from 'react-fast-marquee'

const MarqueeText = () => {
  return (
    <footer>
         <Marquee speed={150} delay={1}>
      <p>Стоимость выпуска карты -бесплатно</p>
      </Marquee>
    </footer>
  )
}

export default MarqueeText