import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Blog from '../Blog/Blog';
import BookMark from '../BookMark/BookMark';
import Question from '../Question/Question';
import { toast } from 'react-toastify';


const Blogs = () => {

    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))

    },[])

    // Reaed Time
    const [readTime, setReadTime] = useState('')
    const markAsRead = (blog) => {
        const newTime=[...readTime,blog]
        setReadTime(newTime)
    }

    let oldReadTime = 0;
    for (const oldTime of readTime) {
        oldReadTime = oldReadTime + oldTime.time
    }


    // Marked Titile Button
    // const [bookTitle,setBookTitle]=useState([])
    // const BookMarkRead = ( title) => {
    //     const newBookTitle=[...bookTitle,title.title]
    //     setBookTitle(newBookTitle)
    // }
    const [bookTitle,setBookTitle]=useState([])
    const BookMarkRead = ( blog) => {
        const exist = bookTitle.find(mark => mark.id !== blog.id);
        if (!exist) {
            const newBookTitle=[...bookTitle,blog.title]
            setBookTitle(newBookTitle)
        }
        else {
            const newBookMark=[...bookTitle,blog.title]
            setBookTitle(newBookMark)
          toast('Wow Jansu you got This Toast');
        }
    }

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
                    bookTitle={bookTitle}
                ></BookMark>

            </div>
            <Question></Question>

        </div>
    );
};

export default Blogs;