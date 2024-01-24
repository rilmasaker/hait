import { withAuthUser } from "next-firebase-auth";
import Head from "next/head";

import AppBar from "@/components/AppBar";
import SearchComponent from "@/components/PagesComponents/Search";

const Search = () => {
  return (
    <>
      <Head>
        <title>Search the best memes</title>
      </Head>
      <AppBar />
      <SearchComponent />
    </>
  );
};
export default withAuthUser()(Search);
