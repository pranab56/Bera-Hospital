import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Appointment from './components/appointment/Appointment';
import Login from './components/authentication/Login';
import Contact from './components/contact/Contact';
import Header from './components/home/Header';
import Home from './components/home/Home';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/appointment' element={<Appointment></Appointment>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
