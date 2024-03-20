import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    const {title, cover, author, author_img, posted_date ,reading_time, hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='mb-8 rounded-3xl' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                <img className='rounded-full w-14' src={author_img}alt="" />
                <div className='ml-6'>
                    <h3 className='text-2xl'>{author}</h3>
                    <p>{posted_date}</p>
                </div>
                </div>
                <div>
                <span>{reading_time} min read</span>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href=''>#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
 

}
export default Blog;


