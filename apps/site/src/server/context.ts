import * as trpcNext from "@trpc/server/adapters/next"
import { getCookie } from "cookies-next"
import { z } from "zod"

const id = z.union([z.string(), z.null()]).default(null)

export async function createContext({
	req,
	res,
}: trpcNext.CreateNextContextOptions) {
	const userId = id.parse(getCookie("userId", { req, res, httpOnly: true }))

	return {
		req,
		res,
		userId,
	}
}

export type Context = Awaited<ReturnType<typeof createContext>>
