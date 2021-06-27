import React from 'react'
import { FaShoppingBasket } from 'react-icons/fa';
import { FaUser } from "react-icons/fa";

export default function Header({ count = 0, data }) {
    return (
        <header>
            <div className="container">
                <div className="logged-user">

                    <FaUser size="16px" title=" مشاهده سبد خرید" display="inline" />
                    <h3> نگین قاسمی</h3>

                </div>
                <div className="cart">
                    <h3>
                        <FaShoppingBasket size="16px" title=" مشاهده سبد خرید" display="inline" />
                        <p>سبد خرید شما</p>
                        <span>{count}</span>
                    </h3>
                    <ul className="cart-content">
                        <li>سبد خرید خالی است </li>
                        <li className="cart-content__sum">
                            <p>جمع کل</p>
                            <span>1450000 <label className="rial">ریال</label> </span>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
