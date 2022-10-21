import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './components/about/About';
import Appointment from './components/appointment/Appointment';
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';
import RequireAuth from './components/authentication/RequireAuth';
import ResetPassword from './components/authentication/ResetPassword';
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
      <Route path='/resetPassword' element={<ResetPassword></ResetPassword>}></Route>
      <Route path='/appointment' element={
      <RequireAuth>
        <Appointment></Appointment>
      </RequireAuth>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
