import React from 'react';
import './Button.css';

const Button = ({ icon, label, onClick, className, ...props }) => {
  return (
    <button
      className={`${className}`}
      onClick={onClick}
      {...props}
    >
      {label && <span className="button-label">{label}</span>}
      {icon && <span className="button-icon">{icon}</span>}
    </button>
  );
};

export default Button;
