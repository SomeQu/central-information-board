import Clock from 'react-live-clock'
const CurrentTime = ():JSX.Element => {
  return (
    <div>
       <h1>
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Bishkek'}/>
        </h1>
        <Clock format={'DD.MM.Y'}/>
    </div>
  )
}

export default CurrentTime