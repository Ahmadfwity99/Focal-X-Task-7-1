import './InfoCard.css';
import { ImLocation2 } from "react-icons/im";
import { FaEnvelope, FaPhone } from "react-icons/fa"; // Importing email and phone icons

function InfoCard({ add, email, phone,page }) {
  return (
    <div className={page ==="about"? "card-info-body flex-lg-row" :"d-none"}>
      <div className="add flex-lg-row">
        <ImLocation2 className="info-icon" />
        <div className="info-text">
          <p>Address:</p>
          <h4>{add}</h4>
        </div>
      </div>
      <div className="email flex-lg-row">
        <FaEnvelope className="info-icon" />
        <div className="info-text">
          <p>Email:</p>
          <h4>{email}</h4>
        </div>
      </div>
      <div className="phone flex-lg-row">
        <FaPhone className="info-icon" />
        <div className="info-text">
          <p>Phone:</p>
          <h4>{phone}</h4>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
