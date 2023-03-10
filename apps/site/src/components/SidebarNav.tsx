import React, { RefObject, useState } from "react"
import * as Tabs from "@radix-ui/react-tabs"
import SearchBar from "./SearchBar"
import Triangle from "./Icons/Triangle"
import TapeSetting from "./TapeSetting"
import clsx from "clsx"
import { Background } from "./Background"
import { Sticker } from "./Sticker"
import longSticker1 from "../../public/stickers/Gradient_anniversary.png"
import longSticker2 from "../../public/stickers/Gradient_congrats.png"
import longSticker3 from "../../public/stickers/Gradient_deuces.png"
import longSticker4 from "../../public/stickers/Gradient_okrr.png"
import longSticker5 from "../../public/stickers/Gradient_retirement.png"
import longSticker6 from "../../public/stickers/Gradient_thanks.png"
import longSticker7 from "../../public/stickers/Rainbow_congrats.png"
import longSticker8 from "../../public/stickers/Gradient_hearts.png"

import circleSticker1 from "../../public/stickers/Pastel_partyhat.png"
import circleSticker2 from "../../public/stickers/Rainbow_congrats.png"
import circleSticker3 from "../../public/stickers/Rainbow_question.png"
import circleSticker4 from "../../public/stickers/Rainbow_vol1.png"
import circleSticker5 from "../../public/stickers/Retro_arrow.png"
import circleSticker6 from "../../public/stickers/Retro_cake.png"
import { SongResult } from "./SongResult"
import { useDebounce } from "src/hooks/useDebounce"
import { trpc } from "../utils/trpc"
import useAuthStore from "store/authStore"

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
					"font-bold text-body text-20 tracking-widest uppercase rounded-full px-10 py-2 flex-shrink-0 mb-4",
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

const SidebarNav = ({ className, ...props }: Tabs.TabsProps) => {
	const rPlaylistBtn = React.useRef<HTMLButtonElement>(null)
	const rCustomizeBtn = React.useRef<HTMLButtonElement>(null)
	const rStickersBtn = React.useRef<HTMLButtonElement>(null)

	const scrollBar = ({ button }: scroll) => {
		if (button == null) return
		button.current?.scrollIntoView({
			inline: "center",
			behavior: "smooth",
			block: "center",
		})
	}

	return (
		<Tabs.Root
			id="sidebar"
			defaultValue="playlist"
			className={clsx(
				"bg-black py-7 px-8 text-white overflow-hidden",
				className,
			)}
			{...props}
		>
			<Tabs.List className="flex overflow-x-auto scrollbar-hide overflow-y-hidden px-8 overscroll-contain -mx-8 pl-24">
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

			<Tabs.Content
				value="playlist"
				className="h-full overflow-y-auto scrollbar-hide"
			>
				<Playlist />
			</Tabs.Content>

			<Tabs.Content
				value="customize"
				className="h-full overflow-y-auto scrollbar-hide pb-16 -mx-8"
			>
				<Customize />
			</Tabs.Content>

			<Tabs.Content
				value="stickers"
				className="h-full overflow-y-auto scrollbar-hide pb-16"
			>
				<Stickers />
			</Tabs.Content>
		</Tabs.Root>
	)
}

const Playlist = () => {
	const [search, setSearch] = useState("")
	const debouncedSearch = useDebounce(search, 100)
	const searchedTracks = trpc.spotify.searchTracks.useQuery(
		{ query: debouncedSearch },
		{ enabled: debouncedSearch !== "" },
	)
	const playlist = trpc.spotify.fetchPlaylist.useQuery()

	return (
		<div className="flex flex-col max-h-[727px] pb-[20px]">
			<SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
			{search ? (
				<div className="flex-grow my-4">
					{searchedTracks.data?.map((track) => {
						if (!track.preview) return

						return (
							<SongResult
								key={track.uri}
								id={track.id}
								title={track.title}
								image={track.albumUrl}
								artist={track.artist}
								trackUrl={track.preview}
							/>
						)
					})}
				</div>
			) : playlist.data?.length === 0 ? (
				<p className="text-body font-medium text-20 pt-[33px] self-start pl-[10px]">
					Add some songs to your playlist.
				</p>
			) : (
				<div className="flex-grow my-4">
					{playlist.data?.map((track) => {
						if (!track.preview) return

						return (
							<SongResult
								key={track.uri}
								id={track.id}
								title={track.title}
								image={track.albumUrl}
								artist={track.artist}
								trackUrl={track.preview}
							/>
						)
					})}
				</div>
			)}
		</div>
	)
}

const Customize = () => {
	return (
		<div className="flex flex-col pt-[48px] ">
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
				<Background
					alt=""
					src="https://images.unsplash.com/photo-1503455637927-730bce8583c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
				/>

				<Background
					alt=""
					src="https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
				/>

				<Background
					alt=""
					src="https://images.unsplash.com/photo-1617298748161-f59f6096f130?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
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
	const circleStickers = [
		circleSticker1,
		circleSticker2,
		circleSticker3,
		circleSticker4,
		circleSticker5,
		circleSticker6,
	]

	const longStickers = [
		longSticker1,
		longSticker2,
		longSticker3,
		longSticker4,
		longSticker5,
		longSticker6,
		longSticker7,
		longSticker8,
	]

	return (
		<div className="flex flex-col pt-[45px]">
			<div className="flex justify-evenly">
				{circleStickers.map((sticker, index) => (
					<Sticker
						key={index}
						src={sticker}
						alt=""
						className="rounded-full w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
					/>
				))}
			</div>

			<div className="grid grid-cols-2 auto-rows-auto mt-[3.375rem] justify-items-center gap-5">
				{longStickers.map((sticker, index) => (
					<Sticker
						key={index}
						src={sticker}
						alt=""
						className="rounded-full w-[130px] h-[40px] md:w-[179px] md:h-[56px]"
					/>
				))}
			</div>
		</div>
	)
}

export default SidebarNav
