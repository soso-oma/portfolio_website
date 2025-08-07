import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>
          &copy; {new Date().getFullYear()} <span className="footer-name">Anyim Mmesomachukwu Ozioma</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
