import { create } from "zustand"
import { persist } from "zustand/middleware"

const authStore = (set: any) => ({
	backgroundImage: null,
	tapeColor: null,

	setBackground: (background: string) => set({ backgroundImage: background }),
	setTapeColor: (color: string) => set({ tapeColor: color }),
})

const useAuthStore = create(
	persist(authStore, {
		name: "auth",
	}),
)

export default useAuthStore
