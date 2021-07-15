import './css/main.css'
import Header from './layouts/Header'
import ProductCard from './components/productCard/ProductCard'
export default function Home (){
    return(
        <div>
            <Header count={3} />
            <div className="products">
            <ProductCard data=""/>
            </div>
            <div className="products">
            <ProductCard data=""/>
            </div>
            <div className="products">
            <ProductCard data=""/>
            </div>
            <div className="products">
            <ProductCard data=""/>
            </div>
          
        </div>
    )
}