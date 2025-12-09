import React from 'react';

const PrimaryButton = ({ 
  children, 
  onClick, 
  className = '',
  variant = 'primary',
  size = 'medium',
  padding = 'medium',
  type = 'button',
  fullWidth = false,
  bold = false,
  ...props 
}) => {
  const baseClasses = `rounded-full transition-all duration-300 ${bold ? 'font-bold' : 'font-medium'} inline-flex items-center justify-center gap-2`;
  
  const variantClasses = {
    primary: 'bg-homebear-green-brand text-white hover:bg-homebear-green-light transform hover:scale-105',
    secondary: 'bg-white text-homebear-green-brand hover:bg-homebear-green-brand transform hover:scale-105 border-2 border-homebear-green-brand hover:text-white',
  };
  
  const sizeClasses = {
    small: 'px-4 py-1.5 text-sm',
    medium: 'px-6 py-2',
    large: 'px-8 py-3 text-lg',
  };

  const paddingClasses = {
    small: 'py-1.5',
    medium: 'py-2',
    large: 'py-3',
  }
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${paddingClasses[padding]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
