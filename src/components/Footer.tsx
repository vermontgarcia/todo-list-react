import facebookLogo from '../assets/facebook.svg';
import twitterLogo from '../assets/twitter.svg';
import instagramLogo from '../assets/instagram.svg';
import { useEffect, useState } from 'react';
import { getLastUpdate, getYear } from '../helpers/utils';
const Footer = () => {
  const [year, setYear] = useState(0);
  const [lastUpdate, setLastUpdate] = useState('');
  useEffect(() => {
    setYear(getYear());
    setLastUpdate(getLastUpdate());
  }, []);
  return (
    <footer>
      <div>
        <p>
          <strong></strong>
        </p>
        <p>University Av</p>
        <p>Provo, Utah</p>
        <p>info@TodoReactApp.io</p>
        <p>(000)999-9999</p>
      </div>
      <div className="social-media">
        <a href="https://facebook.com" target="_blank">
          <img src={facebookLogo} alt="facebook-icon" width="32" height="32" />
        </a>
        <a href="https://twitter.com" target="_blank">
          <img src={twitterLogo} alt="twitter-icon" width="32" height="32" />
        </a>
        <a href="https://instagram.com" target="_blank">
          <img
            src={instagramLogo}
            alt="instagram-icon"
            width="32"
            height="32"
          />
        </a>
      </div>
      <div>
        <p>WDD430 Class Project</p>
        <p>Vermont Garcia</p>
        <p className="copyright">
          © <span id="current-year">{year}</span> ToDo React App
        </p>
        <p id="last-modified">{lastUpdate}</p>
      </div>
    </footer>
  );
};

export default Footer;
