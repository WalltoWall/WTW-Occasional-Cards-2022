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

export default function Mixtape() {
	return (
		<Canvas camera={{ position: [0, 10, 50], zoom: 20 }}>
			<ambientLight />
			<Box />
		</Canvas>
	)
}
