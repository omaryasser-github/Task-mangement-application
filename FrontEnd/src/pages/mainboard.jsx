import React from "react";
import logo from "../assets/Logo.svg";
import Edit_doutone from "../assets/Edit_duotone.svg";
import Box from "../common/box";
import MainLayout from "../layouts/mainlayout";
import SideBoard from "./sideboard";

export default function MainBoard() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <MainLayout>
      {/* Sidebar open button */}
      <button
        className="fixed top-6 right-6 z-40 bg-yellow-400 hover:bg-yellow-500 text-white rounded-full p-3 shadow-lg focus:outline-none transition"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open sidebar"
      >
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-menu"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <SideBoard isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex items-center mb-4">
        <img src={logo} alt="logo" className="w-12 mr-4" />
        <h1 className="text-4xl font-bold m-0 flex items-center gap-2">
          My Task Board
          <img src={Edit_doutone} alt="Edit" className="w-5 h-5 mt-1" />
        </h1>
      </div>
      <div className="text-gray-700 text-lg mb-8">Tasks to keep organised</div>
      <Box state="inProgress" label="Task in Progress" />
      <Box state="completed" label="Task Completed" />
      <Box state="wontDo" label="Task Won't Do" />
      <Box
        state="toDo"
        label="Task To Do"
        description="Work on a Challenge on devChallenges.io, learn TypeScript."
      />
      <Box state="add" label="Add new task" />
    </MainLayout>
  );
}
