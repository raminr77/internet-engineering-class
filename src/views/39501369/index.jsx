import React,{useEffect,useState,useContext} from 'react'
import Header from './layouts/Header'
import ProductCard from './components/productCard/ProductCard.jsx'
import axios from 'axios'
import  ContextCart from './Context/ContextCart'

import './css/main.css'
<link href="https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v28.0.0/dist/font-face.css" rel="stylesheet" type="text/css" />

export default function Home() {

    const [products , setProduct] = useState([])
    const [listProducts , setListProducts] = useState([])

    function AddProductToCart(item){
        setListProducts(listProducts.concat(item))
    }

    useEffect(()=>{
        axios.get(`http://raminr77.pythonanywhere.com/api/v1/products/`)
            .then(response => {
                return response
            })
            .then(response =>{
              if(!response.data.success) return
              setProduct(response.data.data)
            })
            .catch(err=> console.log(err))
    },[])

    return (
        <ContextCart.Provider value={{
            AddProductToCart : AddProductToCart,
            listProducts : listProducts,
            products :products
        }}>
                {/* {console.log(listProducts.length)} */}
                <Header count={listProducts.length}/>

                <div className="products">
                    {
                    products.map((items,index)=>(
                        <ProductCard key={index} data={items} />
                    ))
                    }
                </div>
            
        </ContextCart.Provider>
    )
}