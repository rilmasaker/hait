import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  increment,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { admins } from "@/utils/helpers";
import { db } from "../client";

export const addMeme = async (meme) => {
  let likes = 0;
  const timestamp = serverTimestamp();
  const authorId = meme.authorId;
  if (admins.includes(authorId)) {
    likes = Math.floor(Math.random() * 50);
  }
  const stampedMeme = {
    ...meme,
    timestamp,
    likes,
    dislikes: 0,
  };

  const memeToAdd =
    likes === 0 ? stampedMeme : { ...stampedMeme, isAprooved: true };
  await addDoc(collection(db, "memes"), memeToAdd);
};

export const addComment = async (comment) => {
  const timestamp = serverTimestamp();
  const stampedMeme = { ...comment, timestamp };
  await addDoc(collection(db, "comments"), stampedMeme);
};

export const saveMeme = async (memeId, id) => {
  const userRef = doc(collection(db, "users"), id);

  await updateDoc(userRef, { saved: arrayUnion(memeId) });
};

export const removeSavedMeme = async (memeId, userId) => {
  const userRef = doc(collection(db, "users"), userId);

  await updateDoc(userRef, { saved: arrayRemove(memeId) });
};

export const likeMeme = async (memeId) => {
  const memeRef = doc(collection(db, "memes"), memeId);

  await updateDoc(memeRef, {
    likes: increment(1),
  });
};

export const dislikeMeme = async (memeId) => {
  const memeRef = doc(collection(db, "memes"), memeId);

  await updateDoc(memeRef, {
    dislikes: increment(1),
  });
};

export const aprooveMeme = async (memeId) => {
  const memeRef = doc(collection(db, "memes"), memeId);

  await updateDoc(memeRef, { isAprooved: true });
};

export const declineMeme = async (memeId) => {
  const memeRef = doc(collection(db, "memes"), memeId);

  await updateDoc(memeRef, { isAprooved: false });
};
