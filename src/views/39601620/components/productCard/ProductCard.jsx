import Rial from "../Rial/Rial";
import { intCommas, convertToFaDigit } from "../../functions/functions";

export default function ProductCard({ data }) {
	return (
		<div className={`product-card ${data.discount !== 0 ? 'has-discount' : ''}`}>
			<img src={data.image} alt={data.title} />
			<h3 className="product-card__title">{data.title}</h3>

			<div className="price-box">
				{data.discount === 0 ? (
					<p className="price">
						{intCommas(data.price)}
						<Rial />
					</p>
				) : (
					<div className="price-box__discount">
						<div>
							<del>{intCommas(data.price)}</del>
							<p className="price">
								{intCommas(data.discount)}
								<Rial />
							</p>
						</div>
						<span>
							{convertToFaDigit(Math.round((data.discount * 100) / data.price))}%
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
