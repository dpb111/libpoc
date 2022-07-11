import React from "react";
import Info from '../../iconComponents/Info'
import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    disabled: { control: 'state'}
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Filled = Template.bind({});
Filled.args = {
  filled: true,
  label: "Button",
  disabled: false,
  uppercase: false,
  border: false,
  onClick: () => {},
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Button",
  filled: true,
  disabled: true,
  uppercase: false,
  onClick: () => {},
};

export const DropDown = Template.bind({});
DropDown.args = {
  label: "Button",
  disabled: false,
  dropdown: true,
  filled: true,
  uppercase: false,
  border: false,
  onClick: () => {},
};


export const Uppercase = Template.bind({});
Uppercase.args = {
  label: "Button",
  disabled: false,
  dropdown: false,
  uppercase: true,
  filled: true,
  border: false,
  onClick: () => {},
};

export const Icon = Template.bind({});
Icon.args = {
  label: "Button",
  disabled: false,
  dropdown: false,
  uppercase: true,
  filled: true,
  icon: <Info/>,
  border: false,
  onClick: () => {},
};