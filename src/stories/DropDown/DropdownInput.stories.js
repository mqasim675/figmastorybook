import React from 'react';
import DropdownInput from './DropdownInput';

export default {
  title: 'DropdownInput',
  component: DropdownInput,
};

const options = ['Option 1', 'Option 2', 'Option 3'];

const Template = (args) => <DropdownInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'lable',
  options,
  onSelect: (selectedOption) => console.log(`Selected: ${selectedOption}`),
};
