


import 'bootstrap/dist/css/bootstrap.css';

import { useState, useEffect } from 'react';
import { ProductSingle } from './Product';
import Cart from './Cart';





const ProductContainer = ({ Products }) => {

	const [CartsRecent, setCartRecent] = useState([]);
	const [TotalPrice, setSum] = useState(0)
	const [Name, setName] = useState('')
	const [PhoneNumber, setPhoneNumber] = useState('')
	const [Email, setEmail] = useState('')
	const [Address, setAddress] = useState('')
	

	const GetSum = (x) => {
		var sum = 0;
		for (var i = 0; i < x.length; i++) {
			sum += x[i].Price * x[i].Quantity
		}
		setSum(sum);
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		const order = {  Name, Email, Address, PhoneNumber, TotalPrice , CartsRecent, }

		const response = await fetch('/api/orders', {
			method: 'POST',
			body: JSON.stringify(order),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		const json = await response.json()

		if (!response.ok) {
			console.log('failed to add order:', json)
		}
		if (response.ok) {
			console.log('new order added:', json)
			setAddress('')
			setCartRecent([])
			setEmail('')
			setName('')
			setPhoneNumber('')
			GetSum(CartsRecent)
		}

	}


	const Add = (Product) => {
		if (!CartsRecent.includes(Product)) {
			setCartRecent(prevValue => [...prevValue, Product])
		}
	}


	useEffect(() => {
		GetSum(CartsRecent)
	}, [CartsRecent])


	return (



		<div className="album py-5 bg-light">
			<div className="container">
				<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
					{Products && Products.map((Product, index) => (
						<ProductSingle Product={Product} Pressed={() => { Add(Product) }} key={index} />
					))}
				</div>
			</div>

			<div>

				{CartsRecent && <div className="container mt-5 p-3 rounded cart">

					<div className="d-flex flex-row align-items-center"><b>Shopping cart</b></div>
					<hr />
					<h6 className="mb-0"></h6>
					<div className='container'>

						{CartsRecent.map((CartRecent, index) => (
							<Cart Cart={CartRecent} key={index}
								Refresh={() => { GetSum(CartsRecent); Cart.TotalPrice = Cart.Quantity * Cart.Price }}
								Pressed={() => {
									setCartRecent(current =>
										current.filter(element => {
											return element.ImgSrc !== CartRecent.ImgSrc;
										}),
									);
								}} />
						))}
						<div className="d-flex flex-row align-items-center"><b>Total Price Of Cart Is {TotalPrice} L.L</b></div>
					</div>
				</div>

				}

			</div>


			<div >


				<div className="container mt-5 p-3 rounded cart">

					<div className="d-flex flex-row align-items-center"><b>Checkout </b></div>
					<hr />
					<h6 className="mb-0"></h6>
					<div className='container'>
						<form className="create" onSubmit={handleSubmit}>


							<label>Name</label>
							<input
								required
								type="text"
								onChange={(e) => setName(e.target.value)}
								value={Name}
							/>

							<label>Email</label>
							<input
								required
								type="email"
								onChange={(e) => setEmail(e.target.value)}
								value={Email}
							/>

							<label>PhoneNumber</label>
							<input
								required
								type="text"
								onChange={(e) => setPhoneNumber(e.target.value)}
								value={PhoneNumber}
							/>

							<label>Address</label>
							<input
								required
								type="text"
								onChange={(e) => setAddress(e.target.value)}
								value={Address}

							/>

							<button id="submit" className="btn btn-sm btn-outline-secondary">Checkout</button>

						</form>

					</div>
				</div>
			</div>

		</div>

	);
}



export default ProductContainer


