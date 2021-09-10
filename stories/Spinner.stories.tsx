import React from "react";
import { Spinner } from "../components/Spinner";

export default{
	title: "Spinner",
	component: Spinner
}

const Template = (args) => <Spinner {...args}>Hello Button</Spinner>;

export const Default = Template.bind({});
