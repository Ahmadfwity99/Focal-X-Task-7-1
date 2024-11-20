import './HomeHero.css'; // Importing CSS styles for HomeHero
import { homeHeroData } from '../../data'; // Importing homeHeroData from data file
import { CiWavePulse1 } from "react-icons/ci"; // Importing WavePulse icon
import { GiCheckMark } from "react-icons/gi"; // Importing CheckMark icon
import { GoArrowRight } from "react-icons/go"; // Importing ArrowRight icon
import TrensCard from '../TrensCard/TrensCard';

function HomeHero() {
    const homeData = homeHeroData.heroTextImg[0]; // Accessing the first item in heroTextImg array

    return (
      <>
        <div className='home-hero-body flex-lg-row'>
            <div className="home-hero-text">
                <p className="top-text">
                    <CiWavePulse1 className='p-0 m-0'/>
                    {homeData.topText}
                </p>
                <h1 className='hero-title'>
                    {homeData.header}
                </h1>
                <ul className='hero-list'>
                    {homeData.listData.map((item, index) => (
                        <li key={index} className="hero-list-item col-10 col-md-5">
                            <GiCheckMark/> {item.text}
                        </li>
                    ))}
                </ul>
                <button className='home-hero-button btn'>
                    Get Started <GoArrowRight/>
                </button>
                <div className="home-cards flex-lg-row align-self-center align-self-lg-start">
                    {homeHeroData.trensCardData.map((card, index) => (
                        <TrensCard key={index} {...card} />
                    ))}
                </div>
            </div>
            <img src={homeData.img} alt="Hero Thumbnail" className='home-hero-img img-fluid' />
        </div>
        <div className='explore d-none d-lg-flex'>
          <img src="/public/heroShape1_3.webp" alt="explore" />
        </div>
        </>
    );
}

export default HomeHero;
