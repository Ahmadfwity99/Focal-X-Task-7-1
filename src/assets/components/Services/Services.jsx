import "./Services.css";
import { sectionTitles } from "../../data";
import SectionTitle from "../SectionTitle/SectionTitle";
import { servicesCards } from "../../data";
import ServicesCard from "../ServicesCard/ServicesCard";
import Video from "../Video/Video";
import { servicesFooterData } from "../../data";
import ServicesFooterCard from "../ServicesFooterCard/ServicesFooterCard";
function Services() {
  const servicesTitles = sectionTitles[0];
  const cardsData = servicesCards;
const servicesFooter= servicesFooterData;
  return (
    <>
      <SectionTitle
        title={servicesTitles.title}
        header={servicesTitles.header}
        color={servicesTitles.color}
        position={servicesTitles.position}
        arrows={servicesTitles.arrows}
      />
      <div className="services-cards">
        {cardsData.map((item, index) => (
          <ServicesCard
            key={index}
            img={item.img}
            title={item.title}
           des={item.paragraph}
          />
        ))}
      </div>
     <Video/>
     <div className="services-footer flex-md-row">
{servicesFooterData.map((item,index)=>(
 <ServicesFooterCard
 key={index}
 id={item.id}
 title={item.title}
 des={item.des}
 />

)
)}
     </div>
    </>
  );
}

export default Services;
