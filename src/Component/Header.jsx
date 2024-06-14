import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { FaUserCircle } from 'react-icons/fa';
import { CiSaveUp2 } from 'react-icons/ci';
// import { FiArrowUpRight } from 'react-icons/fi';

// import { AiOutlineShoppingCart } from 'react-icons/ai';
// import { GiBriefcase } from 'react-icons/gi';
// import { GiLaptop } from 'react-icons/gi';
// import { GiHandBag } from 'react-icons/gi';
// import { GiSchoolBag } from 'react-icons/gi';
// import { MdShoppingBag } from 'react-icons/md';
// import { IoBagHandleSharp } from 'react-icons/io5';

// import {  GiToteBag, GiMessengerBag, GiSling, } from 'react-icons/gi';
// import { MdOutlineShoppingBag } from 'react-icons/md';

function Header() {
	return (
		<header className="bg-black text-white p-4">
			<div className="flex justify-between items-center">
				<h1 className="text-2xl font-bold">TANN TRIM</h1>
				<ul className="flex space-x-4">
					<li>
						<CiSearch />
					</li>
					<li>
						<LiaShoppingBagSolid />
					</li>
					<li>
						<FaUserCircle />
					</li>
					<li>
						<CiSaveUp2 />
					</li>
				</ul>
			</div>
			<div>
				<ul className="flex  m-4 justify-center space-x-4">
					<li>Bags</li>
					<li> Travals</li>
					<li> Accesories</li>
					<li>Gifting</li>
					<li>jewelry</li>
				</ul>
			</div>
			{/* <div className="flex justify-between items-center p-4 mt-4 space-x-8  "> */}
			{/* <div className="flex justify-between ">
				<div className="flex justify-between items-end space-x-8">
					<div className="text-center">
						<MdOutlineShoppingBag className="text-2xl mx-auto" />
						<span>All Bags</span>
					</div>
					<div className="text-center">
						<GiSchoolBag className="text-2xl mx-auto" />
						<span>Vanity Pouch</span>
					</div>
					<div className="text-center">
						<GiSchoolBag className="text-2xl mx-auto" />
						<span>Vanity Pouch</span>
					</div>
					<div className="text-center">
						<AiOutlineShoppingCart className="text-2xl mx-auto" />
						<span>Duffle Bag</span>
					</div>
					<div className="text-center">
						<GiLaptop className="text-2xl mx-auto" />
						<span>Laptop Sleeve</span>
					</div>
					<div className="text-center">
						<MdShoppingBag className="text-2xl mx-auto" />
						<span>Messenger Bags</span>
					</div>
					<div className="text-center">
						<IoBagHandleSharp className="text-2xl mx-auto" />
						<span>Slings Bags</span>
					</div>
					<div className="text-center">
						<GiHandBag className="text-2xl mx-auto" />
						<span>Handbags</span>
					</div>
				</div>
			</div> */}
		</header>
	);
}

export default Header;
