import { initializeApp, cert, type App } from "firebase-admin/app"
import { getFirestore } from "firebase-admin/firestore"

let app: App

declare global {
	// eslint-disable-next-line no-var
	var __app: App | undefined
}

const config = {
	type: "service_account",
	project_id: "wtw-occasional-cards",
	private_key_id: "ca7101e6b4b6d8cadeaab05ac3004b597aea2338",
	private_key:
		"-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDEtNIao+HDxo0p\nKRYQaFo4v5gsD1HE58EgwCZApAeo2bBXj7uD7+yMvYudMU6nMRQOS6RlkBDT5x6o\n88tcOKQmUeNceOckT9BVF/90WoKPOTF5ZF9YvVy3Ey22oOL3x7ONGmZ6FfaNlfEC\n5+XtXNW+hLQ9cyQC51FJXfqfHFASoU2WZmQV31VfNmaxqLaHMFSy8HNZRNMdyfw/\ndAlJRwXXN7rVcD/hWAgiKCNDBuaJ5wEhmaAyfvOJ5O7iJnW2QeXswpU+HyAn+yCV\nju/b2NK/VGlXrX9BRAan50Tijzk8vX9hq9s8cvRJs9vpylpK9RNDRlHQhII93fMH\nyl2zIFs1AgMBAAECggEAH25lRCx7nrTTSYhvJiAGiprSzfeEsVn22izZ7+pF7w0Z\nyGQHKoXj3nlLHcsLLlwBQGeF1VS326RKmeSa0hma4SSkl9oZ1QuL1o0HHKh5xDj3\nVtZbBer8LaS64TvECKO4ZQua5FcuFmGnKTe03cC/xrmds1P6pRwhOP/zVAlKIi+s\nREicAxQxT+5uLzjHeqPpFrtshPFyiVgqSQZXqyr4V/yD5gN5RN4h5DOCF99VRUH9\nz2wm5eMYhmeimuAWuPHKJStqBMnnCyZ/pQNOXtqFc9HjZxF6l5qocy2kEWSL2N8b\n+Ig5jsMfYkJv+A1Pu14qeRsPchEuCyLImAVKyVDd4QKBgQDuqnk4vHtvCnzvVUEl\nCNR6snIcC0dzv3nUq0OwY9JE3HSYwiM2uVAcYCPn+gDxmlLo00x2arccoJ5ThPDu\n/zGm2Cy3EG15CEjdca+j1AV0ihxlE3yGTbunNRL3Xlb9E0F0L8sd7cqy75HXsROZ\nkg1Y+wYOg7L3NYuHjg0xdUZJ6wKBgQDS/jDUOxJvhQlN9StdY3ujX6AYUombuyR0\nNn7y98ZqdziTP4PQCrXP7hVJrLqJdMd0YmWmgO+UL3swt7EWPNH62it/hKBZW/3h\nEvsuQFLGGHx8IHp3QzJSM+cYinZ+U9nMbQhjkNc8uPB7p0bkfq1OJnpVXNcELgvs\ne4z+gzCHXwKBgHB5TDltsenpkmkjz1iJqcDM+bO3qQumT97mezbURBKJpjUbQIcY\nm+VTdXhsPCef57SrZ1xi/Dp0g0iu3PB0uUx8kc4P4tdoDRa27eQSFiQOtkT4AvY0\nCdxJyc9j2TDY8z6zC1DmcGEVP7DbVXZI+xtU6UzLyfpwdHoEerk1IFPTAoGBAIVS\n4f/5o9icNBjyxwgoCMRfdIZqAVJKmupkVSuqrdIwq6tAA0a+vcw6IXGAmA6roC1G\nz/y6lKkKp8lNCbWHkRf2LG5TnA9bNb23hMjhFGzgpCi7TSd3aqDO80Rqmh2RVpr6\nesaPi7JvGmbIeN+BvHkZj0vJcoTNo/M2zw00UMH5AoGAMlTk5eKrrmaeK2LfqBmJ\nOuhK6qYSV5MDRdP5i23M0lok9lwtHokX3jjtuog/EdGP0BMGonVfutbTS3BFOFlr\nlRjNHgTuS/xNoj/HeNkro1Nok1EJ5ody3b+LNRalBu161c8/bE6PVSIBHt070t+6\nuIQ4ilxw64+akIR9j8uGK2o=\n-----END PRIVATE KEY-----\n",
	client_email:
		"firebase-adminsdk-bfp9c@wtw-occasional-cards.iam.gserviceaccount.com",
	client_id: "117967613415443739922",
	auth_uri: "https://accounts.google.com/o/oauth2/auth",
	token_uri: "https://oauth2.googleapis.com/token",
	auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
	client_x509_cert_url:
		"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-bfp9c%40wtw-occasional-cards.iam.gserviceaccount.com",
}

function createApp() {
	return initializeApp({
		credential: cert({
			projectId: config.project_id,
			clientEmail: config.client_email,
			privateKey: config.private_key,
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
