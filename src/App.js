
import './App.css';
import Wholepage from './components/wholepage';
import About from './components/about';
import { Routes, Route } from 'react-router-dom'
import Signup from './components/signup';
import Login from './components/login';
import { useState } from 'react';

function App() {


  const [handlebtn, setHandlebtn] = useState(true)
  const [ uname, setUname ] = useState("")

  return (  
    <div className="App">
      <Routes>
        <Route path="/" element={<Wholepage handlebtn={handlebtn} setHandlebtn = {setHandlebtn} uname={uname} setUname={setUname} />}/> 
        <Route path="/signup" element={<Signup  />}/> 
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login setHandlebtn = {setHandlebtn} setUname={setUname}/>}/>
      </Routes>
    </div>
  
);
}

export default App;
