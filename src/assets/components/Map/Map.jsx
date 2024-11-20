import './Map.css';

function Map() {
  return (
    <div className="map-container">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155959.26467776092!2d4.739153005434672!3d52.35476072716944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c63fb5949a7755%3A0x6600fd4cb7c0af8d!2sAmsterdam!5e0!3m2!1sen!2snl!4v1732125127828!5m2!1sen!2snl"
     
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
    >
    </iframe>
    </div>
  );
}
export default Map;
