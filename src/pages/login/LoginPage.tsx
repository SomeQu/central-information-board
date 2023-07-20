import './LoginPage.scss'
const LoginPage = () => {
  return (
    <div className='main'>
    <div className='secondary'>
      <div className='third'>
        <img src="RSK_Bank_Logo 1git.svg" alt="" />
        <h1>Информационное табло</h1>
      </div>
      <div className='buttons'>
      <input className='input' type="text" placeholder='Введите адрес электронной почты' />
      <input className='input' type="text" placeholder='Введите пароль' />
      <button className='btn'>войти</button>
      </div>
    </div>

    </div>
  )
}

export default LoginPage