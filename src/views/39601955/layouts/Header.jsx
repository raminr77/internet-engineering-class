import React,{useContext,useState} from 'react'
import ContextCart from './../Context/ContextCart'
import {intCommas, convertToFaDigit} from './../functions/functions'

export default function Header(props) {
    const contextCart = useContext(ContextCart);
    let sum = 0;
    const [total , setTotal] = useState(0);
    // function sum (price){
    //     setTotal(price )
    // }
    return (
        <header>
            <div className="container">
                <p>مهدی قربانی</p>

                <div className="cart">
                    <p className="pCart">سبد خرید<span>{props.count}</span></p>
                    
                    <ul className="cart_content" >
                    {
                        contextCart.listProducts.length ===0 ?
                        <li>
                        هنوز هیچ محصولی انتخاب نشده است
                        </li>
                        :
                        contextCart.listProducts.map( (i,index) =>(
                            
                            <div key={index} className="itemCart__container">
                                
                                <div  className="itemCart">{contextCart.products[i-1].title}</div>
                                <div  className="itemCart">
                                {
                                intCommas(contextCart.products[i-1].price - contextCart.products[i-1].discount)
                                }
                                </div>
                            </div>
                        ))
                            
                    }

                    

                        <li className="cart_content__sum">
                            <p className="cart_content__sum__p">جمع کل</p>

                            <p className="cart_content__sum__p">
                            {
                            contextCart.listProducts.map( (item,index) =>
                            {
                                let dis = contextCart.products[item-1].discount;
                                let price = contextCart.products[item-1].price;
                                sum = sum + (price-dis);
                            })
                            }
                            {intCommas(sum)}
                            
                            
                            <label style={{fontWeight:"normal",fontSize:"14px"}}> ريال</label></p>
                        </li>
                    </ul>
                </div>

            </div>
 

        </header>
    )
}
