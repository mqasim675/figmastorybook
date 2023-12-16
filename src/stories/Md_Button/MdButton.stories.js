import { MdButton } from './MdButton';

export default {
  title: 'Example/MdButton',
  component: MdButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Primary = {
  args: {
    isTrue: true,
    type: 'primary',
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    isTrue: true,
    type: 'secondary',
    label: 'Button',
  },
};

export const Tertiary = {
  args: {
    isTrue: true,
    type: 'tertiary',
    label: 'Button',
  },
};
export const Disabled = {
  args: {
    isTrue: true,
    type: 'disabled',
    label: 'Button',
  },
};
