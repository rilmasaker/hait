import {
  collection,
  doc,
  deleteDoc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { updateProfile, deleteUser as deleteAuthUser } from "firebase/auth";

import { db, auth } from "../client";

const Users = collection(db, "users");

export const updateUser = async (user) => {
  const userRef = doc(Users, user.id);
  const { id, ...restUser } = user;

  await updateDoc(userRef, { ...restUser });
  updateProfile(auth.currentUser, restUser)
    .then(() => {})
    .catch((error) => {});
};

export const createGoogleUser = async (newUser) => {
  const userSnapshot = await getDoc(doc(Users, newUser.uid));

  if (userSnapshot.exists()) {
    return;
  }

  const userToCreate = {
    roles: ["user"],
    displayName: newUser?.displayName || null,
    username: newUser?.displayName || null,
    email: newUser?.email || null,
    photoURL: newUser?.photoURL || null,
    createdAt: serverTimestamp(),
    phoneNumber: newUser?.phoneNumber || null,
  };

  try {
    await setDoc(doc(db, "users", newUser.uid), userToCreate);
  } catch (e) {
    throw new Error("[createGoogleUser] Failed to create user");
  }
};

export const createEmailUser = async (newUser) => {
  const userSnapshot = await getDoc(doc(Users, newUser.uid));

  if (userSnapshot.exists()) {
    return;
  }

  const userToCreate = {
    roles: ["user"],
    displayName: newUser?.displayName || null,
    username: newUser?.displayName || null,
    email: newUser?.email || null,
    photoURL: newUser?.photoURL || null,
    createdAt: serverTimestamp(),
    phoneNumber: newUser?.phoneNumber || null,
  };

  try {
    await setDoc(doc(db, "users", newUser.uid), userToCreate);
  } catch (e) {
    throw new Error("[createEialUser] Failed to create user");
  }
};

export const createFacebookUser = async (newUser) => {
  const userSnapshot = await getDoc(doc(Users, newUser.uid));

  if (userSnapshot.exists()) {
    return;
  }

  const userToCreate = {
    roles: ["user"],
    displayName: newUser?.displayName || null,
    username: newUser?.displayName || null,
    email: newUser?.email || null,
    photoURL: newUser?.photoURL || null,
    createdAt: serverTimestamp(),
    phoneNumber: newUser?.phoneNumber || null,
  };

  try {
    await setDoc(doc(db, "users", newUser.uid), userToCreate);
  } catch (e) {
    throw new Error("[createGoogleUser] Failed to create user");
  }
};

const getUser = async (id) => {
  const userSnapshot = await getDoc(doc(Users, id));

  if (userSnapshot.exists() && Users.converter) {
    return Users.converter.fromFirestore(userSnapshot);
  }
};
export const blockUser = async (reason, userId) => {
  const userRef = doc(Users, userId);

  await updateDoc(userRef, { blocked: { isBlocked: true, reason } });
};

export const deleteUser = async (userId) => {
  const userRef = doc(Users, userId);
  try {
    await deleteDoc(userRef);
  } catch (e) {
    console.log(e);
  }
  deleteAuthUser(auth.currentUser)
    .then(() => {})
    .catch((error) => {
      // An error ocurred
      // ...
    });
};
