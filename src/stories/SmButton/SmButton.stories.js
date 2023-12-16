import React from 'react';
import { SmButton } from './SmButton';

export default {
  title: 'SmButton',
  component: SmButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => <SmButton {...args} />;

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
