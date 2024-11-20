import './Pricing.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import { sectionTitles } from '../../data';
import PricingCards from '../PricingCards/PricingCards';
import { pricingCardsData } from '../../data';
import { MdArrowRightAlt } from "react-icons/md";
function Pricing() {
    const pricingTitle = sectionTitles[1];
    const pricingCardData = pricingCardsData;
const pricingFooterTitle=sectionTitles[2]
    return (
        <>
            <div className='pricing-body' id='#pricing'>
                <div className='pricing-header'>
                    <SectionTitle
                        title={pricingTitle.title}
                        header={pricingTitle.header}
                        color={pricingTitle.color}
                        position={pricingTitle.position}
                        arrows={pricingTitle.arrows} />
                    <img src="/public/pricingShape1_2.webp" alt="pricing icon" />
                </div>
                <div className="pricing-tab flex-md-row">
                    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
                        <label className="btn btn-outline-primary" htmlFor="btnradio1">Monthly</label>
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                        <label className="btn btn-outline-primary" htmlFor="btnradio2">Yearly</label>
                    </div>
                    <img src='/public/pricingIcon1_2.svg' alt='pricing arrow' />
                    <span> Save 25%</span>
                </div>
                <div className='d-flex justify-content-evenly align-items-center'>
                    <img src="/public/pricingShape1_1.webp" alt="click hand" className='d-none d-lg-block w-auto' />
                    <div className='pricing-card-container'>
                        {pricingCardData.map((item, index) => (
                            <PricingCards
                                key={index}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                list={item.offerList}
                            />
                        ))}
                    </div>
                </div>
                <div className="pricing-footer flex-md-row">
                    <img src="/public/ctaThumb1_1.webp" alt="Footer thumb" className='pricing-footer-img' />
                    <SectionTitle 
                    title={pricingFooterTitle.title}
                    header={pricingFooterTitle.header}
                    color={pricingFooterTitle.color}
                    position={pricingFooterTitle.position}
                    arrows={pricingFooterTitle.arrows} 
                    />
                    <button className='btn'>Talk To Specialist <MdArrowRightAlt/></button>
                </div>
            </div>
        </>
    );
}

export default Pricing;
