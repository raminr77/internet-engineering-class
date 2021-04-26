import Rial from '../components/Rial/Rial'
import { intCommas, convertToFaDigit } from "../functions/functions";

export default function Header({ count = 0, data }) {
	return (
		<header>
			<div className="container">
				<h3>RAMIN</h3>
				<div className="cart">
					<h3>
						سبد شما
						<span>{convertToFaDigit(count)}</span>
					</h3>
					<ul className="cart-content">
						<li className="cart-content__empty">هنوز محصولی اضافه نشده است</li>
						<li className="cart-content__sum">
							<p>جمع کل</p>
							<span>
								{intCommas(0)}
                                <Rial />
							</span>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
}
