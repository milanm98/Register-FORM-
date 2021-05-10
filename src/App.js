import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="tracking-widest leading-loose font-mono font-black text-2xl text-center w-screen h-screen bg-gray-200">
      <h1 className="border border-green-600 border-b-8 w-full h-auto text-green-600">REGISTRATION</h1>
      <form className="w-full my-12">
        <input type="text" placeholder="username" className="border-2 border-green-600 my-6 text-center"></input>
        <input type="text" placeholder="email" className="border-2 border-green-600 my-6 text-center"></input>
        <input type="text" placeholder="password" className="border-2 border-green-600 my-6 text-center"></input>
        <input type="text" placeholder="repeat password" className="border-2 border-green-600 my-6 text-center"></input>
      </form>

    </div>
  );
}

export default App;
