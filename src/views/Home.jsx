
import {Header} from './header';
import { useEffect,useState } from "react";
import {fetchData} from '../functions/products';
import { Products } from './products';
import axios from 'axios';

export const Home = () => {

    const [products,setProducts] = useState( new Map() );
    const [isLoading,setIsLoading] = useState(false);
    const [addedProds,setAddedProds] = useState([]);
    useEffect(()=> {
        let mounted = true;
        const cancelToken = axios.CancelToken.source();
        fetchData(mounted,cancelToken,setProducts,setIsLoading);
        return () => {
            mounted = false;
            // cancel request if page unmounts before fetch is complete
            cancelToken.cancel();
        }
    },[]);

    return (
        <div>
            <Header products={products} addedProducts={addedProds} />
            {!isLoading ? <Products addedProduct={addedProds} addProduct={setAddedProds} products={products} /> : <div >لطفا صبر کنید   </div> }
        </div>
    );
}