import { TypeOf, object, string } from 'zod';
import './LoginPage.scss'
import { zodResolver } from '@hookform/resolvers/zod';
import { useLoginUserMutation } from '../../redux/api/authApi';
import { useLocation, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
const loginSchema = object({
  email: string()
    .min(1, 'Email address is required')
    .email('Email Address is invalid'),
  password: string()
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
});
export type LoginInput = TypeOf<typeof loginSchema>;
const LoginPage = () => {
  const methods = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });
  const [loginUser, { isLoading, isError, error, isSuccess }] =
  useLoginUserMutation();
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmitHandler: SubmitHandler<LoginInput> = (values) => {
    // 👇 Executing the loginUser Mutation
    loginUser(values);
  }
  return (
    <div className='main'>
    <div className='secondary'>
      <div className='third'>
        <img src="RSK_Bank_Logo 1.svg" alt="" />
        <h1>Информационное табло</h1>
      </div>
      <form className='buttons'>
      <input name='name' className='input' type="text" placeholder='Введите адрес электронной почты' />
      <input name='password' className='input' type="text" placeholder='Введите пароль' />
      <button className='btn'>войти</button>
      </form>
    </div>

    </div>
  )
}

export default LoginPage