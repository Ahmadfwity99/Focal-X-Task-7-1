import './MembersCard.css'
import { FaShareAlt } from "react-icons/fa";
function MembersCard({img,name,job}) {
  return (
<div className="member-card-body">
<img src={img} alt="member img" className='member-card-img' />
<div className="member-card-text">
<FaShareAlt className='member-icon'/>
<h4>{name}</h4>
<p>{job}</p>
</div>
</div>
  )
}

export default MembersCard