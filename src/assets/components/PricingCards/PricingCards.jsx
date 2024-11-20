import './PricingCards.css';
import { IoIosCheckmark } from "react-icons/io";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { HiMiniXMark } from "react-icons/hi2";
import { MdArrowRightAlt } from "react-icons/md";
function PricingCards({ id, title, price, list }) {
    return (
        <div className="pricing-card-body">
            <div className={id === 2?"pricing-card-header color-1":"pricing-card-header color-2"}>
                <div className="pricing-header-text">
                    <h5>{title}</h5>
                    <p><span>{price}</span>/per month</p>
                </div>
                <img src="/public/pricingIcon1_1.svg" alt="" />
            </div>
            <ul className='offer-list'>
                {list.map((item, index) => (
                    <li key={index} className='pricing-list-item'>
                        <p>
                            <IoIosCheckmark className={item.check ? "d-block colored" : "d-none"} />
                            <HiMiniXMark className={item.check ? "d-none":"d-block colored-2"} />
                            {item.des}
                        </p>
                        <HiOutlineQuestionMarkCircle />
                    </li>
                ))}
            </ul>
            <button  className={id ==2? "btn color-1":" btn pricing-card-btn"}>Get Started <MdArrowRightAlt/> </button>
        </div>
    );
}

export default PricingCards;
