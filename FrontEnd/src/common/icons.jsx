import React from 'react';

export default function IconButton({
  icon,
  selected,
  onClick,
  bgColor,
  selectedBgColor,
  ...props
}) {
  const background = selected ? selectedBgColor : bgColor;

  return (
    <button
      type="button"
      className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl border-2 text-lg sm:text-xl transition focus:outline-none"
      onClick={onClick}
      style={{
        backgroundColor: background,
        borderColor: background,
      }}
      {...props}
    >
      {icon}
    </button>
  );
}
