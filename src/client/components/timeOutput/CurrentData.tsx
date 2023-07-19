import Clock from 'react-live-clock'

const CurrentData = ():JSX.Element => {
  return (
    <div>
      <h2>
         <Clock format={'DD MMMM Y'}/>
      </h2>
    </div>
  )
}

export default CurrentData