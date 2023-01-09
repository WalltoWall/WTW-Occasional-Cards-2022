import React from "react"
import MobileHeader from "./Icons/MobileHeader"
import * as Dialog from "@radix-ui/react-dialog"
import PlayIcon from "./Icons/PlayIcon"

const Greeting = () => {
	return (
		<Dialog.Root defaultOpen>
			<Dialog.Overlay className="fixed inset-0 bg-black opacity-75" />
			<Dialog.Content className="bg-black w-[650px] h-[800px] fixed top-[10%] left-2 md:left-8 lg:top-[10%] lg:left-[33%] focus:outline-none">
				<div className="absolute top-6 left-6 w-[600px] h-[750px] bg-body flex flex-col">
					<div className="flex items-center justify-center bg-header pb-[31px] pt-[17px]">
						<MobileHeader />
					</div>
					<div className="bg-orange-main w-full h-[22px]" />
					<div className="bg-yellow-search w-full h-[22px]" />
					<div className="px-[50px] pt-[32px] pb-[26px] text-center flex items-center flex-col">
						<p className="font-medium text-22 leading-tight capsize">
							At Wall-to-Wall Studios some of us like mixtapes, and some of us
							are too young to understand what this year's Occasional Cards are
							all about.
						</p>
						<p className="font-medium text-22 leading-tight pt-[30px]">
							(We told them a mixtape is how people made playlists before
							Spotify.)
						</p>
						<p className="font-medium text-22 leading-tight pt-[30px]">
							In the spirit of bringing generations together, we present this
							year's Occasional Greeting Generator.
						</p>
						<p className="font-medium text-22 leading-tight pt-[30px] pb-[24px]">
							It's a playlist. It's a mixtape. It's a good time.
						</p>
						<Dialog.Close asChild>
							<button className="outline-none border-none focus:ring-0">
								<PlayIcon />
							</button>
						</Dialog.Close>
					</div>
				</div>
			</Dialog.Content>
		</Dialog.Root>
	)
}

export default Greeting
