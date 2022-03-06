import React from "react";
import MainPage from "./screens/pages/MainPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LogginScreen from "./screens/LogginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";


const App = () => {
  return (

    <>
      <Router>


        <Routes>
          <Route path='/login' element={<LogginScreen />}></Route>
        <Route path='/register' element={<RegisterScreen/>}></Route>
          <Route path='/product/:id' element={<ProductScreen />}></Route>
          <Route path="/shipping" element={<ShippingScreen/>}></Route>
          <Route path="/profile" element={<ProfileScreen/>}></Route>
          <Route path='/cart' element={<CartScreen />}></Route>
          <Route path='/cart/:id' element={<CartScreen />}></Route>
          <Route path='/' element={<MainPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
