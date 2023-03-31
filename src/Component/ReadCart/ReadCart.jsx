import React from 'react';
import './ReadCart.css'

const ReadCart = (props) => {
    return (
        <div className='book-cart'>
            <p>{ props.bookmarked}</p>
            
        </div>
    );
};

export default ReadCart;