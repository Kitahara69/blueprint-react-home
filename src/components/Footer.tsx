import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <h3>TalkyHands</h3>
            <p className="footer-description">
              Bridging communication gaps between deaf and hearing communities through innovative technology and education.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Sign Bot</a></li>
              <li><a href="#">Learning Hub</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#">ASL Translation</a></li>
              <li><a href="#">Sign Language Lessons</a></li>
              <li><a href="#">Community Chat</a></li>
              <li><a href="#">Accessibility Tools</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li>support@talkyhands.com</li>
              <li>1-800-TALKY-HANDS</li>
              <li>Monday - Friday, 9AM - 6PM EST</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 TalkyHands. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;