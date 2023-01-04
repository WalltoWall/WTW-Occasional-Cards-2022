import * as React from "react"
import NextLink from "next/link"
import { isInternal, isAnchorOnly } from "@walltowall/helpers"

export type LinkProps = React.ComponentPropsWithoutRef<"a">

/**
 * A component that smartly renders NextJS's <Link /> component or a plain
 * anchor element based on the provided `href`.
 */
export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
	({ href, ...props }, ref) => {
		if (!href) return <a ref={ref} {...props} />

		if (isInternal(href)) {
			return <NextLink ref={ref} href={href} {...props} />
		}

		if (isAnchorOnly(href)) {
			return <a href={href} ref={ref} {...props} />
		}

		return (
			<a
				ref={ref}
				href={href}
				target="_blank"
				rel="noopener noreferrer nofollow"
				{...props}
			/>
		)
	},
)

Link.displayName = "Link"
