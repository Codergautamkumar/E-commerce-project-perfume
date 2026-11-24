import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import ProductListing from './Pages/ProductListing';
import ProductDetails from './Pages/ProductDetails';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import ProductZoom from './components/ProductZoom';
import { AiOutlineClose } from "react-icons/ai";
import ProductDetailsComponent from './components/ProductDetails';
import Login from './Pages/Login';
import Register from './Pages/Register';
import CartPage from './Pages/Cart';
import Verify from './Pages/Verify';

import toast, { Toaster } from 'react-hot-toast';
import ForgotPassword from './Pages/ForgotPassword';
import Checkout from './Pages/Checkout';
import MyAccount from './Pages/MyAccount';
import MyList from './Pages/MyList';
import Orders from './Pages/Orders';




const Mycontext = createContext();

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


function App() {

  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState('lg');
  const [isLogin, setIsLogin] = useState(true);

  const [openCartPanel, setOpenCartPanel] = useState(false);


  const handleCloseProductDetailsModal = () => {
    setOpenProductDetailsModal(false);
  };

  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  const openAlartBox=(status, msg)=>{
    if(status==="success"){
      toast.success(msg);
    }
    if(status==="error"){
      toast.error(msg)
    }
  }

  const values = {
    setOpenProductDetailsModal,
    setOpenCartPanel,
    toggleCartPanel,
    openCartPanel,
    openAlartBox,
    isLogin,
    setIsLogin
  };

  return (
    <>
      <BrowserRouter>
      <Mycontext.Provider value={values}>
        <Header/>
        <Routes>
          <Route path={"/"} exact ={true} element={<Home/>}/>
          <Route path={"/productListing"} exact ={true} element={<ProductListing/>}/>
          <Route path={"/product/:id"} exact ={true} element={<ProductDetails/>}/>
          <Route path={"/login"} exact ={true} element={<Login/>}/>
          <Route path={"/register"} exact ={true} element={<Register/>}/>
          <Route path={"/cart"} exact ={true} element={<CartPage/>}/>
          <Route path={"/verify"} exact ={true} element={<Verify/>}/>
          <Route path={"/forgot-password"} exact ={true} element={<ForgotPassword/>}/>
          <Route path={"/checkout"} exact ={true} element={<Checkout/>}/>
          <Route path={"/my-account"} exact ={true} element={<MyAccount/>}/>
          <Route path={"/my-list"} exact ={true} element={<MyList/>}/>
          <Route path={"/my-orders"} exact ={true} element={<Orders/>}/>
        </Routes>
        <Footer/>
        </Mycontext.Provider>
      </BrowserRouter>

      <Toaster />

      
      <Dialog
        open={openProductDetailsModal}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        slots={{
          transition: Transition,
        }}
        keepMounted
        onClose={handleCloseProductDetailsModal}
        aria-describedby="alert-dialog-slide-description"
        role="alertdialog"
        className='productDetailsModal'
      >
       
        <DialogContent className='bg-black'>
          <div className="flex items-center w-full productDetailsModalContainer relative">
            <Button className='!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#917108] !absolute top-[15px] right-[15px] !bg-[#121212]' onClick={handleCloseProductDetailsModal}><AiOutlineClose className='text-[20px]'/> </Button>
            <div className="col1 w-[40%] px-3">
              <ProductZoom/>
            </div>

            <div className="col2 w-[60%] py-8 px-8 pr-14 productContent">
              <ProductDetailsComponent/>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      
    </>
  );
}

export default App;
export {Mycontext}