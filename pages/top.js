import { withAuthUser } from "next-firebase-auth";
import Head from "next/head";

import AppBar from "@/components/AppBar";
import Home from "@/components/PagesComponents/Home";
import Blocked from "@/components/PagesComponents/Blocked";

import { getTopMemes } from "@/firebase/read/memes";

const Top = ({ memes, isBlocked, reason }) => {
  if (isBlocked) {
    return <Blocked reason={reason} />;
  }

  return (
    <>
      <Head>
        <title>Top Nepali Memes </title>
      </Head>
      <AppBar />
      <Home memes={memes} />
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  let memes;
  const { user } = {};
  const isBlocked = user?.blocked?.isBlocked || false;
  const reason = user?.blocked?.reason || null;
  try {
    memes = await getTopMemes();
  } catch (e) {
    console.log(e);
  }
  return {
    props: {
      memes,
      isBlocked,
      reason,
    },
  };
};

export default withAuthUser()(Top);
