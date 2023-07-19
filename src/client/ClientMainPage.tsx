import AdComponent from './components/adComponent/AdComponent'
import './clientMainPage.scss'
import Header from './components/header/Header'
import QueueComponent from './components/queue/QueueComponent'
import MarqueeText from './components/marquee/MarqueeText'
const ClientMainPage = () => {
    return (
      <div className='container'>
        <Header/>
        <div className='hero'>
        <QueueComponent/>
        <AdComponent/>
        </div>
        <MarqueeText/>
      </div>
    )
  }
  
  export default ClientMainPage