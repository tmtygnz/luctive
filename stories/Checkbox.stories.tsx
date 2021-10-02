import React from "react";
import { Checkbox } from "../components/ui/Checkbox";

export default {
  title: "Checkbox",
  component: Checkbox,
};

const Template: React.VFC<{}> = (args) => <Checkbox {...args}></Checkbox>;

export const Default = Template.bind({});
