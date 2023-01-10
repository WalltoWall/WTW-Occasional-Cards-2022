import React from "react"
import HeaderIcon from "./Icons/HeaderIcon"

export const Header = (props: React.ComponentProps<"header">) => {
	return (
		<header id="header" {...props}>
			<div className="py-5 pl-2 pr-4 bg-header ">
				<HeaderIcon className="w-full max-w-[789px] mx-auto" />
			</div>
			<div className="bg-orange-400  h-4" />
			<div className="bg-yellow-300  h-4" />
		</header>
	)
}
