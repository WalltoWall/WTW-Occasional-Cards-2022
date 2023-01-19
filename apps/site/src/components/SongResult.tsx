import Image from "next/image"
import React, { useState } from "react"
import { trpc } from "src/utils/trpc"
import useAuthStore from "store/authStore"

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
	const trpcUtils = trpc.useContext()
	const playlist = trpc.spotify.fetchPlaylist.useQuery()

	const [audio] = useState<HTMLAudioElement>(new Audio(trackUrl))

	const addPlaylist = trpc.spotify.addToPlaylist.useMutation({
		onSuccess: () => {
			trpcUtils.spotify.fetchPlaylist.invalidate()
		},
	})

	const removeFromPlaylist = trpc.spotify.removeFromPlaylist.useMutation({
		onSuccess: () => {
			trpcUtils.spotify.fetchPlaylist.invalidate()
		},
	})

	function handlePlaySong() {
		console.log("Playing: ", title)

		if (isPlaying) {
			audio.pause()
			setIsPlaying(false)
		} else {
			audio.play()
			setIsPlaying(true)
		}
	}

	function addSong(id: string) {
		console.log("adding song")
		addPlaylist.mutate({ trackId: id })
	}

	function removeSongs(id: string) {
		console.log("removing song")
		removeFromPlaylist.mutate({ trackId: id })
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
			<div className="ml-3 mr-auto">
				<p>{title}</p>
				<p className="text-gray-300">{artist}</p>
			</div>

			{playlist.data?.find((e) => e.id === id) ? (
				<p
					onClick={() => {
						removeSongs(id)
					}}
				>
					Remove
				</p>
			) : (
				<button
					onClick={() => {
						addSong(id)
					}}
				>
					Add
				</button>
			)}
		</div>
	)
}
