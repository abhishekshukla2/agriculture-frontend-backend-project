import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <h2>🏥 Abhishek Shukla Hospital</h2>
          <p>
            Providing trusted healthcare services with care, quality and commitment.
          </p>
        </div>

        <div className="footer-middle">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Medicines</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-right">
          <h3>Contact</h3>
          <p>📧 Email: abhishekshukla2122@gmail.com</p>
          <p>📍 Location: Lucknow, India</p>
          <p>📞 Emergency: 24/7 Available</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Abhishek Shukla Hospital | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;