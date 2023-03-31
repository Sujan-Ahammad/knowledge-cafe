import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
                <h1 className='header-logo'>Knowledge Cafe</h1>
            <div className='header-nav'>
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/contact">Contact</a>
                <a href="/about">About us</a>
                </div>
        </div>
    );
};

export default Header;