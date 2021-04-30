import axios from "axios";
import { SERVER_URL } from "../../constants";


export const fetchData = async (mounted,cancelToken,setProducts,setIsLoading) => {
    mounted && setIsLoading(true);
    try {
        const response  = await axios.get(`${SERVER_URL}/products`,{signal:cancelToken.token});
        if(response.status === 200){
            const data = response.data;
            if(mounted){
                const prodMap = new Map();
                for (const prod of data.data){
                    prodMap.set(prod.id,prod);
                }
                setProducts(prodMap);
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