import React, { useState } from "react"
import MobileHeader from "./Icons/MobileHeader"
import * as Dialog from "@radix-ui/react-dialog"
import PlayIcon from "./Icons/PlayIcon"

export const Greeting = () => {
	const [openInstructions, setOpenInstructions] = useState(false)

	return (
		<>
			{openInstructions ? (
				<Dialog.Root open={openInstructions}>
					<Dialog.Overlay className="fixed inset-0 bg-black opacity-75" />
					<Dialog.Content className="fixed inset-4 lg:inset-y-28 focus:outline-none flex items-center justify-center">
						<div className="flex flex-col max-w-[650px] p-4 bg-black">
							<div className="pt-10 pb-4 px-6 lg:px-[99px] lg:pt-[97px] lg:pb-[40px] text-center flex items-center flex-col bg-body">
								<p className="font-bold text-xl md:text-30 leading-tight capsize uppercase">
									Step 1
								</p>
								<p className="font-semibold text-lg md:text-22 leading-tight pt-[15px]">
									Build your playlist.
								</p>
								<p className="font-medium text-lg md:text-22 leading-tight pt-[10px]">
									Let the music express what's in your heart.
								</p>
								<p className="font-bold text-xl md:text-30 uppercase leading-tight pt-[43px]">
									Step 2
								</p>
								<p className="font-semibold text-lg md:text-22 leading-tight pt-[15px]">
									Customize Your Tape
								</p>
								<p className="font-medium text-lg md:text-22 leading-tight pt-[10px]">
									Presentation matters!
								</p>
								<p className="font-bold text-xl md:text-30 uppercase leading-tight pt-[43px]">
									Step 3
								</p>
								<p className="font-semibold text-lg md:text-22 leading-tight pt-[10px]">
									Share it!
								</p>
								<p className="font-medium text-lg md:text-22 leading-tight pt-[10px] pb-[72px]">
									You definitely have the best taste in music and people should
									experience it.
								</p>
								<Dialog.Close asChild>
									<button
										className="outline-none border-none focus:ring-0"
										onClick={() => setOpenInstructions(false)}
									>
										<PlayIcon className="w-full max-w-[90px]" />
									</button>
								</Dialog.Close>
							</div>
						</div>
					</Dialog.Content>
				</Dialog.Root>
			) : (
				<Dialog.Root defaultOpen>
					<Dialog.Overlay className="fixed inset-0 bg-black opacity-75" />
					<Dialog.Content className="fixed inset-4 lg:inset-y-28 focus:outline-none flex items-center justify-center">
						<div className="flex flex-col max-w-[650px] p-4 bg-black">
							<div className="flex items-center justify-center bg-header pb-[31px] pt-[17px] px-4">
								<MobileHeader className="w-full max-w-[369px]" />
							</div>
							<div className="bg-orange-main h-5" />
							<div className="bg-yellow-search h-5" />
							<div className="py-6 px-6 lg:px-[50px] lg:pt-[32px] lg:pb-[26px] text-center flex items-center flex-col bg-body">
								<p className="font-medium text-sm md:text-22 leading-tight capsize">
									At Wall-to-Wall Studios some of us like mixtapes, and some of
									us are too young to understand what this year's Occasional
									Cards are all about.
								</p>
								<p className="font-medium text-sm md:text-22 leading-tight pt-[30px]">
									(We told them a mixtape is how people made playlists before
									Spotify.)
								</p>
								<p className="font-medium text-sm md:text-22 leading-tight pt-[30px]">
									In the spirit of bringing generations together, we present
									this year's Occasional Greeting Generator.
								</p>
								<p className="font-medium text-sm md:text-22 leading-tight pt-[30px] pb-[24px]">
									It's a playlist. It's a mixtape. It's a good time.
								</p>
								<Dialog.Close asChild>
									<button
										className="outline-none border-none focus:ring-0"
										onClick={() => setOpenInstructions(true)}
									>
										<PlayIcon className="w-full max-w-[90px]" />
									</button>
								</Dialog.Close>
							</div>
						</div>
					</Dialog.Content>
				</Dialog.Root>
			)}
		</>
	)
}
