import "./styles/Footer.css";

import logo from "/images/logo.svg";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contents footer-item1">
        <img src={logo} alt="Logo" />
      </div>
      <div className="footer-contents">
        <h4 className="footer-header">Features</h4>
        <ul>
          <li>
            <a href="#">Link Shortening</a>
          </li>
          <li>
            <a href="#">Branded Links</a>
          </li>
          <li>
            <a href="#">Analytics</a>
          </li>
        </ul>
      </div>
      <div className="footer-contents">
        <h4 className="footer-header">Resources</h4>
        <ul>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Developers</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>
      </div>
      <div className="footer-contents">
        <h4 className="footer-header">Company</h4>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Our Team</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer-contents footer-item5">
        <ul>
          <li>
            <a href=""></a>
          </li>
          <li>
            <a href=""></a>
          </li>
          <li>
            <a href=""></a>
          </li>
          <li>
            <a href=""></a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
