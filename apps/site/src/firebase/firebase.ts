import { initializeApp, cert, type App } from "firebase-admin/app"
import { getFirestore } from "firebase-admin/firestore"

let app: App

declare global {
	// eslint-disable-next-line no-var
	var __app: App | undefined
}

function createApp() {
	return initializeApp({
		credential: cert({
			projectId: process.env.PROJECT_ID,
			clientEmail: process.env.CLIENT_EMAIL,
			privateKey: process.env.PRIVATE_KEY,
		}),
	})
}

// This is needed because in development we don't want to restart the server
// with every change, but we want to make sure we don't create a new connection
// to Firebase on hot reload either.
if (!global.__app) {
	global.__app = createApp()
}

// eslint-disable-next-line prefer-const
app = global.__app

export const db = getFirestore(app)
export { app }
