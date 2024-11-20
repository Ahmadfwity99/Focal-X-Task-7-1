import './Hero.css'

function Hero({title,des}) {
  return (
    <div className='main-hero'>
        <h1>{title}</h1>
        <h5>{des}</h5>
    </div>
  )
}

export default Hero