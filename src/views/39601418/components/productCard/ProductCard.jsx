

export default function ProductCard({ data }) {

    return (
        <div className="product-card">
            <img src={data.image} alt={data.title} />
            <h3 className="product-card__title">{data.title}</h3>
            <div className="price-box">
                {data.discount === 0 ? (
                    <p className="price rial">{data.price}<label className="rial">ریال</label></p>
                ) : (
                    <div className="price-box__discount">

                        <div>
                            <del>{data.price}</del>
                            <p className="price">{data.discount} <label className="rial">ریال</label></p>
                        </div>

                        <span>{Math.round((((data.price - data.discount) * 100) / data.price))}%</span>

                    </div>
                )}
            </div>
        </div>
    )
}
