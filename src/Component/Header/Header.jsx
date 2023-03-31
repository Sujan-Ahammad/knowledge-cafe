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
                <img src="https://images.unsplash.com/photo-1553514029-1318c9127859?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
                </div>
        </div>
    );
};

export default Header;