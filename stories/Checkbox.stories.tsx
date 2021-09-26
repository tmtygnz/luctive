import React from "react";
import { Checkbox } from "../components/ui/Checkbox";

export default{
	title: "Checkbox",
	component: Checkbox
}

const Template = (args) => <Checkbox {...args}></Checkbox>;

export const Default = Template.bind({});
