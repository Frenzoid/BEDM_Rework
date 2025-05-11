// components/Testimonial/Testimonial.jsx
import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import '../styles/Testimonial.css';

const Testimonial = ({ quote, name, location, image, year }) => {
  return (
    <div className="testimonial">
      <div className="testimonial-content">
        <FaQuoteLeft className="quote-icon" />
        <p className="quote-text">{quote}</p>
        <div className="rating">
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
        </div>
      </div>
      <div className="testimonial-author">
        <div className="author-image">
          <img src={image} alt={name} />
        </div>
        <div className="author-info">
          <h4>{name}</h4>
          <p className="location">{location}</p>
          <span className="year">{year}</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;