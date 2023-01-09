/* eslint-disable no-mixed-spaces-and-tabs */
import clsx from "clsx"
import React, { useState } from "react"

interface TapeSettingProps {
	name: string
}

const TapeSetting = ({ name }: TapeSettingProps) => {
	const [isSelected, setIsSelected] = useState("")

	return (
		<div className="mt-[2.063rem] last:mb-[6.25rem]">
			<p className="text-15 uppercase text-body pl-6 pb-[10px]">{name}</p>
			<div className="flex justify-evenly">
				<div
					className={
						isSelected === "1"
							? clsx(
									"bg-white rounded-full w-[50px] h-[50px]",
									"border-4 border-orange-main",
							  )
							: "bg-white rounded-full w-[50px] h-[50px]"
					}
					onClick={() => setIsSelected("1")}
				/>
				<div
					className={
						isSelected === "2"
							? clsx(
									"bg-blue-600 rounded-full w-[50px] h-[50px]",
									"border-2 border-white",
							  )
							: "bg-blue-600 rounded-full w-[50px] h-[50px]"
					}
					onClick={() => setIsSelected("2")}
				/>
				<div
					className={
						isSelected === "3"
							? clsx(
									"bg-green-600 rounded-full w-[50px] h-[50px]",
									"border-2 border-white",
							  )
							: "bg-green-600 rounded-full w-[50px] h-[50px]"
					}
					onClick={() => setIsSelected("3")}
				/>
				<div
					className={
						isSelected === "4"
							? clsx(
									"bg-red-800 rounded-full w-[50px] h-[50px]",
									"border-2 border-white",
							  )
							: "bg-red-800 rounded-full w-[50px] h-[50px]"
					}
					onClick={() => setIsSelected("4")}
				/>
				<div
					className={
						isSelected === "5"
							? clsx(
									"bg-gray-500 rounded-full w-[50px] h-[50px]",
									"border-2 border-white",
							  )
							: "bg-gray-500 rounded-full w-[50px] h-[50px]"
					}
					onClick={() => setIsSelected("5")}
				/>
				<div
					className={
						isSelected === "6"
							? clsx(
									"bg-yellow-400 rounded-full w-[50px] h-[50px]",
									"border-2 border-white",
							  )
							: "bg-yellow-400 rounded-full w-[50px] h-[50px]"
					}
					onClick={() => setIsSelected("6")}
				/>
			</div>
		</div>
	)
}

export default TapeSetting
