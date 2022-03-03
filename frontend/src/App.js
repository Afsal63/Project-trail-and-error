import React from "react";
import MainPage from "./screens/pages/MainPage";
 import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";



const App=()=> {
  return (
    
    <>
    <Router>
      

      <Routes>
<Route path='/' element={<MainPage/>}></Route>
<Route path='/product/:id' element={<ProductScreen/>}></Route>
<Route path='/cart' element={<CartScreen/>}></Route>
<Route path='/cart/:id' element={<CartScreen/>}></Route>
</Routes>
</Router>
    </>
  );
}

export default App;
