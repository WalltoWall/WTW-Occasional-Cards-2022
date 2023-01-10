import * as THREE from "three"
import React, { useRef, useState } from "react"
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber"

function Box(props: ThreeElements["mesh"]) {
	const mesh = useRef<THREE.Mesh>(null!)
	const [hovered, setHover] = useState(false)
	const [active, setActive] = useState(false)

	useFrame((state, delta) => (mesh.current.rotation.y += 0.02))

	return (
		<mesh
			{...props}
			ref={mesh}
			scale={active ? 1 : 1.5}
			onClick={(event) => setActive(!active)}
			onPointerOver={(event) => setHover(true)}
			onPointerOut={(event) => setHover(false)}
		>
			<boxGeometry args={[3.5, 2, 0.3]} />
			<meshStandardMaterial color={hovered ? "hotpink" : "lightGray"} />
		</mesh>
	)
}

function isDesktop() {
	return window.matchMedia("(min-width: 1024px)").matches
}

export default function Mixtape() {
	const rCanvas = React.useRef<HTMLCanvasElement>(null)

	React.useEffect(() => {
		const handleDesktopResize = () => {
			const canvas = rCanvas.current
			const header = document.querySelector<HTMLElement>("#header")
			const sidebar = document.querySelector<HTMLElement>("#sidebar")

			if (!canvas || !header || !sidebar) return

			const newHeight = window.innerHeight - header.clientHeight

			const newWidth = window.innerWidth - sidebar.clientWidth

			canvas.height = newHeight
			canvas.width = newWidth
			canvas.style.height = newHeight + "px"
			canvas.style.width = newWidth + "px"
		}

		const handleMobileResize = () => {
			const canvas = rCanvas.current
			const header = document.querySelector<HTMLElement>("#header")
			const sidebar = document.querySelector<HTMLElement>("#sidebar")

			if (!canvas || !header || !sidebar) return

			const newHeight =
				window.innerHeight - header.clientHeight - sidebar.clientHeight

			canvas.height = newHeight
			canvas.style.height = newHeight + "px"
		}

		const handleResize = () => {
			isDesktop() ? handleDesktopResize() : handleMobileResize()
		}

		window.addEventListener("resize", handleResize)

		return () => window.removeEventListener("resize", handleResize)
	}, [])

	return (
		<Canvas
			camera={{ position: [0, 0, 30], fov: 55, zoom: 5 }}
			ref={rCanvas}
			className="pb-[30px]"
		>
			<ambientLight />
			<Box />
		</Canvas>
	)
}
