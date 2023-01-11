/* eslint-disable no-mixed-spaces-and-tabs */
import clsx from "clsx"
import React, { useState } from "react"
import useAuthStore from "store/authStore"

interface TapeSettingProps {
	name: string
}

const TapeSetting = ({ name }: TapeSettingProps) => {
	const [isSelected, setIsSelected] = useState("")
	const { setTapeColor } = useAuthStore()

	return (
		<div className="mt-[2.063rem]">
			<p className="text-15 uppercase text-body pl-6 pb-[10px]">{name}</p>
			<div className="flex justify-evenly">
				<div
					className={
						isSelected === "1"
							? clsx(
									"bg-white rounded-full w-[40px] h-[40px] md:w-[50px] md:h-[50px]",
									"border-4 border-orange-main",
							  )
							: "bg-white rounded-full w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
					}
					onClick={() => {
						setIsSelected("1")
						setTapeColor("white")
					}}
				/>
				<div
					className={
						isSelected === "2"
							? clsx(
									"bg-blue-600 rounded-full w-[40px] h-[40px] md:w-[50px] md:h-[50px]",
									"border-2 border-white",
							  )
							: "bg-blue-600 rounded-full w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
					}
					onClick={() => {
						setIsSelected("2")
						setTapeColor("blue")
					}}
				/>
				<div
					className={
						isSelected === "3"
							? clsx(
									"bg-green-600 rounded-full w-[40px] h-[40px] md:w-[50px] md:h-[50px]",
									"border-2 border-white",
							  )
							: "bg-green-600 rounded-full w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
					}
					onClick={() => {
						setIsSelected("3")
						setTapeColor("green")
					}}
				/>
				<div
					className={
						isSelected === "4"
							? clsx(
									"bg-red-800 rounded-full w-[40px] h-[40px] md:w-[50px] md:h-[50px]",
									"border-2 border-white",
							  )
							: "bg-red-800 rounded-full w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
					}
					onClick={() => {
						setIsSelected("4")
						setTapeColor("red")
					}}
				/>
				<div
					className={
						isSelected === "5"
							? clsx(
									"bg-gray-500 rounded-full w-[40px] h-[40px] md:w-[50px] md:h-[50px]",
									"border-2 border-white",
							  )
							: "bg-gray-500 rounded-full w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
					}
					onClick={() => {
						setIsSelected("5")
						setTapeColor("gray")
					}}
				/>
				<div
					className={
						isSelected === "6"
							? clsx(
									"bg-yellow-400 rounded-full w-[40px] h-[40px] md:w-[50px] md:h-[50px]",
									"border-2 border-white",
							  )
							: "bg-yellow-400 rounded-full w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
					}
					onClick={() => {
						setIsSelected("6")
						setTapeColor("yellow")
					}}
				/>
			</div>
		</div>
	)
}

export default TapeSetting
