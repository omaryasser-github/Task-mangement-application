import React from 'react';

export default function Button({ children, variant = 'primary', icon, ...props }) {
  let base = 'flex items-center justify-center px-6 py-2 rounded-full font-medium focus:outline-none transition';
  let styles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-700 hover:bg-gray-300',
    danger: 'bg-gray-100 text-red-600 hover:bg-red-200',
  };
  return (
    <button className={`${base} ${styles[variant]}`} {...props}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
} 