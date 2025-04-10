import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      {/* Footer for the current page */}
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#f1f1f1",
        }}
      >
        <p>© 2025. All rights reserved.</p>
        <p>
          Powered by <a href="https://github.com/ankitpathak62">Team HireVerse</a>
        </p>
        <p>
        <Link >Privacy Policy </Link> |
        <Link > Terms of Service</Link>
          {/* <Link to={"/PrivacyPolicy"}>Privacy Policy </Link> | */}
          {/* <Link to={"/TermsofService"}> Terms of Service</Link> */}
        </p>
      </div>
    </div>
  );
};

export default Footer;
