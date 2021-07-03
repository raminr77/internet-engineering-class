export default function ProductCard({data}) {
    let off = 100 - (((data.price - data.discount) * 100) / data.price);
    off = Math.round(off);
    return (

        <div className={'product-card'}>
            <img src={data.image} alt={data.title}/>
            <h5 className='title-product'>{data.title}</h5>
            <div className='off'>
                {off === 0 ?
                    (<span/>) :
                    (<p>{off}%</p>)}
            </div>
            <div className='price-box'>
                {data.discount === 0 ?
                    (<span className='price'>{data.price}</span>) :
                    (<div>
                            <del className='price'>{data.price}</del>
                            <p className='discount'>{data.discount}</p>
                        </div>
                    )}
            </div>
        </div>


    )
}
