import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
	const [ loading, setLoading ] = useState(false);
	const [ data, setData ] = useState([]);

	useEffect(() => {
		setLoading(true);
		axios({
			method: 'GET',
			url: 'https://fakestoreapi.com/products' // Replace with your actual API endpoint
		})
			.then((res) => {
				setData(res.data);
			})
			.catch((e) => console.log(e))
			.finally(() => setLoading(false));
	}, []);

	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen">
				<h1 className="text-xl font-semibold">Loading...</h1>
			</div>
		);
	}

	return (
		<div className="p-4 bg-black">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{data.map((product) => (
					<div key={product.id} className="border p-4 rounded-lg shadow-lg">
						<img className="w-full h-64 object-cover mb-4" src={product.image} alt={product.title} />
						<h2 className="text-lg font-semibold mb-2">{product.title}</h2>
						<p className="text-green-600 font-bold">₹{product.price}</p>
						<p className="text-red-500 line-through">₹{(product.price * 2).toFixed(2)}</p>{' '}
						{/* Assuming 50% off */}
						<p className="text-green-600">50% Off</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Products;
