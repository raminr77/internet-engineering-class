import './css/main.css'
import { useState, useEffect } from 'react'
import Header from './layouts/Header'
import ProductCard from './components/productCard/ProductCard'

export default function Home() {
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
                console.log("Error: ", error)
            })
    }, [])

    return (


        <div>
            <Header count={3} />

            <div className="products">
                {products.map((product, index) => (
                    <ProductCard key={index} data={product} />
                ))}
            </div>
        </div>
    )
}