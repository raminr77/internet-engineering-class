
import { useEffect,useState } from "react";
import {createProductsData} from '../mock/products.mock';
import { SERVER_URL } from "../constants";
const fetchData = async (mounted,signalController,setProducts,setIsLoading) => {
    mounted && setIsLoading(true);
    try {
        const response  = await fetch(`${SERVER_URL}/products`,{method:'GET',signal:signalController});
        if(response.status === 200){
            const data = await response.json();
            if(mounted){
                setProducts(data);
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

export const Products = () => {
    const [products,setProducts] = useState([createProductsData()]);
    const [isLoading,setIsLoading] = useState(false);
    
    useEffect(()=> {
        let mounted = true;
        const sig = new AbortController();
        fetchData(mounted,sig,setProducts,setIsLoading);
        return () => {
            mounted = false;
            if(!sig.signal.aborted){
                sig.abort();
            }
        }
    },[]);
    return (
        <div>
            {
                isLoading ? <div> data is loading....</div>:<div>

                {products.map((product,index) =>(

                    <div className="product">
                        <div>

                        </div>
                    </div>
                ))}

                </div>
            }
        </div>
    );
}