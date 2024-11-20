import { GoArrowRight } from 'react-icons/go'
import './ContactForm.css'

function ContactForm() {
    return (
        <div className='contact-form-body'>
            <h2>Readry To Get Started ? </h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae quas ducimus molestiae expedita tenetur asperiores?</p>
            <form action="#" className='flex-md-row'>
                <div className="col-10 col-md-5 form-row">
                    <label htmlFor="name"> your name * </label>
                    <input type="text" name='name' required />
                </div>
                <div className="col-10 col-md-5 form-row">
                    <label htmlFor="email"> your email * </label>
                    <input type="email" name='email' required />
                </div>
                <div className="col-10 form-row">
                    <label htmlFor="text-aria"> Write a Message * </label>
                    <textarea name="text-aria" className='text-aria'></textarea>
                </div>
                <button className='contact-button btn'>
                    Send Message <GoArrowRight />
                </button>
            </form>



        </div>
    )
}

export default ContactForm