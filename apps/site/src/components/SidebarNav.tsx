import React, { RefObject } from "react"
import * as Tabs from "@radix-ui/react-tabs"
import SearchBar from "./SearchBar"
import Triangle from "./Icons/Triangle"
import TapeSetting from "./TapeSetting"

interface scroll {
	button: RefObject<HTMLButtonElement>
}

const SidebarNav = ({}) => {
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
			className="flex flex-col items-center overflow-x-auto max-w-full"
		>
			<Tabs.List className="space-x-5 h-[50px] flex overflow-x-auto max-w-full pl-[142px] pr-[100px] scrollbar-hide items-center">
				<Tabs.Trigger
					className="data-[state=active]:bg-yellow-search data-[state=active]:py-[8px] data-[state=active]:px-[40px] data-[state=active]:rounded-full data-[state=active]:font-semibold 
					data-[state=active]:w-[179px] data-[state=active]:h-[40px] data-[state=inactive]:text-body data-[state=inactive]:font-bold flex-shrink-0 uppercase text-[20px]"
					value="playlist"
					ref={rPlaylistBtn}
					onClick={() => scrollBar({ button: rPlaylistBtn })}
				>
					Playlist
				</Tabs.Trigger>
				<Tabs.Trigger
					className="data-[state=active]:bg-yellow-search data-[state=active]:py-[8px] data-[state=active]:px-[40px] data-[state=active]:rounded-full data-[state=active]:font-semibold 
					data-[state=active]:w-[179px] data-[state=active]:h-[40px] data-[state=inactive]:text-body data-[state=inactive]:font-bold flex-shrink-0 uppercase text-[20px]"
					value="customize"
					ref={rCustomizeBtn}
					onClick={() => scrollBar({ button: rCustomizeBtn })}
				>
					Customize
				</Tabs.Trigger>
				<Tabs.Trigger
					className="data-[state=active]:bg-yellow-search data-[state=active]:py-[8px] data-[state=active]:px-[40px] data-[state=active]:rounded-full data-[state=active]:font-semibold 
					data-[state=active]:w-[179px] data-[state=active]:h-[40px] data-[state=inactive]:text-body data-[state=inactive]:font-bold flex-shrink-0 uppercase text-[20px]"
					value="stickers"
					ref={rStickersBtn}
					onClick={() => scrollBar({ button: rStickersBtn })}
				>
					Stickers
				</Tabs.Trigger>
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
		<div className="flex flex-col">
			<SearchBar />
			<p className="text-body font-medium text-xl pt-[33px] self-start pl-[10px]">
				Add some songs to your playlist.
			</p>
		</div>
	)
}

const Customize = () => {
	return (
		<div className="flex flex-col pt-[64px]">
			<div className="flex flex-col justify-between px-6 items-start">
				<div className="flex justify-between pb-2 w-full">
					<h3 className="text-body uppercase text-[20px]">Background</h3>
					<Triangle />
				</div>
				<div className="bg-body w-full h-1" />
			</div>
			<div className="flex mt-[1.406rem] justify-evenly">
				<div className="bg-body rounded-full w-[100px] h-[100px]" />
				<div className="bg-body rounded-full w-[100px] h-[100px]" />
				<div className="bg-body rounded-full w-[100px] h-[100px]" />
			</div>
			<div className="flex flex-col justify-between px-6 items-start mt-[5.563rem]">
				<div className="flex justify-between pb-2 w-full">
					<h3 className="text-body uppercase text-[20px]">Tape Settings</h3>
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
		<div className="flex flex-col pt-[45px]">
			<div className="flex justify-evenly ">
				<div className="bg-body rounded-full w-[50px] h-[50px]" />
				<div className="bg-body rounded-full w-[50px] h-[50px]" />
				<div className="bg-body rounded-full w-[50px] h-[50px]" />
				<div className="bg-body rounded-full w-[50px] h-[50px]" />
				<div className="bg-body rounded-full w-[50px] h-[50px]" />
				<div className="bg-body rounded-full w-[50px] h-[50px]" />
			</div>

			<div className="grid grid-cols-2 auto-rows-auto mt-[3.375rem] px-[26px] gap-6">
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
