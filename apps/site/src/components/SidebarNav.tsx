import React, { useState } from "react"
import * as Tabs from "@radix-ui/react-tabs"
import SearchBar from "./SearchBar"

const SidebarNav = ({}) => {
	const [isActive, setIsActive] = useState("Playlist")

	const activeStyles =
		"py-[8px] px-[40px] rounded-full bg-yellow-search uppercase font-semibold flex-shrink-0 w-[179px] h-[40px]"

	const regularStyles =
		"text-body font-bold text-[20px] uppercase flex-shrink-0"

	return (
		<Tabs.Root
			defaultValue="playlist"
			className="flex flex-col items-center overflow-x-auto max-w-full"
		>
			<Tabs.List className="space-x-5 h-[50px] flex overflow-x-auto max-w-full pl-[142px] pr-10 scrollbar-hide items-center">
				<Tabs.Trigger className={activeStyles} value="playlist">
					Playlist
				</Tabs.Trigger>
				<Tabs.Trigger className={regularStyles} value="customize">
					Customize
				</Tabs.Trigger>
				<Tabs.Trigger className={regularStyles} value="stickers">
					Stickers
				</Tabs.Trigger>
			</Tabs.List>

			<Tabs.Content value="playlist">
				<Playlist />
			</Tabs.Content>

			<Tabs.Content value="customize">
				<Customize />
			</Tabs.Content>

			<Tabs.Content value="stickers">
				<Stickers />
			</Tabs.Content>
		</Tabs.Root>
	)
}

const Customize = () => {
	return (
		<div>
			<p className="text-white">Customize</p>
		</div>
	)
}

const Playlist = () => {
	return (
		<div className="flex flex-col">
			<SearchBar />
			<p className="text-body font-medium text-xl pt-[33px] self-start pl-[10px]">
				Add some songs to your playist.
			</p>
		</div>
	)
}

const Stickers = () => {
	return (
		<div>
			<p className="text-white">Stickers</p>
		</div>
	)
}

export default SidebarNav
