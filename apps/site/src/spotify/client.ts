import { TRPCError } from "@trpc/server"
import SpotifyWebApi from "spotify-web-api-node"
import { getAccessToken } from "./token"

export async function createClient() {
	const token = await getAccessToken()
	if (!token)
		throw new TRPCError({
			code: "INTERNAL_SERVER_ERROR",
			message: "Failed to get token",
		})
	const spotifyApi = new SpotifyWebApi()
	spotifyApi.setAccessToken(token.access_token)

	return spotifyApi
}
