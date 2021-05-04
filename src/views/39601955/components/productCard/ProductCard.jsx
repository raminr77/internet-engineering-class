import React from 'react'

export default function productCard(props) {
    return (
        <div className = "product-card">
            <img src={props.data.image} alt={props.data.title}/>
            <h5>{props.data.title}</h5>
            <div >
                {
                    props.data.discount? 
                    <div>
                        <div className="price-box">
                            <del>{props.data.price}</del>
                            <span className="discount">{Math.round((props.data.discount * 100) /props.data.price)}%</span>
                        </div>
                            <p className="price">{props.data.price - props.data.discount}<span style={{fontWeight:"normal",fontSize:"14px"}}> ریال</span></p>
                    </div>

                    : 
                    <p className="price">{props.data.price}<span style={{fontWeight:"normal",fontSize:"14px"}}> ریال</span></p>

                }
            </div>
            <div className="add-to-cart">
                <button className="btn-product">اضافه به سبد خرید</button>
            </div>
        </div>
    )
}
