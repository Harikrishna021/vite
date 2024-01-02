import { Story, Meta } from '@storybook/react';

import Card from './Card';
import {CardProps} from './Card.interface'; 

export default {
  title: 'Atoms/Card',
  component: Card,
  parameters:{
    layout:"centered",
  }
} as Meta;
const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title:"hari",
  info:"jdfjdsf"
};
