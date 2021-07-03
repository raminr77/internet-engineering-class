import './css/main.css'

import Header from "./layouts/Hedear";
import ProductCard from "./components/ProductCart";
import {useEffect, useState} from "react";

export default function Product() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://raminr77.pythonanywhere.com/api/v1/products')
            .then(Response => {
                return Response.json()
            })
            .then(Response => {
                if (!Response.success) return
                setProducts(Response.data)
            })
            .catch(error => {
                console.log('Error', error)
            })
    }, [])

    return (
        <>
            <Header count={0}/>

            <div className='products'>
                {products.map((product_, index) => (
                    <ProductCard key={index} data={product_}/>
                ))}

            </div>
        </>
    )
}