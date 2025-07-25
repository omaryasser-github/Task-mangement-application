import React, { useState } from "react";
import close_ring_duotone from "../assets/close_ring_duotone-1.svg";
import Button from "../common/button";
import Status from "../common/status";

const iconOptions = ["👨‍💼", "💬", "☕", "🏆", "📚", "⏰"];

export default function SideBoard({ isOpen, onClose }) {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState(iconOptions[0]);
  const [status, setStatus] = useState("inProgress");

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full sm:w-[30rem] md:w-[30rem] lg:w-[30rem] max-w-full sm:max-w-[80vw] md:max-w-[30rem] bg-white shadow-lg z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ boxShadow: "0 0 20px rgba(0,0,0,0.1)" }}
    >
      {/* sidebar task  */}
      <form className="p-4 sm:p-6 flex flex-col gap-4 h-[calc(100%-80px)] overflow-y-auto">
        {/* Header */}
        <header className="flex justify-between items-center p-1">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Task details</h2>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gray-10 border border-gray-300 hover:bg-gray-200 focus:outline-none rounded-md"
            aria-label="Close sidebar"
            type="button"
          >
            <img src={close_ring_duotone} alt="Close" className="w-5 h-5" />
          </button>
        </header>

        {/* Task Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-1 text-sm sm:text-base">
            Task name
          </label>
          <input
            className="w-full border-2 border-gray-200 rounded-xl px-3 py-2 sm:px-4 sm:py-2 focus:outline-none focus:border-blue-400 text-base sm:text-lg"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Task name"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-500 font-medium mb-1 text-sm sm:text-base">
            Description
          </label>
          <textarea
            className="w-full border-2 border-gray-200 rounded-xl px-3 py-2 sm:px-4 sm:py-2 focus:outline-none focus:border-blue-400 min-h-[60px] sm:min-h-[70px] resize-none text-base sm:text-lg"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter a short description"
          />
        </div>

        {/* Icons selection */}
        <div>
          <label className="block text-gray-500 font-medium mb-1 text-sm sm:text-base">Icon</label>
          <div className="flex gap-2 sm:gap-3 mb-2 flex-wrap">
            {iconOptions.map((icn, idx) => (
              <button
                key={icn}
                type="button"
                className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl border-2 text-lg sm:text-xl transition focus:outline-none ${
                  icon === icn
                    ? "border-blue-400 bg-blue-50"
                    : "border-gray-200 bg-gray-50"
                }`}
                onClick={() => setIcon(icn)}
                aria-label={`Select icon ${idx + 1}`}
              >
                {icn}
              </button>
            ))}
          </div>
        </div>

        {/* Status selection */}
        <div>
          <label className="block text-gray-500 font-medium mb-1 text-sm sm:text-base">Status</label>
          <Status value={status} onChange={setStatus} />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
          <Button
            variant="danger"
            icon={
              <span role="img" aria-label="delete">
                🗑️
              </span>
            }
            className="w-full sm:w-auto"
          >
            Delete
          </Button>
          <Button variant="primary" icon={<span>&#10003;</span>} className="w-full sm:w-auto">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}
