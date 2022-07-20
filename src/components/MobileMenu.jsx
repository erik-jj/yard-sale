import React from 'react';
import '../styles/MobileMenu.scss';

const MobileMenu = () => {
	return (
		<div className="mobile-menu">
        <ul>
            <li>
                <a href="/">CATEGORIES</a>
            </li>
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
                <a href="/">Fornitures</a>
            </li>
            <li>
                <a href="/">Toys</a>
            </li>
            <li>
                <a href="/">Others</a>
            </li>
        </ul>

        <ul>
            <li>
                <a href="/">My orders</a>
            </li>
            <li>
                <a href="/">My account</a>
            </li>
        </ul>

        <ul>
            <li>
                <a href="/" class="email">email@example.com</a>
            </li>
            <li>
                <a href="/" class="sign-out">Sign Out</a>
            </li>
        </ul>
    </div>
	);
}

export default MobileMenu;
