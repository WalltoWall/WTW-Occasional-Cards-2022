import React, { RefObject } from "react"
import * as Tabs from "@radix-ui/react-tabs"
import SearchBar from "./SearchBar"
import Triangle from "./Icons/Triangle"
import TapeSetting from "./TapeSetting"
import Image from "next/image"
import clsx from "clsx"

interface scroll {
	button: RefObject<HTMLButtonElement>
}

const Trigger = React.forwardRef<HTMLButtonElement, Tabs.TabsTriggerProps>(
	({ className, value, children, ...props }, ref) => {
		return (
			<Tabs.Trigger
				value={value}
				ref={ref}
				className={clsx(
					className,
					"font-bold text-body text-20 tracking-widest uppercase rounded-full px-10 py-2 flex-shrink-0",
					"data-[state=active]:bg-yellow-search data-[state=active]:text-black",
				)}
				{...props}
			>
				{children}
			</Tabs.Trigger>
		)
	},
)
Trigger.displayName = "Trigger"

const SidebarNav = () => {
	const rPlaylistBtn = React.useRef<HTMLButtonElement>(null)
	const rCustomizeBtn = React.useRef<HTMLButtonElement>(null)
	const rStickersBtn = React.useRef<HTMLButtonElement>(null)

	const scrollBar = ({ button }: scroll) => {
		if (button == null) return
		button.current?.scrollIntoView({ inline: "center", behavior: "smooth" })
	}

	return (
		<Tabs.Root
			defaultValue="playlist"
			className="bg-black py-7 px-8 text-white overflow-hidden"
		>
			<Tabs.List className="flex overflow-x-auto scrollbar-hide overflow-y-hidden px-8 overscroll-contain -mx-8">
				<Trigger
					value="playlist"
					ref={rPlaylistBtn}
					onClick={() => scrollBar({ button: rPlaylistBtn })}
				>
					Playlist
				</Trigger>
				<Trigger
					value="customize"
					ref={rCustomizeBtn}
					onClick={() => scrollBar({ button: rCustomizeBtn })}
				>
					Customize
				</Trigger>
				<Trigger
					value="stickers"
					ref={rStickersBtn}
					onClick={() => scrollBar({ button: rStickersBtn })}
				>
					Stickers
				</Trigger>
			</Tabs.List>

			<Tabs.Content value="playlist">
				<Playlist />
			</Tabs.Content>

			<Tabs.Content value="customize" className="w-full">
				<Customize />
			</Tabs.Content>

			<Tabs.Content value="stickers" className="w-full">
				<Stickers />
			</Tabs.Content>
		</Tabs.Root>
	)
}

const Playlist = () => {
	return (
		<div className="flex flex-col h-screen">
			<SearchBar />
			<p className="text-body font-medium text-20 pt-[33px] self-start pl-[10px]">
				Add some songs to your playlist.
			</p>
		</div>
	)
}

const Customize = () => {
	return (
		<div className="flex flex-col pt-[64px] h-screen">
			<div className="flex flex-col justify-between px-6 items-start">
				<div className="flex justify-between pb-2 w-full">
					<h3 className="text-body uppercase text-20 font-bold tracking-widest">
						Background
					</h3>
					<Triangle />
				</div>
				<div className="bg-body w-full h-1" />
			</div>
			<div className="flex mt-[1.406rem] justify-evenly">
				<Image
					src="https://images.unsplash.com/photo-1503455637927-730bce8583c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
					alt=""
					width={100}
					height={100}
					className="rounded-full w-[100px] h-[100px]"
				/>
				<Image
					src="https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
					alt=""
					width={100}
					height={100}
					className="rounded-full w-[100px] h-[100px]"
				/>
				<Image
					src="https://images.unsplash.com/photo-1617298748161-f59f6096f130?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
					alt=""
					width={100}
					height={100}
					className="rounded-full w-[100px] h-[100px]"
				/>
			</div>
			<div className="flex flex-col justify-between px-6 items-start mt-[5.563rem]">
				<div className="flex justify-between pb-2 w-full">
					<h3 className="text-body uppercase text-20">Tape Settings</h3>
					<Triangle />
				</div>
				<div className="bg-body w-full h-1" />
			</div>
			<TapeSetting name="Tape Color" />
			<TapeSetting name="Wheel Color" />
			<TapeSetting name="Label" />
		</div>
	)
}

const Stickers = () => {
	return (
		<div className="flex flex-col pt-[45px] h-screen lg:h-auto">
			<div className="flex justify-evenly ">
				<div className="bg-body rounded-full w-[50px] h-[50px]" />
				<div className="bg-body rounded-full w-[50px] h-[50px]" />
				<div className="bg-body rounded-full w-[50px] h-[50px]" />
				<div className="bg-body rounded-full w-[50px] h-[50px]" />
				<div className="bg-body rounded-full w-[50px] h-[50px]" />
				<div className="bg-body rounded-full w-[50px] h-[50px]" />
			</div>

			<div className="grid grid-cols-2 auto-rows-auto mt-[3.375rem] justify-items-center px-[100px] lg:px-[26px] gap-5">
				<div className="bg-white rounded-full w-[179px] h-[56px]" />
				<div className="bg-white rounded-full w-[179px] h-[56px]" />
				<div className="bg-white rounded-full w-[179px] h-[56px]" />
				<div className="bg-white rounded-full w-[179px] h-[56px]" />
				<div className="bg-white rounded-full w-[179px] h-[56px]" />
				<div className="bg-white rounded-full w-[179px] h-[56px]" />
				<div className="bg-white rounded-full w-[179px] h-[56px]" />
				<div className="bg-white rounded-full w-[179px] h-[56px]" />
			</div>
		</div>
	)
}

export default SidebarNav
