import { withAuthUser, AuthAction } from "next-firebase-auth";
import Head from "next/head";

import AppBar from "@/components/AppBar/";
import MemeGenerator from "@/components/MemeGenerator";
import Loading from "@/components/Common/Loading";

const Image = () => {
  return (
    <>
      <Head>
        <title>Create image memes</title>
      </Head>
      <AppBar />
      <MemeGenerator />
    </>
  );
};
export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  authPageURL: "/login",
  LoaderComponent: Loading,
})(Image);
