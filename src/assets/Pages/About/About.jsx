import Nav from '../../components/Nav/Nav';
import './About.css';
import { brandImgs, HeroData, aboutBrands} from '../../data';
import Hero from '../../components/Hero/Hero';
import AboutBrands from '../../components/AboutBrands/AboutBrands';
import Members from '../../components/Members/Members';
import Brands from '../../components/Brands/Brands';
import Footer from '../../components/Footer/Footer';


function About() {
  const heroData = HeroData[0]; // Accessing the first element in the HeroData array
  const brandsfoot = brandImgs;


  return (
    <div className='about'>
      <Nav page="about" />
      <Hero 
        title={heroData.title} 
        des={heroData.des} 
      />
      <AboutBrands titles={aboutBrands} />
      <Members />
      <h6>1k + Brands Trust Us</h6>
      <Brands imgs={brandsfoot} />
    <Footer
    page={"about"}
    />
    </div>
  );
}

export default About;
