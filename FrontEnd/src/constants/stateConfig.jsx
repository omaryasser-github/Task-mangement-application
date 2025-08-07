import AddIcon from '../assets/Add_round_duotone.svg';
import DoneIcon from '../assets/Done_round_duotone.svg';
import DoneRoundIcon from '../assets/Done_round.svg';
import EditIcon from '../assets/Edit_duotone.svg';
import TimeIcon from '../assets/Time_atack_duotone.svg';
import TrashIcon from '../assets/Trash.svg';
import CloseIcon from '../assets/close_ring_duotone.svg';

export const stateConfig = {
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