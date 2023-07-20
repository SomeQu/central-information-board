import { Link } from 'react-router-dom'
import './MainPage.scss'
import ClientMainPage from '../../client/ClientMainPage'
const MainPage = () => {
  return (
    <div className='main'>
    <div className='secondary'>
      <div className='third'>
        <img src="RSK_Bank_Logo 1.svg" alt="" />
        <h1>Информационное табло</h1>
      </div>
      <div className='buttons'>
        <h2>Войти как</h2>
      <Link className='btn' to={'/client'}>Клиент</Link>
      <Link className='btn' to={'/login'}>Администратор</Link>
      </div>
    </div>

    </div>
  )
}

export default MainPage