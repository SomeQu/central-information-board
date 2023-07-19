import Clock from 'react-live-clock'
const CurrentTime = ():JSX.Element => {
  return (
    <div>
       <h1>
        <Clock format={'HH:mm'} ticking={true} timezone={'Asia/Bishkek'}/>
        </h1>
    </div>
  )
}

export default CurrentTime