import { withAuthUser } from "next-firebase-auth";
import { usePagination } from "@/utils/usePagination";
import Head from "next/head";

import AppBar from "@/components/AppBar";
import Home from "@/components/PagesComponents/Home";
import Blocked from "@/components/PagesComponents/Blocked";
import Intro from "@/components/PagesComponents/Intro";

import { getAproovedMemesQuery } from "@/firebase/read/memes";

const Index = ({ isBlocked, reason }) => {
  const { items, isLoading, isStart, isEnd, getPrev, getNext } = usePagination(
    getAproovedMemesQuery(),
    {
      limit: 7,
    }
  );

  if (isBlocked) {
    return <Blocked reason={reason} />;
  }

  const handleNext = () => {
    getNext();
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  };

  const handlePrev = () => {
    getPrev();
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <Head>
        <title>Nepali memes</title>
      </Head>
      <AppBar />
      <Intro />
      <Home
        memes={items}
        isStart={isStart}
        isEnd={isEnd}
        getPrev={handlePrev}
        getNext={handleNext}
        isPagination
        isLoading={isLoading}
      />
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const { user } = {};
  const isBlocked = user?.blocked?.isBlocked || false;
  const reason = user?.blocked?.reason || null;

  return {
    props: {
      isBlocked,
      reason,
    },
  };
};

export default withAuthUser()(Index);
