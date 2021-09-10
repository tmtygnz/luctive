import React, {
	InputHTMLAttributes,
	DetailedHTMLProps
} from 'react'

const size = {
	sm: "h-9",
	md: "h-7",
	lg: "h-5"
}

export type InputProps = DetailedHTMLProps<
	InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
> & {
	inputSize?: keyof typeof size,
	placeholder?: string
}

export const Input: React.FC<InputProps> = ({
	inputSize="sm",
	className="",
	placeholder,
}) => {
	return (
		<div>
			<input className={`${size[inputSize]} border rounded-lg border-gray-400 
			placeholder-gray-400 text-indent
			focus:outline-none focus:ring focus:border-blue-300
			transition duration-150 ease-in-out
			${className}`} placeholder={placeholder}/>
		</div>
	)
}
