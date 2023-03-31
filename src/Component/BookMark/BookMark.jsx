import React, { useEffect, useState } from 'react';
import './BookMark.css'

const BookMark = ({ readTime, markedBlog }) => {

    // useEffect(() => {
        //     setReadBlog(markedBlog)
        // }, [markedBlog])
        // console.log(markedBlog);
    console.log(markedBlog);
    return (
        <div className='bookmark'>
            <div>
            <h3 className='read-time'>Spent time on read: <span>{readTime} min</span></h3>
            </div>
            <div className='bookmarked'>
            <h3 className='marked-length'>Bookmarked Blogs : { markedBlog.length}</h3>
            <div className='bookmarked-title'>
                <p>{ markedBlog.title}</p>
            </div>
            </div>
        </div>
    );
};
export default BookMark;