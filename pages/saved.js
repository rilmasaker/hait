import { withAuthUser, useAuthUser } from "next-firebase-auth";
import Head from "next/head";

import AppBar from "@/components/AppBar";
import Home from "@/components/PagesComponents/Home";

import { getSavedMemes } from "@/firebase/read/memes";
import { useEffect, useState } from "react";

const SavedMeme = () => {
  const [memes, setMemes] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const { id } = useAuthUser();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const saved = await getSavedMemes(id);
      setMemes(saved);
      setLoading(false);
    };
    fetchData();
  }, [id]);
  return (
    <>
      <Head>
        <title>Hait Nepal saved memes</title>
      </Head>
      <AppBar />
      <Home memes={memes} isLoading={isLoading} />
    </>
  );
};

export default withAuthUser()(SavedMeme);
