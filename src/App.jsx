import React from 'react';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
/*import pages*/
import Cart from './Pages/Cart/cart.jsx'
import {Shop} from './Pages/Shop/shop.jsx'
/*import components*/
import {CartProvider} from "./contexts/CartContext.jsx";

/*
import {Navbar} from './Components/Navbar/navbar.jsx'
*/
const App = () => {
    return (
        <div className='overflow-hidden'>
            <Router>
                <CartProvider>
              {/*  <Navbar />*/}
                <Routes>
                    <Route path='/' element={<Shop />}/>
                    <Route path='/cart' element={<Cart />}/>
                </Routes>
                </CartProvider>
            </Router>
           
        </div>
    );
};

export default App;
