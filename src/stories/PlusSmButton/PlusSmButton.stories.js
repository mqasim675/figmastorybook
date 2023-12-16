import React from 'react';
import { PlusSmButton } from './PlusSmButton';

export default {
  title: 'PlusSmButton',
  component: PlusSmButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => <PlusSmButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  label: 'Button',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  type: 'tertiary',
  label: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: 'disabled',
  label: 'Button',
};
