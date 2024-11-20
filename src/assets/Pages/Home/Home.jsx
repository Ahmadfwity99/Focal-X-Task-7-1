import Blogs from '../../components/Blogs/Blogs';
import Brands from '../../components/Brands/Brands';
import Footer from '../../components/Footer/Footer';
import HomeHero from '../../components/HomeHero/HomeHero';
import Nav from '../../components/Nav/Nav';
import Pricing from '../../components/Pricing/Pricing';
import Services from '../../components/Services/Services';
import Testimonials from '../../components/Testimonials/Testimonials';
import { brandImgs } from '../../data';
import './Home.css';

function Home() {
  const homeBrands = brandImgs;

  return (
    <>
      <Nav page="home" />
      <HomeHero />
      <Brands imgs={homeBrands} />
      <Services />
      <Pricing />
      <Testimonials />
      <Blogs />
  <Footer 
  page={"home"}/>
    </>
  );
}

export default Home;
