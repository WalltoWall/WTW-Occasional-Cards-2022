import { createClient } from "./client"

export async function getTracksFromIds(trackIds: string[]) {
	const spotify = await createClient()

	const response = await spotify.getTracks(trackIds, { market: "US" })
	const tracks = response.body.tracks.map((track) => {
		const smallestImage = track.album.images.reduce((smallest, image) => {
			if (!image.height || !smallest.height) throw new Error("todo")
			if (image.height < smallest.height) return image

			return smallest
		}, track.album.images[0])

		return {
			id: track.id,
			artist: track.artists[0].name,
			title: track.name,
			uri: track.uri,
			preview: track.preview_url,
			albumUrl: smallestImage.url,
		}
	})

	return tracks
}
