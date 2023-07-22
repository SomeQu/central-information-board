
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import ClientMainPage from '../client/ClientMainPage';
import MainRoute from '../routes/MainRoute';
import { BoardApi } from '../redux/boardConfiguration/apiSlice';


function App() {
  return (

    <div className="App">
      <MainRoute/>
    </div>
  
  );
}

export default App;
