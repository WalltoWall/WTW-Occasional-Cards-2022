import { TRPCError } from "@trpc/server"
import SpotifyWebApi from "spotify-web-api-node"
import { getAccessToken } from "src/spotify/token"
import { z } from "zod"
import { procedure, router } from "../trpc"

const spotify = router({
	searchTracks: procedure
		.input(z.object({ query: z.string() }))
		.query(async ({ input }) => {
			const token = await getAccessToken()
			if (!token)
				throw new TRPCError({
					code: "INTERNAL_SERVER_ERROR",
					message: "Failed to get token",
				})
			const spotifyApi = new SpotifyWebApi()

			spotifyApi.setAccessToken(token.access_token)

			const response = await spotifyApi.searchTracks(input.query)

			const tracks = response.body.tracks?.items.map((track) => {
				const smallestImage = track.album.images.reduce((smallest, image) => {
					if (!image.height || !smallest.height) throw new Error("todo")
					if (image.height < smallest.height) return image

					return smallest
				}, track.album.images[0])

				return {
					artist: track.artists[0].name,
					title: track.name,
					uri: track.uri,
					preview: track.preview_url,
					albumUrl: smallestImage.url,
				}
			})

			return tracks ?? []
		}),

	addToPlaylist: procedure
		.input(z.object({ trackId: z.string(), userId: z.string() }))
		.mutation(async ({ input }) => {
			// TODO: Send ids to firebase
		}),
})

export const appRouter = router({
	spotify: spotify,
})

// export type definition of API
export type AppRouter = typeof appRouter
