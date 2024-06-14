import { AiOutlineShoppingCart } from 'react-icons/ai';
// import { GiBriefcase } from 'react-icons/gi';
import { FiArrowUpRight } from 'react-icons/fi';

import { GiLaptop } from 'react-icons/gi';
import { GiHandBag } from 'react-icons/gi';
import { GiSchoolBag } from 'react-icons/gi';
import { MdShoppingBag } from 'react-icons/md';
import { IoBagHandleSharp } from 'react-icons/io5';
import { MdOutlineShoppingBag } from 'react-icons/md';

function Product() {
	return (
    <>
		<div className="bg-black text-white">
			<div className="flex justify-between items-end ">
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
			
      
		</div>
		<div className='flex justify-between items-center m-6 text-2xl font-bold text-white'>
		<div>Bags .BackPacks</div>
		<div>	<span className='flex'>
						13 products
						<span>
							<FiArrowUpRight className="text-2xl" />
						</span>
						</span></div>
		</div>
  
 
  </>
	);
}
export default Product;
