import "./RecentPost.css"
function RecentPost({ title, date, img }) {
    return (
        <div className="recent-post-body">
            <img src={img} alt="recent img" className="recent-img" />
            <div className="recent-text">
                <p>{date}</p>
                <h5>{title}</h5>
            </div>
        </div>
    )
}

export default RecentPost