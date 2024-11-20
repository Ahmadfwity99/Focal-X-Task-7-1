import './Brands.css';

function Brands({ imgs }) {
  return (
    <div className='brands-body'>
      {imgs.map((img, index) => (
        <img key={index} src={img.url} alt={`Brand logo ${index + 1}`} />
      ))}
    </div>
  );
}

export default Brands;
