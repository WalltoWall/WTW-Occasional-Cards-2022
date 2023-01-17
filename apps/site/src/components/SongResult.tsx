import Image from "next/image"
import React, { useState } from "react"
import { trpc } from "src/utils/trpc"

interface SongProps {
	id: string
	title: string
	image: string
	artist: string
	trackUrl: string
}

export const SongResult = ({
	id,
	title,
	image,
	artist,
	trackUrl,
}: SongProps) => {
	const [isPlaying, setIsPlaying] = useState(false)
	const [audio] = useState<HTMLAudioElement>(new Audio(trackUrl))

	const addPlaylist = trpc.spotify.addToPlaylist.useMutation()

	function handlePlaySong() {
		console.log("Playing: ", title)
		addPlaylist.mutate({ trackId: id })

		if (isPlaying) {
			audio.pause()
			setIsPlaying(false)
		} else {
			audio.play()
			setIsPlaying(true)
		}
	}

	return (
		<div
			className="flex mx-2 my-4 items-center last:mb-20"
			onClick={() => handlePlaySong()}
		>
			<Image
				src={image}
				alt="song album cover"
				className="h-[64px] w-[64px]"
				width={64}
				height={64}
			/>
			<div className="ml-3">
				<p>{title}</p>
				<p className="text-gray-300">{artist}</p>
			</div>
		</div>
	)
}
