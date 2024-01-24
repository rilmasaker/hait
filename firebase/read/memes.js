import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  where,
  documentId,
} from "firebase/firestore";

import { db } from "../client";

export const getAproovedMemes = async () => {
  const col = collection(db, "memes");
  const q = query(
    col,
    where("isAprooved", "==", true),
    orderBy("timestamp", "desc"),
    limit(30)
  );
  const querySnapshot = (await getDocs(q)) || {};

  const memeArray = await querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
      timestamp: `${doc.data().timestamp?.toDate()}`?.slice(3, 25),
    };
  });
  if (!memeArray) {
    return [];
  }
  return memeArray;
};

export const getTopMemes = async () => {
  const col = collection(db, "memes");
  const q = query(
    col,
    where("isAprooved", "==", true),
    orderBy("likes", "desc"),
    orderBy("timestamp", "desc"),
    limit(10)
  );
  const querySnapshot = (await getDocs(q)) || {};

  const memeArray = await querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
      timestamp: `${doc.data().timestamp?.toDate()}`?.slice(3, 25),
    };
  });
  if (!memeArray) {
    return [];
  }
  return memeArray;
};

export const getMemesToAproove = async () => {
  const col = collection(db, "memes");
  const q = query(
    col,
    where("isAprooved", "==", null),
    orderBy("timestamp", "desc"),
    limit(100)
  );
  const querySnapshot = (await getDocs(q)) || {};

  const memeArray = await querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
      timestamp: `${doc.data().timestamp?.toDate()}`?.slice(3, 25),
    };
  });
  if (!memeArray) {
    return [];
  }
  return memeArray;
};

export const getSavedMemes = async (userId) => {
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

  const col = collection(db, "memes");
  const q = query(col, where(documentId(), "in", memeDoc?.saved));

  const querySnapshot = (await getDocs(q)) || {};

  const memeArray = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
      timestamp: `${doc.data().timestamp?.toDate()}`?.slice(3, 25),
    };
  });

  return memeArray;
};

export const getOneMeme = async (id) => {
  const docRef = doc(db, "memes", id);
  const memeDoc = await getDoc(docRef);

  if (!memeDoc.exists) {
    return null;
  }
  const myDoc = await memeDoc.data();
  const userRef = doc(collection(db, "users"), myDoc.authorId);

  const userDoc = await getDoc(userRef);

  const user = await userDoc?.data();
  const meme = {
    userSrc: user?.image || null,
    username: user?.username || null,
    ...myDoc,
    id: memeDoc.id,
    timestamp: `${myDoc?.timestamp?.toDate()}`?.slice(3, 25),
  };

  return meme;
};

export const getCommentByMemeId = async (memeId) => {
  const col = collection(db, "comments");
  const q = query(
    col,
    where("memeId", "==", memeId),
    orderBy("timestamp", "desc")
  );
  const querySnapshot = (await getDocs(q)) || {};

  const commentsArray = querySnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
      timestamp: `${doc.data().timestamp?.toDate()}`?.slice(3, 25),
    };
  });

  return commentsArray;
};

export const getByMemeTag = async (tag) => {
  const col = collection(db, "memes");
  const q = query(
    col,
    where("tags", "array-contains", tag),
    orderBy("timestamp", "desc"),
    limit(30)
  );
  const querySnapshot = (await getDocs(q)) || {};

  const memesArray = querySnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
      timestamp: `${doc.data().timestamp?.toDate()}`?.slice(3, 25),
    };
  });

  return memesArray;
};

export const getByMemeCategory = async (category) => {
  const col = collection(db, "memes");
  const q = query(
    col,
    where("category", "==", category),
    orderBy("timestamp", "desc"),
    limit(30)
  );
  const querySnapshot = (await getDocs(q)) || {};

  const memesArray = querySnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
      timestamp: `${doc.data().timestamp?.toDate()}`?.slice(3, 25),
    };
  });

  return memesArray;
};

export const getAproovedMemesQuery = () => {
  const col = collection(db, "memes");
  const q = query(
    col,
    where("isAprooved", "==", true),
    orderBy("timestamp", "desc")
  );
  return q;
};
