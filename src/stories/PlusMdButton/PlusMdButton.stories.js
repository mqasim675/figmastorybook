import React from 'react';
import { PlusMdButton } from './PlusMdButton';

export default {
  title: 'PlusMdButton',
  component: PlusMdButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => <PlusMdButton {...args} />;

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
