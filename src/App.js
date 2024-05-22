import logo from './logo.svg';
import './App.css';
import TopNav from './components/TopNav/TopNav';
import Nav from './components/Nav/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import AllProduct from './components/AllProduct/AllProduct';
import { ToastContainer } from 'react-toastify';
import MoreProductDetails from './components/MoreProductDetails/MoreProductDetails';

function App() {
  return (
    <div className=" ">
       
       <TopNav></TopNav>
       <Nav></Nav>
       <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/allproduct" element={<AllProduct />} />
        <Route
          path="/product-details/:id"
          element={<MoreProductDetails />}
        ></Route>
        
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
