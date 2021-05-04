import React from 'react'

export default function Header(props) {
    return (
        <header>
            <div className="container">
                <p>مهدی قربانی</p>

                <div className="cart">
                    <p className="pCart">سبد خرید<span>{props.count}</span></p>
                    
                    <ul className="cart_content" >
                        <li>
                            هنوز هیچ محصولی انتخاب نشده است
                        </li>
                        <li className="cart_content__sum">
                            <p className="cart_content__sum__p">جمع کل</p>
                            <p className="cart_content__sum__p">145000 <label style={{fontWeight:"normal",fontSize:"14px"}}> ريال</label></p>
                        </li>
                    </ul>
                </div>

            </div>
 

        </header>
    )
}
