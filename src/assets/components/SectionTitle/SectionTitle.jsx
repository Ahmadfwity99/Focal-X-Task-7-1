import './SectionTitle.css'
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";
import { BsArrowRightCircleFill,BsArrowLeftCircleFill } from "react-icons/bs";
function SectionTitle({title,header,color,position,arrows}) {
  return (
<div className={position ==="left" ?"section-title-container flex-md-row title-left":"section-title-container flex-md-row title-center"}>
   <div className='titles'>
    <h4 className={color === "blue" ? "blue":"white" }
    ><HiArrowNarrowLeft/>
        {title}
        <HiArrowNarrowRight/></h4>
    <h2 className='section-h2'>{header}</h2>
   </div>
   <div className={arrows ? "title-arrows d-flex" : "d-none"}>
<BsArrowLeftCircleFill className='arr'/>
<BsArrowRightCircleFill className='arr'/>
   </div>
</div>
  )
}
export default SectionTitle