import './Members.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import { sectionTitles } from '../../data';
import { GoArrowRight } from "react-icons/go";
import { membersCardData } from '../../data';
import MembersCard from '../MemberCard/MembersCard';

function Members() {
    const memberTitle = sectionTitles[5]
   
    const membersCard=membersCardData;
    return (
        <>
        <div className='members-header flex-md-row'>
            <SectionTitle
                title={memberTitle.title}
                header={memberTitle.header}
                color={memberTitle.color}
                position={memberTitle.position}
                arrows={memberTitle.arrows} />
            <button className='members-btn'> All members  <GoArrowRight /></button>
            </div>
            <div className="members-cards-container flex-md-row">
                {membersCard.map((item,index)=>(
                    <MembersCard
                    key={index}
                    img={item.img}
                    name={item.name}
                    job={item.job}
                    />
                ))}
            </div>
        </>
    )
}

export default Members