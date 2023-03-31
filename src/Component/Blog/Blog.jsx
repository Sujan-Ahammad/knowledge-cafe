import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBookmark } from '@fortawesome/free-solid-svg-icons'



const Blog = (props) => {
    const { title, name, date,time,cover,authorImg } = props.blog
    const BookMarkRead = props.BookMarkRead;
    const markAsRead = props.markAsRead;
    return (
        <div className='blog-card'>
            <img src={cover} alt="" />
            <div className='author'>
                <div className='author-info'>
                    <img src={authorImg} alt="" />
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
    
                </div>
            </div>
            <div className='title-mark-read'>
            <h2 className='title'>{title}</h2>
            <a onClick={()=>markAsRead(props.blog)} >mark as read</a>
            </div>
            
        </div>
    );
};

export default Blog;