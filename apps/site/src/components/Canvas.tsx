import React from "react"
import Reset from "./Icons/Reset"
import Share from "./Icons/Share"
import Mixtape from "./Mixtape"

const Canvas = () => {
	return (
		<div className="flex flex-col items-center justify-center row-start-2 lg:row-auto bg-white pt-[50px] lg:pt-[175px] max-w-screen overflow-hidden">
			<Mixtape />
			<div className="flex items-end h-full justify-between w-full px-8 pb-[30px]">
				<Reset />
				<Share />
			</div>
		</div>
	)
}

export default Canvas
