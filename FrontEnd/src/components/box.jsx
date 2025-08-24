import React from "react";
import Icon from "../components/icons";

export default React.memo(function Box({
  label,
  description,
  onClick,
  taskData = {},
}) {
  const handleClick = () => {
    if (onClick) {
      if (taskData.state === "add") {
        onClick(null); // Pass null for add new task
      } else {
        onClick(taskData);
      }
    }
  };

  return (
    <div
      className={`flex items-center justify-between rounded-2xl py-4 px-6 my-3 min-h-[60px] shadow-md ${
        onClick
          ? "cursor-pointer hover:shadow-lg transition-shadow duration-200"
          : ""
      }`}
      style={{ backgroundColor: taskData.bg }}
      onClick={handleClick}
    >
      <div className="flex items-center">

        <span className="rounded-xl w-12 h-12 bg-white flex items-center justify-center mr-4">
          {/* <Icon icon={taskData.icon} /> */}
             <img src={taskData.icon} alt="action" className="w-6 h-6" />
        </span>
        <div>
          <div className="font-bold text-xl text-gray-900">{label}</div>
          {description && (
            <div className="text-sm text-gray-500 mt-1">{description}</div>
          )}
        </div>
      </div>
      {taskData.actionIcon && (
        <span
          className={`${taskData.actionBg} rounded-xl w-10 h-10 flex items-center justify-center`}
        >
          <img src={taskData.actionIcon} alt="action" className="w-6 h-6" />
        </span>
      )}
    </div>
  );
});
