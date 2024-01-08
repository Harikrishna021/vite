import { Story, Meta } from '@storybook/react';

import {CheckboxItem} from './Check';
import {CheckProps} from './Check.interface'; 

export default {
  title: 'Atoms/CheckboxItem',
  component: CheckboxItem,
  parameters:{
    layout:"centered",
  }
} as Meta;
const Template: Story<CheckProps> = (args) => <CheckboxItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  selected:true,
  value:"",
};
