export default function Header({count = 0, data}) {
    return (
        <header>
            <div className='container'>
                <h3 className='Manufacturer'>محصولات هدا</h3>
                <div className='Cart'>
                    <h3 className='title'>
                        سبد شما
                        <span className='counter_products'>{count}</span>
                    </h3>
                    <ul className='cart-content'>
                        <li>
                            هنوز محصولی اضافه نشده است
                            <span className={'sticker'}>):</span>
                        </li>
                        <li className='cart-content__sum'>
                           <p>جمع کل:</p>
                            <span className= 'totalAmount'>1890000ریال</span>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )

}