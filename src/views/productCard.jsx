
import {convertNumber} from '../functions/common';


export const ProductCard = ({id,title,image,price,discount,addProduct,isAdded}) => (

    <div key={id} className="product_card">
        <img  alt="تصویر پیدا نشد" src={image} />
        <div style={{paddingRight:'10px',paddingLeft:'10px'}}>
            <p> {title} </p>
            { (discount > 0) && (parseInt((discount/price)*100) > 0) &&  <div style={{justifyContent:'space-between',alignItems: 'center',display:'flex'}}>
                <p className="discount_price">  {convertNumber(discount) } </p>
                <p className="discount_percent"> {convertNumber(parseInt((discount/price)*100))   } %</p>

            </div>} 
            <div>
            <p className="price"> <span style={{fontWeight:'bold'}}> {convertNumber(price)} </span> ریال </p>
            </div>
        </div>
        <button onClick={e=> {
                addProduct(old => {
                    return  !isAdded ? [...old,id]: old.filter(oId=> oId !== id)
                })
        }} className={`addToList_button ${isAdded ? 'disabled':''}`}> {isAdded ? 'اشافه شد':'اضافه به لیست'} </button>
    </div>
)