import './TestimonialsCard.css'
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
import { FaQuoteRight } from "react-icons/fa";
function TestimonialsCard({ name, job, color, img, des }) {
  return (
    <div className={color =="white" ? 'test-card test-white':'test-card test-blue'}>
      <div className="review-stars">
        <IoStar />
        <IoStar />
        <IoStar />
        <IoStar />
        <IoStarHalf />
      </div>
      <p>
        {des}
      </p>
      <div className="test-card-footer">
        <img src={img} alt="profile" />
        <div className='user-name'>
          <h5>{name}</h5>
          <p>{job}</p>
        </div>
<FaQuoteRight className='semicolon'/>
      </div>
    </div>
  )
}

export default TestimonialsCard