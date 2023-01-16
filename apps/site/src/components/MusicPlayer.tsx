import React, { useEffect, useState } from "react"
import useAuthStore from "store/authStore"

interface MusicPlayerProps {
	accessToken: string
	trackUri: string
}

export const MusicPlayer = ({ accessToken }: MusicPlayerProps) => {
	const [play, setPlay] = useState(false)
	const { currentSong } = useAuthStore

	useEffect(() => setPlay(true), [currentSong])
	if (!accessToken) return

	return <div>playing</div>
}
