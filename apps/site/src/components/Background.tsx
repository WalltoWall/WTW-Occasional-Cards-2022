import Image from "next/image"
import React, { useState } from "react"
import useAuthStore from "store/authStore"

interface bgProps {
	src: string
	alt: string
}

export const Background = ({ src, alt }: bgProps) => {
	const { setBackground, backgroundImage } = useAuthStore()
	const [bgImage, setBgImage] = useState("")

	return (
		<button
			onClick={() => {
				setBgImage(src)
				setBackground(bgImage)
			}}
			// className={
			// 	backgroundImage === bgImage
			// 		? "border-4 border-white rounded-full"
			// 		: "border-none"
			// }
		>
			<Image
				src={src}
				alt={alt}
				width={100}
				height={100}
				className="rounded-full w-[80px] h-[80px] md:w-[100px] md:h-[100px]"
			/>
		</button>
	)
}
