import { TRPCError } from "@trpc/server"
import { db } from "src/firebase/firebase"
import SpotifyWebApi from "spotify-web-api-node"
import { getAccessToken } from "src/spotify/token"
import { z } from "zod"
import { idProcedure, procedure, router } from "../trpc"
import { addTrack } from "src/firebase/user"

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
					id: track.id,
					artist: track.artists[0].name,
					title: track.name,
					uri: track.uri,
					preview: track.preview_url,
					albumUrl: smallestImage.url,
				}
			})

			return tracks ?? []
		}),

	addToPlaylist: idProcedure
		.input(z.object({ trackId: z.string() }))
		.mutation(async ({ input, ctx }) => {
			console.log(ctx.userId)

			return await addTrack(ctx.userId, input.trackId)
		}),
	removeFromPlaylist: idProcedure
		.input(z.object({ trackId: z.string() }))
		.mutation(async ({ input }) => {
			// TODO: Send ids to firebase
		}),
	fetchPlaylist: idProcedure
		.input(z.object({ trackId: z.string() }))
		.query(async ({ input }) => {
			// TODO: Send ids to firebase
		}),
})

export const appRouter = router({
	spotify: spotify,
})

// export type definition of API
export type AppRouter = typeof appRouter
