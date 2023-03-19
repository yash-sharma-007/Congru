import './App.css'
import { createContext, useState } from 'react';
import Homepage from './Components/Homepage/homepage';
import Login from './Components/Login/login';
import Register from './Components/Register/register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './Components/Navigation';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { Service } from './Components/Service';
export const AppContext = createContext();

function App() {
   const [User,setLoginUser]=useState({})
  return (
    <div id='app' className="App">
      <Navigation/>
      <AppContext.Provider value={{setLoginUser}}>
     <Router>
        <Routes  >
          <Route path='/' element={User && User._id ? <Homepage userdata={User} /> : <Login setLoginUser={setLoginUser} />}>  </Route>
          <Route path="/about" element={<About/>}  ></Route>
          <Route path="/services" element={<Service/>}  ></Route>
          <Route path="/contact" element={<Contact/>}  ></Route>
          <Route path="/login" element={<Login/>} setLoginUser={setLoginUser} ></Route>
          <Route path="/register" element={<Register/>}  ></Route>
        </Routes>
      </Router>
      </AppContext.Provider>
      
    </div>
  );
}

export default App;