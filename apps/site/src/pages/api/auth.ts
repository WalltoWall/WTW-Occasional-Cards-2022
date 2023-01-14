import { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"
import qs from "qs"

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
	const clientId = "0cea7c7c65a845e0b7fb1133c294d756"
	const clientSecret = "f3f2caac467b4e27b3deaa3c95b2e9a3"

	const headers = {
		headers: {
			Accept: "application/json",
			"Content-Type": "application/x-www-form-urlencoded",
		},
		auth: {
			username: clientId,
			password: clientSecret,
		},
	}

	const data = {
		grant_type: "client_credentials",
	}

	try {
		const response = await axios.post(
			"https://accounts.spotify.com/api/token",
			qs.stringify(data),
			headers,
		)
		console.log("finished fetching")

		res.status(200).send(JSON.stringify(response.data.access_token))
	} catch (err) {
		console.log(err)
	}
}
