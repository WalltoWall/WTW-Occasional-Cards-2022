import { initTRPC, TRPCError } from "@trpc/server"
import { Context } from "./context"
// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
const t = initTRPC.context<Context>().create()

// Base router and procedure helpers
export const router = t.router
export const procedure = t.procedure

const hasId = t.middleware(({ next, ctx }) => {
	if (!ctx.userId)
		throw new TRPCError({ code: "FORBIDDEN", message: "No user Id found" })

	return next({ ctx: { userId: ctx.userId, req: ctx.req, res: ctx.res } })
})

export const idProcedure = t.procedure.use(hasId)
