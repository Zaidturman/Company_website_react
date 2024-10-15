import React from "react";
import { FaClock, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

import "../../../css/header.css";

function Header() {
  return (
    <div className="contactData">
      <div>
        <p>
          <FaClock className="icons" /> Mon -Fri 08:00 -14:00
        </p>
        <p>
          <FaPhone className="icons" /> +970568096370
        </p>
        <p>
          <FaMapMarkerAlt className="icons" /> Nuba - Hebron
        </p>
      </div>
      <div className="social-media-icons">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="icons" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="icons" />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className="icons" />
        </a>
        <a
          href="https://www.whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="icons" />
        </a>
      </div>
    </div>
  );
}

export default Header;
