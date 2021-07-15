export default function ProductCard({data}){
    
    return(
        <div className="product-card">
            <img src={data.image} alt={data.title} />
            <h3 className="c">{data.title}</h3>

            <div className="price-box" >
                {data.discount === 0 ?(
                <p>{data.price}</p>
                ) : (
                    <div className ="price-box__discount">
                        <div>
                          <del>{data.price}</del>
                          <p className="price">{data.discount}</p> 
                        </div >
                    <span>{Math.round(((data.price - data.discount) * 100) / data.price) }%</span>  
                    </div>

                )
                }
            
                               
            </div>

        </div>
    )
}