import { SERVER_URL } from "../../constants";


export const fetchData = async (mounted,signalController,setProducts,setIsLoading) => {
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