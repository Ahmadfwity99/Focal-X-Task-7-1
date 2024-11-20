import './Video.css'

function Video() {
  return (
    <div className='video-container'> 
          <video controls poster='/public/ServicesVideoPoster.PNG'>
  <source src="/public/video.mp4" type="video/mp4"/>
  <source src="/public/video.mp4" type="video/ogg"/>
  Your browser does not support the video tag.
    </video>
    </div>
 
  )
}

export default Video