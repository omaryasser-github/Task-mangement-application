import React from 'react';
import Box from '../common/box';
import MainLayout from '../layouts/mainlayout';

export default function MainBoard() {
  return (
    <MainLayout>
      <div className="flex items-center mb-4">
        <img  alt="logo" className="w-12 mr-4" />
        <h1 className="text-4xl font-bold m-0">My Task Board <span role="img" aria-label="edit">✏️</span></h1>
      </div>
      <div className="text-gray-700 text-lg mb-8">Tasks to keep organised</div>
      <Box state="inProgress" label="Task in Progress" />
      <Box state="completed" label="Task Completed" />
      <Box state="wontDo" label="Task Won't Do" />
      <Box state="toDo" label="Task To Do" description="Work on a Challenge on devChallenges.io, learn TypeScript." />
      <Box state="add" label="Add new task" />
    </MainLayout>
  );
}
