import React from "react";
import { Button } from "../components/ui/Button";

export default {
  title: "Button",
  component: Button,
};

const Template: React.VFC<{}> = (args) => (
  <Button {...args}>Hello Button</Button>
);

export const Default = Template.bind({});
