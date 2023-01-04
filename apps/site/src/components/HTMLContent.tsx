import React from "react"

interface Props extends React.ComponentPropsWithoutRef<"div"> {
	html: string
}

export const HTMLContent = React.forwardRef<HTMLDivElement, Props>(
	({ html, ...props }) => {
		return <div dangerouslySetInnerHTML={{ __html: html }} {...props} />
	}
)

HTMLContent.displayName = "HTMLContent"
