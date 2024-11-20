import './BlogsCard.css'
import { GoArrowRight } from "react-icons/go";
function BlogsCard({name, img, topic, title, profile, job, date }) {
    return (
        <div className="blog-card-body col-md-3">
            <img src={img} alt="Blogs Img" className='blogs-card-img' />
            <div className="blog-card-footer">
                <div className='blog-info'>
                    <p className="blog-topic">{topic}</p>
                    <p className="blog-date">
                        {date}
                    </p>
                </div>
                <h3 className='blog-card-title'>{title}</h3>
                <div className="blog-user-info">
                    <img src={profile} alt="profile" />
                    <div className="user">
                        <h6>{name}</h6>
                        <p>{job}</p>
                    </div>
                    <button className='blog-btn'><GoArrowRight/></button>
                </div>
            </div>
        </div>
    )
}

export default BlogsCard