import './App.css';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useEffect, useState } from 'react';


function App() {

  const[percentValue, setPercentValue] = useState(0);
  const[visible, setVisible] = useState("invisible")
  
  const[addMoreUsername, setAddMoreUsername] = useState(true);
  const[addMoreEmail, setAddMoreEmail] = useState(true);
  const[addMorePassword, setAddMorePassword] = useState(true);
  const[addMoreRepeatPassword, setAddMoreRepeatPassword] = useState(true);
  

  useEffect(() => {
      if(percentValue === 100){
        setVisible("visible");
      }
      else{
        setVisible("invisible");
      }
  },[percentValue]);  

  const handleUsernameChange = (e) => {

    if(e.target.value !== "" && addMoreUsername){      
      setPercentValue(percentValue + 25);
      setAddMoreUsername(false);
    }    
    else if(e.target.value === ""){
      setPercentValue(percentValue - 25);
      setAddMoreUsername(true);
    }

  }

  const handleEmailChange = (e) => {
    if(e.target.value !== "" && addMoreEmail){
      setPercentValue(percentValue + 25);
      setAddMoreEmail(false);
    }
    else if(e.target.value === ""){
      setPercentValue(percentValue - 25);
      setAddMoreEmail(true);
    }   
  }

  const handlePasswordChange = (e) => {
    if(e.target.value !== "" && addMorePassword){
      setPercentValue(percentValue + 25);
      setAddMorePassword(false);      
    }
    else if(e.target.value === ""){
      setPercentValue(percentValue - 25);
      setAddMorePassword(true);
    }
  }

  const handlePasswordRepeatChange = (e) => {
    if(e.target.value !== "" && addMoreRepeatPassword){
      setPercentValue(percentValue + 25);
      setAddMoreRepeatPassword(false);
    }
    else if(e.target.value === ""){
      setPercentValue(percentValue - 25);
      setAddMoreRepeatPassword(true);
    }
  }

  const handleClick = (e) => {
    alert("You are now registered, welcome ! ");
  }

  return (
    <div className="tracking-widest leading-loose font-mono font-black text-2xl text-center w-screen h-screen bg-gray-700">
      <h1 className="border border-green-600 border-b-8 text-green-600">REGISTRATION</h1>
      <div className="flex flex-row justify-between mx-48">
      <form className="mx-5 w-2/6 my-12 flex gap-2 justify-center flex-col">
        <input onChange={handleUsernameChange} type="text" placeholder="username" className="w-full h-11 border-4 border-green-600 my-6 text-center"></input>
        <input onChange={handleEmailChange} type="email" placeholder="email" className="w-full h-11 border-4 border-green-600 my-6 text-center"></input>
        <input onChange={handlePasswordChange} type="password" placeholder="password" className="w-full h-11 border-4 border-green-600 my-6 text-center"></input>
        <input onChange={handlePasswordRepeatChange} type="password" placeholder="repeat password" className="w-full h-11 border-4 border-green-600 my-6 text-center"></input>
      </form>
      
      <div className="flex w-2/5 text-center items-center justify-center">
        <div style={{ width : 350, height : 350, textAlign:'center'}}>
            <CircularProgressbarWithChildren styles={buildStyles({
              pathColor: "#059669",
              textColor: "#059669",
            })} value={percentValue}>
          
              <div className="flex text-green-600 font-black text-5xl font-sans">
                <span>{percentValue}</span>
                <span>%</span>
              </div>
            
              </CircularProgressbarWithChildren>
            
        </div>
      </div>
      </div>
      <div className={visible}>
      <div className="text-4xl h-auto mx-48 font-black font-mono animate-pulse text-center text-green-600 border-4 border-green-600">
          <button onClick={handleClick}>REGISTER</button>
      </div>
      </div>
    </div>
  );
}

export default App;
