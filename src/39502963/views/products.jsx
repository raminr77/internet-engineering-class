
import { ProductCard } from "./productCard";
export const Products = ({products,addProduct,addedProduct}) => {
    return (
        <div className="product">
            {Array.from(products.values()).map((product,index) =>  ( <ProductCard isAdded={addedProduct.indexOf(product.id) > -1} addProduct={addProduct} key={index} {...product} /> ) )}
        </div>
    );
}