import Rial from "../Rial/Rial";
export default function ProductCard({ data }) {
	return (
		<div className="product-card">
			<img src={data.image} alt={data.title} />
			<h3 className="product-card__title">{data.title}</h3>

			<div className="price-box">
				{data.discount === 0 ? (
					<p className="price">
						{data.price}
						<Rial />
					</p>
				) : (
					<div className="price-box__discount">
						<div>
							<del>{data.price}</del>
							<p className="price">
								{data.discount}
								<Rial />
							</p>
						</div>
						<span>
							{Math.round(
								100 -
									((data.price - data.discount) * 100) /
										data.price
							)}
							%
						</span>
					</div>
				)}
			</div>

			<div className="add-to-cart">
				<button className="add-btn">اضافه به سبد</button>
			</div>
		</div>
	);
}
