import React, {
	InputHTMLAttributes,
	DetailedHTMLProps
} from 'react'

const size = {
	sm: "h-9 w-5",
	md: "h-7 w-5",
	lg: "h-5 w-5"
}

export type InputProps = DetailedHTMLProps<
	InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
> & {
	inputSize?: keyof typeof size,
	placeholder?: string,
	type?: string
}

export const Input: React.FC<InputProps> = ({
	inputSize="sm",
	className="",
	placeholder="",
	type=""
}) => {
	return (
		<div>
			<input className={`${size[inputSize]} bg-white focus:outline-none px-3
			${className}`} placeholder={placeholder} type={type}/>
		</div>
	)
}
