import './AboutBrands.css';

function AboutBrands({ titles }) {
  return (
    <div className='about-brands-body flex-md-row'>
      {titles.map((brand, index) => (
        <div key={index} className='about-brand'>
          <img src="/public/star.svg" alt="" />
          <h2>{brand.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default AboutBrands;
