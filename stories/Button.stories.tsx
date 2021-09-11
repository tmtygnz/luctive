import React from "react";
import { Story } from "@storybook/react";
import { Button } from "../components/ui/Button";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => <Button {...args}>Hello Button</Button>;

export const Default = Template.bind({});
