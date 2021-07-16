import React,{useState} from 'react';
import Navbar from './components/header/navbar'
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';
import Footer from './components/footer'

const App = () => {

    const [toggleClass,setToggleClass]=useState({
        showCart:false
    })

    const toggleCart=()=>{
       setToggleClass({
        showCart:!toggleClass.showCart
       })
    }
    return (
        <div className="container-fluid">
            <div className="row ">
                <div className="col-md-12 py-3  header">
                    <div className='right-side'>
                    <img src='images/logo.svg'></img>
                        <input type='text' placeholder="جستجو در دیجی کالا"/>
                    </div>
                    <div className='cart-btn'>
                        <button onClick={toggleCart}>سبد خرید</button>
                    </div>
                        
                </div>
            </div>
            <div className="row">
                <Navbar />
            </div>
            <div className="row content">
                <div className="products">
                    <ProductList />
                </div>
                <div className={`cart  ${(toggleClass.showCart)?'show':''}`}>
                
                    <Cart />
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default App;
