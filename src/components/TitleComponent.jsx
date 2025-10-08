import PropTypes from 'prop-types';

const TitleComponent = ({ 
  title, 
  subtitle, 
  variant = 'default', 
  alignment = 'center',
  gradient = true,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  ...props 
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const variantClasses = {
    hero: 'text-5xl md:text-7xl font-bold',
    large: 'text-4xl md:text-6xl font-bold',
    medium: 'text-3xl md:text-4xl font-bold',
    default: 'text-2xl md:text-3xl font-bold',
    small: 'text-xl md:text-2xl font-semibold'
  };

  const gradientClass = gradient 
    ? 'bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent' 
    : '';

  const baseSubtitleClasses = 'text-gray-600 mt-4';
  const subtitleSizeClasses = {
    hero: 'text-xl md:text-2xl',
    large: 'text-lg md:text-xl',
    medium: 'text-base md:text-lg',
    default: 'text-base',
    small: 'text-sm md:text-base'
  };

  return (
    <div className={`${alignmentClasses[alignment]} ${className}`} {...props}>
      <h1 className={`${variantClasses[variant]} ${gradientClass} ${titleClassName}`}>
        {title}
      </h1>
      {subtitle && (
        <p className={`${baseSubtitleClasses} ${subtitleSizeClasses[variant]} ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

TitleComponent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  variant: PropTypes.oneOf(['hero', 'large', 'medium', 'default', 'small']),
  alignment: PropTypes.oneOf(['left', 'center', 'right']),
  gradient: PropTypes.bool,
  className: PropTypes.string,
  titleClassName: PropTypes.string,
  subtitleClassName: PropTypes.string
};

export default TitleComponent;