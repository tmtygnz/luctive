import React from "react";
import { Input } from "../components/Input";

export default{
	title: "Input",
	component: Input
}

const Template = (args) => <Input {...args}></Input>;

export const Default = Template.bind({});
