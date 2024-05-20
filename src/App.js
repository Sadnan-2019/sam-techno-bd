import logo from './logo.svg';
import './App.css';
import TopNav from './components/TopNav/TopNav';
import Nav from './components/Nav/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
    <div className=" ">
       
       <TopNav></TopNav>
       <Nav></Nav>
       <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
     
        
      </Routes>
    </div>
  );
}

export default App;
