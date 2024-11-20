import "./ServicesCard.css"
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
function ServicesCard({img,title,des}) {
  return (
    <div className="services-card">
        <img  src={img} alt="" />
        <h4>{title}</h4>
        <p>{des}</p>
        <button className="btn">Read more <MdKeyboardDoubleArrowRight/></button>
    </div>
  )
}

export default ServicesCard