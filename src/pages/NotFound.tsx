import React from 'react';
import Navigation from "../components/Navigation";
import '../components/NotFound.scss';

const NotFound = () => {
  return (
    <div className="not-found-page">
      {/* Navigation bar */}
      <Navigation />

      {/* Animated figure and messages */}
      <div className="not-found-content">
        {/* Animated figure container */}
        <div className="container">
          <input type="checkbox" id="switch" />
          <div className="ellipse"></div>
          <div className="ray"></div>
          <div className="head"></div>
          <div className="neck"></div>
          <div className="body">
            <label htmlFor="switch"></label>
          </div>
        </div>
        {/* Message container */}
        <div className="container">
          <div className="msg msg_1">404</div>
          <div className="msg msg_2">Page Not Found</div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

