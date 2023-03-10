import { z } from "zod"
import { db } from "src/firebase/firebase"
import { FieldValue } from "firebase-admin/firestore"

const User = z.object({
	id: z.string(),
	trackIds: z.array(z.string()),
})

export type User = z.infer<typeof User>

const collection = db.collection("users").withConverter({
	toFirestore: (user: User) => user,
	fromFirestore: (snap: FirebaseFirestore.QueryDocumentSnapshot) => {
		const data = snap.data()

		const result = User.safeParse(data)
		if (!result.success) return

		return result.data
	},
})

export async function addTrack(id: string, trackId: string) {
	const userRef = collection.doc(id)
	const newTrack = await userRef.set(
		{
			id,
			trackIds: FieldValue.arrayUnion(trackId),
		},
		{ merge: true },
	)

	return true
}

export async function getUser(id: string) {
	const userRef = collection.doc(id)
	const userDoc = await userRef.get()
	const data = userDoc.data()

	return data
}

export async function removeTrack(id: string, trackId: string) {
	const userRef = collection.doc(id)
	const removedTrack = await userRef.update({
		trackIds: FieldValue.arrayRemove(trackId),
	})

	return true
}
