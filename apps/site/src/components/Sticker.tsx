import Image, { ImageProps } from "next/image"
import React from "react"

export const Sticker = ({ src, alt, className }: ImageProps) => {
	return (
		<button>
			<Image src={src} alt={alt} className={className} />
		</button>
	)
}
