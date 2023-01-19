import { create } from "zustand"
import { persist } from "zustand/middleware"

// interface storeProps {
// 	backgroundImage: string
// 	tapeColor: string
// 	playlist: [{title: string, image: string, artist: string}]
// 	setBackground: (background: string) => void
// 	setTapeColor: (color: string) => void
// 	setPlaylist: (title: string, artist: string, image: string, playlist: string[]) => void
// }

const authStore = (set: any) => ({
	backgroundImage: null,
	tapeColor: null,
	playlist: [{ title: "", artist: "", image: "" }],

	setBackground: (background: string) => set({ backgroundImage: background }),
	setTapeColor: (color: string) => set({ tapeColor: color }),
	setPlaylist: (
		{ title, artist, image }: any,
		playlist: [{ title: string; artist: string; image: string }],
	) =>
		set({
			playlist: [playlist, { title: title, artist: artist, image: image }],
		}),
})

const useAuthStore = create(
	persist(authStore, {
		name: "auth",
	}),
)

export default useAuthStore
