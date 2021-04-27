
import {Header} from './header';
import { useEffect,useState } from "react";
import {fetchData} from '../functions/products';
import { Products } from './products';

export const Home = () => {

    const [products,setProducts] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [addedProds,setAddedProds] = useState([]);
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

    return (
        <div>
            <Header/>
            {!isLoading ? <Products addedProduct={addedProds} addProduct={setAddedProds} products={products} /> : <div >لطفا صبر کنید   </div> }
        </div>
    );
}