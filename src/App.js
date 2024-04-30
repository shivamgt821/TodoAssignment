import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './components/Login/Login';
import Todo from "./components/Todo";
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import ContactForm from './components/Contact/ContactForm';

function App() {
 
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact-us" element={<ContactForm />} />
      </Routes>
      </BrowserRouter>
        </div>
  );
}

export default App;
