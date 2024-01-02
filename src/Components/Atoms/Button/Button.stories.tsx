import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './Button';
import ButtonProps from './Button.interface'; 

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters:{
    layout:"centered",
  }
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Click me',
  onClick: action('Button clicked'),
};
