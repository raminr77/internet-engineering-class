
import { useEffect,useState } from "react";
import { SERVER_URL } from "../constants";

const fetchData = async (mounted,signalController,setProducts,setIsLoading) => {
    mounted && setIsLoading(true);
    try {
        const response  = await fetch(`${SERVER_URL}/products`,{method:'GET',signal:signalController});
        if(response.status === 200){
            const data = await response.json();
            console.log(data.data);
            if(mounted){
                setProducts(data.data);
                setIsLoading(false);
            }
        }else {
            mounted && setIsLoading(false)
        }

    }catch(e){
        mounted && setIsLoading(false);
        console.error(e);
    }
}
const conv = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹']
export const Products = () => {
    const [products,setProducts] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    
    useEffect(()=> {
        let mounted = true;
        const sig = new AbortController();
        fetchData(mounted,sig.signal,setProducts,setIsLoading);
        return () => {
            mounted = false;
            if(!sig.signal.aborted){
                sig.abort();
            }
        }
    },[]);
    const convertNumber = (number) =>
    {
        number = typeof number === 'string' ? number : number.toString();
        conv.forEach((n,i)=> {
            const regex = new RegExp(`${i}`,'g');
            number = number.replace(regex,n)
        })
        return number;
    }
    return (
        <div>
            {
                isLoading ? <div> data is loading....</div>:<div>
                <div className="product">
                        {products.map((product,index) => {
                            const {title, image,price,discount} = product;
                            return (

                                <div key={index} className="product_card">
                                    <img style={{width:'100%',height:'50%'}} src={image} />
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
                                    <button className="addToList_button"> اضافه به لیست </button>
                                </div>
                                )
                        }
                        
                        )}
                </div>
           

                </div>
            }
        </div>
    );
}