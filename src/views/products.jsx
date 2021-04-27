
import { ProductCard } from "./productCard";
export const Products = ({products,addProduct,addedProduct}) => {
    return (
        <div className="product">
            {products.map((product,index) =>  ( <ProductCard isAdded={addedProduct.indexOf(product.id) > -1} addProduct={addProduct} key={index} {...product} /> ) )}
        </div>
    );
}