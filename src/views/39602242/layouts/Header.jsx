export default function Header({ count= 0 , data }){
    return (
        <header>

            <div className="container">

                 <h2>محمد احمدیان</h2>
                 <div className="cart">
                     <h4>
                         سبد خرید
                         <span>{count}</span>
                     </h4>
                     <ul className= "cart-content">
                         <li> سبد خرید شما خالی است </li>
                     </ul>
                 
                 </div>
            </div>

        </header>
    )
}