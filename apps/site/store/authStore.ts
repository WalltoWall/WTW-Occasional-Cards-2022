import { create } from "zustand"
import { persist } from "zustand/middleware"

const authStore = (set: any) => ({
	backgroundImage: null,

	setBackground: (background: string) => set({ backgroundImage: background }),
})

const useAuthStore = create(
	persist(authStore, {
		name: "auth",
	}),
)

export default useAuthStore
