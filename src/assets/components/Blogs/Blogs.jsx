import './Blogs.css'
import { sectionTitles } from '../../data'
import SectionTitle from '../SectionTitle/SectionTitle';
import BlogsCard from '../BlogsCard/BlogsCard';
import { blogsCardData } from '../../data';
function Blogs() {
    const blogsTitle = sectionTitles[4];
    const blogsCard = blogsCardData;
    return (
        <>
            <SectionTitle
                title={blogsTitle.title}
                header={blogsTitle.header}
                color={blogsTitle.color}
                position={blogsTitle.position}
                arrows={blogsTitle.arrows}
            />
            <div className='blogs-container flex-lg-row'>
                {blogsCard.map((item, index) => (
                    <BlogsCard
                        key={index}
                        name={item.name}
                        img={item.img}
                        topic={item.topic}
                        title={item.title}
                        profile={item.profileImg}
                        job={item.job}
                        date={item.date}
                    />
                ))}
            </div>
        </>
    )
}

export default Blogs