import React from "react";
import { Spinner } from "../components/ui/Spinner";

export default{
	title: "Spinner",
	component: Spinner
}

const Template = (args) => <Spinner {...args}></Spinner>;

export const Default = Template.bind({});
