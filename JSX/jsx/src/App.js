// import logo from './logo.svg';
import './App.css';

function App() {
  const firstName="Indhu";
  const secondName='Palanivel';
  const fullname=function fullname(firstName,secondName){
    return firstName+" "+secondName

  }
  const arr=[1,2,3,4,5];
  
  return (
    <div className="App">
    <h2>Full Name:{fullname(firstName,secondName)}</h2>
    <h3>Company Name: Aspire Systems</h3>
    <h3>Designation:Trainee</h3>
    <input placeholder='Enter Data'></input>
    <p>{arr[1]}</p>
    </div>
  
  );
}

export default App;
