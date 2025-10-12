import React from "react";


const SocialMedia: React.FC = () => (
  <div className="socialMediaContainer">
    <div className="post-social-sharing wow fadeInUp" data-wow-delay="0.5s">
      <ul className="socialMediaList">
        <li>
          <a href="#" aria-label="Facebook">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="#" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a href="#" aria-label="Twitter">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </li>
        <li>
          <a href="#" aria-label="WhatsApp">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default SocialMedia;