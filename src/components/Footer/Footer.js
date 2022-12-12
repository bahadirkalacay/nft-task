import React from "react";
import "./styles.css";
import { ImTwitter, ImTelegram, ImFacebook2, ImLinkedin } from "react-icons/im";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="footer-col">
            <h4>Verlith</h4>
            <ul>
              <li>
                <a href="#">NFT</a>
              </li>
              <li>
                <a href="#">privacy policy</a>
              </li>
              <li>
                <a href="#">Terms of use</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>HX13 Company</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Governance</a>
              </li>
              <li>
                <a href="#">HC Token</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Socials</h4>
            <div class="social-links">
              <a>
                <ImTelegram />
              </a>
              <a>
                <ImTwitter />
              </a>
              <a>
                <ImFacebook2 />
              </a>
              <a>
                <ImLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
