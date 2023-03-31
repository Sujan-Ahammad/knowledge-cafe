import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Blog from '../Blog/Blog';
import BookMark from '../BookMark/BookMark';

const Blogs = () => {

    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))

    },[])

    const [readTime, setReadTime] = useState('')
    const markAsRead = (blog) => {
        const newTime=[...readTime,blog]
        setReadTime(newTime)

    }

    let oldReadTime = 0;
    for (const oldTime of readTime) {
        oldReadTime = oldReadTime + oldTime.time
    }






    const [markedBlog,setMarkedBlog]=useState([])

    const BookMarkRead = (blog) => {
        const newMarkedBlog=[...markedBlog,blog]
        setMarkedBlog(newMarkedBlog)

    }
// console.log(oldTime);


    return (
        <div className='blogs-main'>

            <div className="blogs-container">
                {
                    blogs.map(blog => <Blog
                        BookMarkRead={BookMarkRead}
                        markAsRead={markAsRead}
                        key={blog.id}
                        blog={blog}

                    ></Blog>)
                }

            </div>
            <div className="blogs-cart">
                <BookMark
                    readTime={oldReadTime}
                    markedBlog={markedBlog}
                ></BookMark>

            </div>

        </div>
    );
};

export default Blogs;