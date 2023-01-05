import React from "react"

interface TapeSettingProps {
	name: string
}

const TapeSetting = ({ name }: TapeSettingProps) => {
	return (
		<div className="mt-[2.063rem] last:mb-[6.25rem]">
			<p className="text-[15px] uppercase text-body pl-6 pb-[10px]">{name}</p>
			<div className="flex justify-evenly">
				<div className="bg-body rounded-full w-[50px] h-[50px]" />
				<div className="bg-body rounded-full w-[50px] h-[50px]" />
				<div className="bg-body rounded-full w-[50px] h-[50px]" />
				<div className="bg-body rounded-full w-[50px] h-[50px]" />
				<div className="bg-body rounded-full w-[50px] h-[50px]" />
				<div className="bg-body rounded-full w-[50px] h-[50px]" />
			</div>
		</div>
	)
}

export default TapeSetting
