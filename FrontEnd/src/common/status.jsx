import React from 'react';

export default function StatusSelector({ options, value, onChange }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mt-2 w-full">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          className={`flex items-center gap-2 px-4 py-3 rounded-2xl border-2 w-full sm:w-auto transition focus:outline-none text-base sm:text-lg font-medium
            ${value === opt.value ? 'border-blue-600 bg-white shadow' : 'border-gray-200 bg-white'}
          `}
          onClick={() => onChange(opt.value)}
          aria-pressed={value === opt.value}
        >
          <span className={`inline-block w-7 h-7 rounded-full flex items-center justify-center mr-2`} style={{ backgroundColor: opt.color }}>
            {opt.icon}
          </span>
          <span className={`flex-1 text-left ${value === opt.value ? 'text-gray-900' : 'text-gray-600'}`}>{opt.label}</span>
          {value === opt.value && (
            <span className="ml-2 text-blue-600 text-xl font-bold">&#10003;</span>
          )}
        </button>
      ))}
    </div>
  );
} 