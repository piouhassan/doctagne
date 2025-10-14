import React from "react";


const SocialMedia: React.FC = () => (
  <div className="socialMediaContainer">
    <div className="post-social-sharing wow fadeInUp" data-wow-delay="0.5s">
      <ul className="socialMediaList">
        <li>
          <a href="https://www.facebook.com/Doctagne/" aria-label="Facebook">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/doctagne" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a href="https://x.com/doctagne" aria-label="Twitter">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://api.whatsapp.com/send?phone=14709540621" aria-label="WhatsApp">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default SocialMedia;