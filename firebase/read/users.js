import { collection, doc, getDoc } from "firebase/firestore";

import { db } from "../client";

export const getSavedIds = async (userId) => {
  if (!userId) {
    return [];
  }
  const userRef = doc(collection(db, "users"), userId);
  const userDoc = await getDoc(userRef);

  if (!userDoc.exists) {
    return null;
  }
  const memeDoc = await userDoc.data();
  if (!memeDoc?.saved?.length) {
    return [];
  }
  return memeDoc?.saved;
};
