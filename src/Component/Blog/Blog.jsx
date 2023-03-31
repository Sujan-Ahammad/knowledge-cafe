import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBookmark } from '@fortawesome/free-solid-svg-icons'



const Blog = (props) => {
    const { title, name, date,time,cover } = props.blog
    const BookMarkRead = props.BookMarkRead;
    const markAsRead = props.markAsRead;
    return (
        <div className='blog-card'>
            <img src={cover} alt="" />
            <div className='author'>
                <div className='author-info'>
                    <img src={cover} alt="" />
                    <div className='author-name'>
                        <p className='name'>{name} </p>
                        <p>{date}</p>
                    </div>
                </div>
                <div className='read'>
                    <p>{time} min read</p>
                    <p >
                    <  FontAwesomeIcon onClick={()=>BookMarkRead(props.blog)} className='book-icon' icon={faBookmark} />
                   </p>
                    
                    {/* <button onClick={()=>BookMarkRead(props.blog)}>A</button> */}
                    {/* <p onClick={()=>BookMarkRead(props.blog)}>Click</p> */}
                </div>
            </div>
            <h2 className='title'>{title}</h2>
            <p onClick={()=>markAsRead(props.blog)}>mark as read</p>
            {/* <a onClick={()=>markAsRead(props.blog)} href="">mark as read</a> */}
        </div>
    );
};

export default Blog;