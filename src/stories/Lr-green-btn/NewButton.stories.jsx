// NewButton.story.js
import { NewButton } from './NewButton';

export default {
  title: 'Example/NewButton',
  component: NewButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Basic = {
  args: {
    label: 'New Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'New Button',
  },
};

export const Medium = {
  args: {
    size: 'medium',
    label: 'New Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'New Button',
  },
};
