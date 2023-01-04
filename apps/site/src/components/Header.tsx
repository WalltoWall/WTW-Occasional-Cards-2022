import React from "react"
import HeaderIcon from "./Icons/HeaderIcon"

const Header = () => {
	return (
		<header className="flex flex-col justify-end text-center col-span-2 bg-header">
			<div className="flex items-center justify-center py-[18px]">
				<HeaderIcon />
			</div>
			<div className="bg-orange-400 w-full h-4" />
			<div className="bg-yellow-300 w-full h-4" />
		</header>
	)
}

export default Header
