import axios from 'axios';
import CurrentTime from './timeOutput/CurrentTime';

function App() {
  const APICall = async () =>{
    try {
      const {data}=await axios.get('http://35.184.55.194/customers/')
      const {results} = data
      console.log(results)
    } catch (error) {
      console.log(error)
    }
  }
  APICall()

  return (
    <div className="App">
      <CurrentTime/>
    </div>
  );
}

export default App;
