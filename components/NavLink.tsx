import React from 'react'
import Link from 'next/link'

export type LinkProps = {
	href: string
}

export const NavLink:React.FC<LinkProps> = ({
	children,
	href
}) => {
	return (
		<Link href={href}>
			<a className="hover:underline">{children}</a>
		</Link>
	)
}
