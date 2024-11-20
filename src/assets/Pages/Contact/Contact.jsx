import Nav from '../../components/Nav/Nav'
import './Contact.css'
import Hero from '../../components/Hero/Hero';
import { HeroData, infoCardData } from '../../data';
import ContactCard from '../../components/ContactCard/ContactCard';
import ContactForm from '../../components/ContactForm/ContactForm';
import Map from '../../components/Map/Map';
import Footer from '../../components/Footer/Footer'
function Contact() {
  const cardInfo = infoCardData[0];
  const heroData = HeroData[1];

  return (
    <>
      <Nav page={"contact"} />
      <Hero
        title={heroData.title}
        des={heroData.des}
      />
      <div className='contact-card-container flex-md-row'>
        <ContactCard
          add={cardInfo.address}
          email={cardInfo.email}
          phone={cardInfo.phone}
          />
          <ContactForm/>
      </div>
<Map/>
<Footer page={"about"}/>
    </>
  )
}

export default Contact