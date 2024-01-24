import { withAuthUser, AuthAction } from "next-firebase-auth";
import Head from "next/head";

import AppBar from "@/components/AppBar";
import CreateMeme from "@/components/MemeGenerator/CreateMeme";
import Loading from "@/components/Common/Loading";

const Create = () => {
  return (
    <>
      <Head>
        <title>Create memes</title>
      </Head>
      <AppBar />
      <CreateMeme />
    </>
  );
};
export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  authPageURL: "/login",
  LoaderComponent: Loading,
})(Create);
