import ReadCart from '../ReadCart/ReadCart';
import './BookMark.css'

const BookMark = ({ readTime, bookTitle }) => {
    return (
        <div className='bookmark'>
            <div>
            <h3 className='read-time'>Spent time on read: <span>{readTime} min</span></h3>
            </div>
            <div className='bookmarked'>
            <h3 className='marked-length'>Bookmarked Blogs : { bookTitle.length}</h3>
                <div className='bookmarked-title'>
                    {
                        bookTitle.map((title,index) => <ReadCart
                        key={index}
                        bookmarked={title}
                        ></ReadCart>)
                    }
                </div>
            </div>
        </div>
    );
};
export default BookMark;