import React from 'react';

const CatcherButton = ({ 
  children, 
  onClick, 
  className = '',
  type = 'button',
  ...props 
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-white text-homebear-green-brand px-12 py-5 rounded-full hover:bg-homebear-beige transition-all duration-300 transform hover:scale-105 font-bold shadow-2xl inline-flex items-center justify-center gap-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CatcherButton;
