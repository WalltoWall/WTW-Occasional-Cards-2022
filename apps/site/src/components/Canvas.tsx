import clsx from "clsx"
import React from "react"
import useAuthStore from "store/authStore"
import Reset from "./Icons/Reset"
import Share from "./Icons/Share"
import Mixtape from "./Mixtape"

const Canvas = ({ className, ...props }: React.ComponentProps<"div">) => {
	const { backgroundImage } = useAuthStore()

	return (
		<div
			className={
				backgroundImage
					? clsx(className, "bg-none relative bg-cover")
					: clsx(className, "bg-body relative")
			}
			style={{ backgroundImage: `url(${backgroundImage})` }}
			{...props}
		>
			<Mixtape />
			<div className="absolute bottom-0 inset-x-0 flex items-end h-full justify-between w-full px-8 pb-[30px]">
				<Reset className="w-24 lg:w-[180px]" />
				<Share className=" w-24 lg:w-[180px]" />
			</div>
		</div>
	)
}

export default Canvas
