import React, {useContext}from 'react';
import OrderItem from '../components/OrderItem';
import '../styles/MyOrder.scss';
import AppContext from '../context/AppContext'
import arrowImage from '../assets/icons/flechita.svg';

const MyOrder = (props) => {
	const {state} = useContext(AppContext);
	
	const sumTotal = () => {
		const reducer = (accumulator,currentValue) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer,0);
		return sum;
	};
	const handleCloseView= () => {
		props.setToggle(false);
	}

	return (
    <aside className="MyOrder">
      <div className="title-container">
        <img 
        src={arrowImage} 
		    alt="arrow"
		    onClick={()=>handleCloseView()} 
        />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        <div className="order-container">
          {state.cart.map((product) => (
            <OrderItem product={product} key={`orderItem-${product.id}`} />
          ))}
        </div>
        <div className="order">
          <p> 
		  <span>Total:</span> 
		  </p>
          <p>${sumTotal()}</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
}

export default MyOrder;
