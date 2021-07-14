import React,{useContext} from 'react'
import {intCommas, convertToFaDigit} from './../../functions/functions'
import Header from './../../layouts/Header'
import  ContextCart from './../../Context/ContextCart'

export default function ProductCard(props) {

    const cart_Contrxt = useContext(ContextCart); 


    function AddToCart(id){
        // cart_Contrxt.Test(t);
        cart_Contrxt.AddProductToCart(id) 
        // console.log(cart_Contrxt.listProducts);
    }

    return (
        <div className = "product-card">
            <img src={props.data.image} alt={props.data.title}/>
            <h5>{props.data.title}</h5>
            <div >
                {
                    props.data.discount? 
                    <div>
                        <div className="price-box">
                            <del>{intCommas(props.data.price)}</del>
                            <span className="discount">{ convertToFaDigit(Math.ceil((props.data.discount * 100) /props.data.price))  }%</span>
                        </div>
                            <p className="price">{intCommas(props.data.price - props.data.discount)}<span style={{fontWeight:"normal",fontSize:"14px"}}> ریال</span></p>
                    </div>

                    : 
                    <p className="price">{intCommas(props.data.price)}<span style={{fontWeight:"normal",fontSize:"14px"}}> ریال</span></p>

                }
            </div>
            <div className="add-to-cart">
                <button onClick={()=> AddToCart(props.data.id)} className="btn-product">اضافه به سبد خرید</button>
            </div>
        </div>
    )
}