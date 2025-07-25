import React from 'react';

const statusOptions = [
  {
    value: 'inProgress',
    label: 'In Progress',
    color: 'bg-yellow-400',
    icon: <span className="inline-block w-5 h-5 rounded-full bg-yellow-400 border-2 border-white" />,
  },
  {
    value: 'completed',
    label: 'Completed',
    color: 'bg-green-400',
    icon: <span className="inline-block w-5 h-5 rounded-full bg-green-400 border-2 border-white" />,
  },
  {
    value: 'wontDo',
    label: 
      "Won't do",
    color: 'bg-red-400',
    icon: <span className="inline-block w-5 h-5 rounded-full bg-red-400 border-2 border-white" />,
  },
];

export default function Status({ value, onChange, options = statusOptions }) {
  return (
    <div className="flex gap-4 mt-2">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          className={`flex items-center gap-2 px-4 py-2 rounded-xl border-2 transition focus:outline-none ${
            value === opt.value
              ? 'border-blue-500 bg-white shadow'
              : 'border-gray-200 bg-gray-50'
          }`}
          onClick={() => onChange(opt.value)}
        >
          {opt.icon}
          <span className={`font-medium ${value === opt.value ? '' : 'text-gray-600'}`}>{opt.label}</span>
          {value === opt.value && (
            <span className="ml-2 text-blue-500 text-lg">&#10003;</span>
          )}
        </button>
      ))}
    </div>
  );
} 