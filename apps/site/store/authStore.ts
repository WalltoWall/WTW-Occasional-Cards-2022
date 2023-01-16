import { create } from "zustand"
import { persist } from "zustand/middleware"

const authStore = (set: any) => ({
	backgroundImage: null,
	tapeColor: null,
	currentSong: null,
	accessToken: "",

	setBackground: (background: string) => set({ backgroundImage: background }),
	setTapeColor: (color: string) => set({ tapeColor: color }),
	setAcessToken: (accessToken: string) => set({ accessToken: accessToken }),
	setCurrentSong: (currentSong: string) => set({ currentSong: currentSong }),
})

const useAuthStore = create(
	persist(authStore, {
		name: "auth",
	}),
)

export default useAuthStore
