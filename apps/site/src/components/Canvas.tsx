import React from "react"
import Reset from "./Icons/Reset"
import Share from "./Icons/Share"

const Canvas = () => {
	return (
		<div className="flex flex-col items-center justify-center row-start-2 lg:row-auto bg-white pt-[50px] lg:pt-[175px]">
			<div className="w-[500px] h-[400px] lg:w-[500px] lg:h-[450px] border-2 border-gray-500 bg-gray-300" />
			<div className="flex items-end h-full justify-between w-full px-8 pb-[30px]">
				<Reset />
				<Share />
			</div>
		</div>
	)
}

export default Canvas
