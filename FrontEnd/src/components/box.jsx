import React from "react";
import { stateConfig } from '../constants/stateConfig';

export default React.memo(function Box({ state = 'toDo', label, description }) {
  const config = stateConfig[state] || stateConfig['toDo'];
  return (
    <div className={`flex items-center justify-between ${config.bg} rounded-2xl py-4 px-6 my-3 min-h-[60px] shadow-md`}>
      <div className="flex items-center">
        <span className="bg-white rounded-xl w-12 h-12 flex items-center justify-center mr-4">
          <img src={config.icon} alt="icon" className="w-8 h-8" />
        </span>
        <div>
          <div className="font-bold text-xl text-gray-900">{label}</div>
          {description && <div className="text-sm text-gray-500 mt-1">{description}</div>}
        </div>
      </div>
      {config.actionIcon && (
        <span className={`${config.actionBg} rounded-xl w-10 h-10 flex items-center justify-center`}>
          <img src={config.actionIcon} alt="action" className="w-6 h-6" />
        </span>
      )}
    </div>
  );
})
