import './App.css';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useState } from 'react';


function App() {

  const[percentValue, setPercentValue] = useState(0);
  const[temp, setTemp] = useState("%");
  
  const[addMoreUsername, setAddMoreUsername] = useState(true);
  const[addMoreEmail, setAddMoreEmail] = useState(true);
  const[addMorePassword, setAddMorePassword] = useState(true);
  const[addMoreRepeatPassword, setAddMoreRepeatPassword] = useState(true);
  

  const handleUsernameChange = (e) => {
    if(e.target.value !== "" && addMoreUsername){
      
      setPercentValue(percentValue + 25);
      setAddMoreUsername(false);
    }
    
    else if(e.target.value === ""){
      if(percentValue === "PROCEED"){
        setTemp("%");
        setPercentValue(75);
        setAddMoreUsername(true);
      }
      else{
        setPercentValue(percentValue - 25);
        setAddMoreUsername(true);
      }
    }


    if(percentValue === 100){
      setTemp("");
      setPercentValue("PROCEED");
    }
  
  }

  const handleEmailChange = (e) => {
    if(e.target.value !== "" && addMoreEmail){
      
      if(percentValue === 100){
        setTemp("");
        setPercentValue("PROCEED")
      }
      else{
        setPercentValue(percentValue + 25);
        setAddMoreEmail(false);
      }
    }
    else if(e.target.value === ""){
      if(percentValue === "PROCEED"){
        setTemp("%");
        setPercentValue(75);
        setAddMoreEmail(true);
      }
      else{
        setPercentValue(percentValue - 25);
        setAddMoreEmail(true);
      }
    }

   
  }

  const handlePasswordChange = (e) => {
    if(e.target.value !== "" && addMorePassword){
      
      if(percentValue === 100){
        setTemp("");
        setPercentValue("PROCEED")
      }
      else{
        setPercentValue(percentValue + 25);
        setAddMorePassword(false);
      }
    }
    else if(e.target.value === ""){
      if(percentValue === "PROCEED"){
        setTemp("%");
        setPercentValue(75);
        setAddMorePassword(true);
      }
      else{
        setPercentValue(percentValue - 25);
        setAddMorePassword(true);
      }
    }

  
  }

  const handlePasswordRepeatChange = (e) => {
    if(e.target.value !== "" && addMoreRepeatPassword){
      
      if(percentValue === 100){
        setTemp("");
        setPercentValue("PROCEED")
      }
      else{
        setPercentValue(percentValue + 25);
        setAddMoreRepeatPassword(false);
      }
    }
    else if(e.target.value === ""){
      if(percentValue === "PROCEED"){
        setTemp("%");
        setPercentValue(75);
        setAddMoreRepeatPassword(true);
      }
      else{
        setPercentValue(percentValue - 25);
        setAddMoreRepeatPassword(true);
      }
    }

  }

  const handleClick = (e) => {
    if(percentValue === "PROCEED") {
      alert("You are now registered, welcome ! ");
    }
  }

  return (
    <div className="tracking-widest leading-loose font-mono font-black text-2xl text-center w-screen h-screen bg-gray-200">
      <h1 className="border border-green-600 border-b-8 w-full h-auto text-green-600">REGISTRATION</h1>
      <form className="w-full my-12">
        <input onChange={handleUsernameChange} type="text" placeholder="username" className="h-11 border-4 border-green-600 my-6 text-center"></input>
        <input onChange={handleEmailChange} type="email" placeholder="email" className="h-11 border-4 border-green-600 my-6 text-center"></input>
        <input onChange={handlePasswordChange} type="password" placeholder="password" className="h-11 border-4 border-green-600 my-6 text-center"></input>
        <input onChange={handlePasswordRepeatChange} type="password" placeholder="repeat password" className="h-11 border-4 border-green-600 my-6 text-center"></input>
      </form>
      
      <div className="flex text-center items-center justify-center">
        <div style={{ width : 200, height : 200, textAlign:'center'}}>
            <CircularProgressbarWithChildren styles={buildStyles({
              pathColor: "#059669",
              textColor: "#059669",
            })} value={percentValue}>
            <button onClick={handleClick}>
              <div className="flex text-green-600 font-black text-4xl font-sans">
                <span>{percentValue}</span>
                <span>{temp}</span>
              </div>
            </button>
              </CircularProgressbarWithChildren>
            
        </div>
      </div>
    </div>
  );
}

export default App;
