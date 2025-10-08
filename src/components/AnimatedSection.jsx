import { useEffect } from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AnimatedSection = ({ 
  children, 
  animation = 'fade-up',
  delay = 0,
  duration = 1000,
  offset = 120,
  once = true,
  className = '',
  ...props 
}) => {
  useEffect(() => {
    AOS.init({
      duration: duration,
      once: once,
      offset: offset,
      easing: 'ease-out-cubic',
    });
  }, [duration, once, offset]);

  return (
    <div 
      className={className}
      data-aos={animation}
      data-aos-delay={delay}
      data-aos-duration={duration}
      data-aos-offset={offset}
      data-aos-once={once}
      {...props}
    >
      {children}
    </div>
  );
};

AnimatedSection.propTypes = {
  children: PropTypes.node.isRequired,
  animation: PropTypes.oneOf([
    'fade',
    'fade-up',
    'fade-down',
    'fade-left',
    'fade-right',
    'fade-up-right',
    'fade-up-left',
    'fade-down-right',
    'fade-down-left',
    'flip-left',
    'flip-right',
    'flip-up',
    'flip-down',
    'zoom-in',
    'zoom-in-up',
    'zoom-in-down',
    'zoom-in-left',
    'zoom-in-right',
    'zoom-out',
    'zoom-out-up',
    'zoom-out-down',
    'zoom-out-left',
    'zoom-out-right',
    'slide-up',
    'slide-down',
    'slide-left',
    'slide-right'
  ]),
  delay: PropTypes.number,
  duration: PropTypes.number,
  offset: PropTypes.number,
  once: PropTypes.bool,
  className: PropTypes.string
};

export default AnimatedSection;