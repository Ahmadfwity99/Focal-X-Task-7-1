import "./TrensCard.css"; // Importing the CSS file for styling
import { MdOutlineStarPurple500 } from "react-icons/md"; // Importing the star icon from react-icons

function TrensCard({ title, logo, row, reviews = 450 }) {
    return (
        <div className={`trens-card d-flex flex-column p-3 my-2 ${row ? "bordered" : ""}`}>
            
            <h4 className="trens-card-title">
            <MdOutlineStarPurple500 className={logo ? "d-block title-star" : "d-none"} />
              {title}</h4>
            <div className="trens-card-body flex-md-row">
                <div className="card-pics p-3">
                    <img src="/profileShape1_1.webp" alt={`Profile shape for ${title}`} />
                </div>
                <div className="reviews p-3">
                    <div className="stars d-flex align-items-center justify-content-center">
                        {Array.from({ length: 3 }, (_, index) => (
                            <MdOutlineStarPurple500 key={index} className="gold-star" />
                        ))}
                    </div>
                    <p>{reviews}+ reviews</p>
                </div>
            </div>
        </div>
    );
}

export default TrensCard; // Exporting the TrensCard component for use in other files
