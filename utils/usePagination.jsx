// https://github.com/premshree/use-pagination-firestore
// Thanks for @Author  https://github.com/premshree
import { useEffect, useReducer, useRef } from "react";
import {
  queryEqual,
  snapshotEqual,
  endBefore,
  limit,
  limitToLast,
  onSnapshot,
  query,
  startAfter,
} from "firebase/firestore";

const defaultGuard = (state, a) => state;

const getReducer = () => (state, action) => {
  switch (action.type) {
    case "SET-QUERY": {
      const {
        query: queryObj,
        queryRef,
        firstDocRef,
        limit: limitNum,
      } = action.payload;
      return {
        ...state,
        query: query(queryObj, limit(limitNum)),
        queryRef,
        firstDocRef,
        limit: limitNum,
        isLoading: true,
      };
    }

    case "LOAD": {
      const { value } = action.payload;
      const docs = value.docs;

      const items = docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        timestamp: `${doc.data().timestamp?.toDate()}`?.slice(4, 21),
      }));

      const firstDoc = docs[0];
      const lastDoc = docs[docs.length - 1];
      const queryFromRef = state.queryRef ? state.queryRef.current : undefined;
      const prevQuery =
        queryFromRef && firstDoc
          ? query(
              queryFromRef,
              endBefore(firstDoc),
              limitToLast(state.limit + 1)
            )
          : state.lastQuery;
      const nextQuery =
        queryFromRef && lastDoc
          ? query(queryFromRef, startAfter(lastDoc), limit(state.limit))
          : state.nextQuery;

      const firstDocRef = state.firstDocRef;
      if (firstDocRef && firstDocRef.current === undefined) {
        firstDocRef.current = firstDoc;
      }

      return {
        ...state,
        docs,
        lastQuery: items.length > 0 ? state.query : undefined,
        isLoading: false,
        firstDoc,
        firstDocRef,
        lastDoc,
        prevQuery,
        nextQuery,
        items,
        isStart:
          (firstDoc &&
            firstDocRef?.current &&
            snapshotEqual(firstDoc, firstDocRef.current)) ||
          false,
        isEnd: items.length < state.limit,
      };
    }

    case "NEXT": {
      return {
        ...state,
        isLoading: true,
        query: state.nextQuery,
      };
    }

    case "PREV": {
      return {
        ...state,
        isLoading: true,
        query: state.prevQuery,
      };
    }

    default: {
      return defaultGuard(state, action);
    }
  }
};

const initialState = {
  query: undefined,
  queryRef: undefined,
  lastQuery: undefined,
  firstDocRef: undefined,
  docs: [],
  firstDoc: undefined,
  lastDoc: undefined,
  prevQuery: undefined,
  nextQuery: undefined,
  items: [],
  isLoading: true,
  isStart: true,
  isEnd: false,
  limit: 10,
};

export const usePagination = (firestoreQuery, options) => {
  const [state, dispatch] = useReducer(getReducer(), initialState);
  const queryRef = useRef(undefined);
  const firstDocRef = useRef(undefined);

  const { limit: limitOpt = 10 } = options;

  useEffect(() => {
    if (firestoreQuery !== undefined) {
      if (
        queryRef?.current &&
        queryEqual(firestoreQuery, queryRef.current) &&
        limitOpt === state.limit
      ) {
        return;
      }

      queryRef.current = firestoreQuery;
      firstDocRef.current = undefined;
      dispatch({
        type: "SET-QUERY",
        payload: {
          query: firestoreQuery,
          queryRef,
          firstDocRef,
          limit: limitOpt,
        },
      });
    }
  }, [firestoreQuery, limitOpt, state.limit, dispatch]);

  useEffect(() => {
    if (state.query !== undefined) {
      const unsubscribe = onSnapshot(state.query, (snap) => {
        if (state.query) {
          dispatch({
            type: "LOAD",
            payload: { value: snap, query: state.query },
          });
        }
      });

      return () => unsubscribe();
    }
  }, [state.query]);

  return {
    docs: state.docs,
    items: state.items,
    isLoading: state.isLoading,
    isStart: state.isStart,
    isEnd: state.isEnd,
    getPrev: () => dispatch({ type: "PREV" }),
    getNext: () => dispatch({ type: "NEXT" }),
  };
};
