import "./Testimonials.css"
import { sectionTitles } from "../../data"
import SectionTitle from "../SectionTitle/SectionTitle";
import { testimonialsCardData } from "../../data";
import TestimonialsCard from "../TestimonialsCard/TestimonialsCard";
function Testimonials() {
  const testimonialsTitle = sectionTitles[3];
  const testimonialsCard = testimonialsCardData;
  return (
    <div className="testimonials-container" id="#testimonials">
      <SectionTitle
        title={testimonialsTitle.title}
        header={testimonialsTitle.header}
        color={testimonialsTitle.color}
        position={testimonialsTitle.position}
        arrows={testimonialsTitle.arrows} />
      <div className="testimonials-cards flex-md-row">
        {
          testimonialsCard.map((item, index) => (
            <TestimonialsCard
              key={index}
              name={item.name}
              job={item.job}
              color={item.color}
              img={item.img}
              des={item.des}
            />
          ))
        }
      </div  >
      <div className="btn-group test-btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" className="btn-check" name="test" id="test-1" autocomplete="off" checked />
        <label className="btn btn-outline-primary" for="test-1"></label>

        <input type="radio" className="btn-check" name="test" id="test-2" autocomplete="off" />
        <label className="btn btn-outline-primary" for="test-2"></label>

        <input type="radio" className="btn-check" name="test" id="test-3" autocomplete="off" />
        <label className="btn btn-outline-primary" for="test-3"></label>
      </div>
    </div>
  )
}

export default Testimonials