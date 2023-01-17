import { z } from "zod"

const CLIENT_ID = "0cea7c7c65a845e0b7fb1133c294d756"
const CLIENT_SECRET = "f3f2caac467b4e27b3deaa3c95b2e9a3"
const ENDPOINT = "https://accounts.spotify.com/api/token"

const tokenResponse = z.object({
	access_token: z.string(),
	token_type: z.literal("Bearer"),
	expires_in: z.number(),
})

export async function getAccessToken() {
	const url = new URL(ENDPOINT)
	url.searchParams.set("grant_type", "client_credentials")

	const result = await fetch(url, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/x-www-form-urlencoded",
			Authorization:
				"Basic " +
				Buffer.from(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64"),
		},
	})

	if (!result.ok) return

	const data = await result.json()
	const res = tokenResponse.safeParse(data)
	if (!res.success) return

	return res.data
}
