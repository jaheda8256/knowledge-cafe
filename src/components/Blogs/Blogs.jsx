import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handelAddToBookmarks, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() =>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setBlogs(data))

    },[])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl font-bold mb-4">Blogs: {blogs.length}</h1>

            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog}
                    handelAddToBookmarks={handelAddToBookmarks}
                    handleMarkAsRead={handleMarkAsRead}
                ></Blog>)
            }
        </div>
    );
};
Blogs.propTypes ={
    handelAddToBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blogs;