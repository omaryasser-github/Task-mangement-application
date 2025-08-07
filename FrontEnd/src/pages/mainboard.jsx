import React from "react";
import logo from "../assets/Logo.svg";
import Edit_doutone from "../assets/Edit_duotone.svg";
import Box from "../components/box";
import MainLayout from "../layouts/mainlayout";
import SideBoard from "./sideboard";
import SidebarToggleButton from "../components/SidebarToggleButton";

export default function MainBoard() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <MainLayout>
      {/* Sidebar open button */}
          <SidebarToggleButton onClick={() => setSidebarOpen(true)} />

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
