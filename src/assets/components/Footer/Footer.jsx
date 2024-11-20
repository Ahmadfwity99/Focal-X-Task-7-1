import './Footer.css';
import { FaFacebookSquare, FaTwitter, FaYoutube, FaInstagram, FaLongArrowAltRight } from "react-icons/fa";
import { MdDoubleArrow } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { FaPhoneFlip } from "react-icons/fa6";
import { infoCardData, quickLinksData, recentPostCardData } from '../../data';
import RecentPost from '../RecentPost/RecentPost';
import { MdArrowRightAlt } from "react-icons/md";
import InfoCard from '../InfoCard/InfoCard';
function Footer({ page }) {
  const quickList = quickLinksData;
  const recentCard = recentPostCardData;
  const cardInfo = infoCardData[0]; // Accessing the first element in the infoCardData array
  return (
    <>

      <footer >
        <div className={page == "home" ? "blog-container-footer flex-lg-row" : "d-none"}>
          <img src="/public/ctaThumb.webp" alt="contact us thump" className='d-none d-lg-block' />
          <h2>Stay Connected With Cutting Edge IT</h2>
          <button className='btn'>Talk To Specialist <MdArrowRightAlt /></button>
        </div>

        <div className={page === "home" ? "d-none" : "d-flex"}>
          <InfoCard
            add={cardInfo.address}
            email={cardInfo.email}
            phone={cardInfo.phone}
            page={page}
            />
            </div>
        <div className='footer-body flex-lg-row'>
          <div className="footer-col col-2">
            <img src="/public/logo.svg" alt="Logo" className='footer-logo' />
            <p className='footer-des'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et ad ratione recusandae perspiciatis, minus accusantium.</p>
            <div className="footer-links">
              <a href="#"><FaFacebookSquare /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>
          <div className="footer-col col-2">
            <h4>Quick Links</h4>
            <ul className='quick-list'>
              {quickList.map((item, index) => (
                <li key={index}><MdDoubleArrow /> {item.des}</li>
              ))}
            </ul>
          </div>
          <div className="footer-col col-2">
            <h4>Recent Posts</h4>
            <div className="recent-container">
              {recentCard.map((item, index) => (
                <RecentPost
                  key={index}
                  img={item.img}
                  title={item.title}
                  date={item.date}
                />
              ))}
            </div>
          </div>
          <div className="footer-col col-2">
            <h4>Contact Us</h4>
            <div className="footer-contact">
              <ul>
                <li><a href="mailto:info@example.com"><IoMail /> info@example.com</a></li>
                <li><a href="tel:+963xxxxxxx"><FaPhoneFlip /> +963xxxxxxx</a></li>
              </ul>
              <form action="#">
                <div>
                  <input name='email' type="email" placeholder='Your Email Address' required />
                  <button className='footer-button'><FaLongArrowAltRight /></button>
                </div>
                <div className='check'>
                  <input type="checkbox" name="check" id="check" />
                  <label htmlFor="check">
                    I Agree to the <a href="">Privacy Policy</a>.
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-nav flex-lg-row">
        <p>&copy; All Copyright 2024 by Extech</p>
        <div className='d-flex justify-content-center align-items-center'>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
