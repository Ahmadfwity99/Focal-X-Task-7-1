import './ServicesFooterCard.css'
function ServicesFooterCard({ id, title, des }) {
  return (
    <div className="services-footer-card">
      <h2>{id}</h2>
      <h3>{title}</h3>
      <p>{des}</p>
    </div>
  )
}

export default ServicesFooterCard