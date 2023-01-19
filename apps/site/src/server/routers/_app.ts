import { TRPCError } from "@trpc/server"
import { db } from "src/firebase/firebase"
import SpotifyWebApi from "spotify-web-api-node"
import { getAccessToken } from "src/spotify/token"
import { z } from "zod"
import { idProcedure, procedure, router } from "../trpc"
import { addTrack, getUser } from "src/firebase/user"
import { createClient } from "src/spotify/client"
import { getTracksFromIds } from "src/spotify/tracks"

const spotify = router({
	searchTracks: procedure
		.input(z.object({ query: z.string() }))
		.query(async ({ input }) => {
			const spotifyApi = await createClient()

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
			return await addTrack(ctx.userId, input.trackId)
		}),
	removeFromPlaylist: idProcedure
		.input(z.object({ trackId: z.string() }))
		.mutation(async ({ input }) => {
			// TODO: Send ids to firebase
		}),
	fetchPlaylist: idProcedure.query(async ({ input, ctx }) => {
		const user = await getUser(ctx.userId)
		if (!user) return []

		const tracks = await getTracksFromIds(user.trackIds)

		return tracks
	}),
})

export const appRouter = router({
	spotify: spotify,
})

// export type definition of API
export type AppRouter = typeof appRouter
