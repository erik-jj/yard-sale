import React,{useState, useContext} from 'react';
import '@styles/Header.scss';
import Menu from '../components/Menu'
import MobileMenu from '../components/MobileMenu'
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import AppContext from '../context/AppContext';
import MyOrder from '../containers/MyOrder'

const Header = () => {
	const [toggleMenu,setToggleMenu] = useState(false);
	const [toggleMyOrder,setToggleMyOrder] = useState(false);
	const [toggleMobileMenu,setToggleMobileMenu] = useState(false);

	const {state} = useContext(AppContext);


	const handleToggleMenu = () =>  {
		setToggleMenu(!toggleMenu);
	}

	const handleToggleMyOrder = () =>  {
		setToggleMyOrder(!toggleMyOrder);
	}

	const handleToggleMobileMenu = () =>  {
		setToggleMobileMenu(!toggleMobileMenu);
	}

	return (
		<nav>
			<img src={menu} 
			alt="menu" 
			className="menu"
			onClick={handleToggleMobileMenu} 
			/>
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email"
					 onClick={handleToggleMenu}>
					email@example.com
					</li>
					<li 
					className="navbar-shopping-cart" 
					onClick={handleToggleMyOrder}
					>
						<img src={shoppingCart} alt="shopping cart" />
						{state.cart.length > 0? <div> {state.cart.length}</div> : null}
					</li>
				</ul>
			</div>
			{toggleMenu && <Menu />}
			{toggleMyOrder&& <MyOrder setToggle={setToggleMyOrder}/>}
			{toggleMobileMenu && <MobileMenu/>}
		</nav>
	);
}

export default Header;
