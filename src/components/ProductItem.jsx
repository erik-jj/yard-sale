import React, {useContext, useEffect} from 'react';
import '../styles/ProductItem.scss';
import addedToCartImage from '../assets/icons/bt_added_to_cart.svg';
import addToCartImage from '../assets/icons/bt_add_to_cart.svg';
import AppContext from '../context/AppContext'
import useInitialState from '../hooks/useInitialState.js'

const ProductItem = ({product}) => {
	const {state,addToCart} = useContext(AppContext);
	//const {icon,setIcon} = useState(addToCartImage);


	const handleClick = item => {	
		isProductAdded(item) ? alert('The product has already been added'): addToCart(item);		
		
	}

	const isProductAdded = (item) => state.cart.includes(item) ? true: false;
	

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure className="add-to-cart-img" onClick={()=> {handleClick(product)}}  >
					<img 
					src={isProductAdded(product)?addedToCartImage:addToCartImage} 
					alt="add-to-cart" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
