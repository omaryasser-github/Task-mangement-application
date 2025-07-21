import React from 'react';
import AddIcon from '../assets/Add_round_duotone.svg';
import DoneIcon from '../assets/Done_round_duotone.svg';
import DoneRoundIcon from '../assets/Done_round.svg';
import EditIcon from '../assets/Edit_duotone.svg';
import TimeIcon from '../assets/Time_atack_duotone.svg';
import TrashIcon from '../assets/Trash.svg';
import CloseIcon from '../assets/close_ring_duotone.svg';

const stateConfig = {
  inProgress: {
    bg: 'bg-yellow-200',
    icon: TimeIcon,
    actionBg: 'bg-yellow-500',
    actionIcon: EditIcon,
  },
  completed: {
    bg: 'bg-green-200',
    icon: DoneIcon,
    actionBg: 'bg-green-500',
    actionIcon: DoneRoundIcon,
  },
  wontDo: {
    bg: 'bg-red-100',
    icon: TrashIcon,
    actionBg: 'bg-red-500',
    actionIcon: CloseIcon,
  },
  toDo: {
    bg: 'bg-blue-100',
    icon: EditIcon,
    actionBg: 'bg-blue-300',
    actionIcon: null,
  },
  add: {
    bg: 'bg-yellow-100',
    icon: AddIcon,
    actionBg: 'bg-yellow-500',
    actionIcon: AddIcon,
  },
};

export default function Box({ state = 'toDo', label, description }) {
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
}
