// components/TimelineEvent/TimelineEvent.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/TimelineEvent.css';

const TimelineEvent = ({ year, title, description, image, align, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  // Animation variants
  const variants = {
    hidden: {
      opacity: 0,
      x: align === 'left' ? -50 : 50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut'
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={`timeline-event ${align}`}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      custom={index}
    >
      <div className="timeline-dot"></div>

      <div className="event-content">
        <div className="event-year">{year}</div>
        <div className="event-card">
          <div className="event-image">
            <img src={image} alt={title} />
          </div>
          <div className="event-text">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineEvent;