import { FaEnvelope, FaPhone, FaSpotify, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import './Contact.css'

function Contact() {
  return (
    <div className="contact">
      <h3>Contact Me</h3>
      <div className="contact-item">
        <FaPhone />
        <a href="tel:1234567890">9176072696</a>
      </div>
      <div className="contact-item">
        <FaEnvelope />
        <a href="mailto:marcus.c.liu@gmail.com">marcus.c.liu@gmail.com</a>
      </div>
      <div className="contact-icons">
        <a href="https://open.spotify.com/user/msqlk8s87vxjukl2grzw5x0hq" target="_blank" rel="noopener noreferrer">
          <FaSpotify className="contact-icon" />
        </a>
        <a href="https://www.instagram.com/marc.is.stoopid/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="contact-icon" />
        </a>
        <a href="https://twitter.com/goodmorning8026" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="contact-icon" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100005724015534" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="contact-icon" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
