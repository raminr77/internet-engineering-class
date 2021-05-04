

const PopOver =({addedProducts,products,totalPrice}) => (
    <div  className="_popover_">
            <div className="item">
                <p> نام محصول </p>
                <p> قیمت </p>
            </div>
            {addedProducts.map(  id => {
                const {title,price} = products.get(id);
                return (
                    <div className="item">
                            <p> {title.length > 10 ? title.slice(0,15) + "...":title} </p>
                            <p style={{color:'blue'}}> {price} </p>
                    </div>
                )

            })}
            <hr/>
            <div className="item">
                <p> قیمت کل </p>
                <p style={{color:'green'}}>  {totalPrice}  ریال </p>
            </div>
            <button className="header_continue"> ادامه </button>
    </div>
)


export const Header = ({products,addedProducts}) => {
    let totalPrice = 0;
    for(const id of  addedProducts){
        totalPrice += products.get(id).price;
    } 
    return (
            <div className="header">
                <div className="header_item"> 
                   مجتبی متولی 
                </div>
                <div className="header_item popover_container" >
                    سبد شما: <span> {addedProducts ? addedProducts.length:0} </span>
                    {addedProducts.length > 0 ? <PopOver products={products} totalPrice={totalPrice} addedProducts={addedProducts} / >: <div className="_popover_">
                            <div style={{textAlign:'center',color:'black'}}>

                                <p> محصولی انتخاب نشده است </p>
                            </div>
                        
                        </div>}
                </div>
            </div>
    );
}