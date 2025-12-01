import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Contactus from "./pages/Contactus";
import Header from './components/Header';
import Footer from './components/Footer';
import './style.css';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
