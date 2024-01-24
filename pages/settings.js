import { withAuthUser, AuthAction } from "next-firebase-auth";
import Head from "next/head";

import AppBar from "@/components/AppBar";
import UserSettings from "@/components/PagesComponents/UserSettings";
import Loading from "@/components/Common/Loading";

const Settings = () => {
  return (
    <>
      <Head>
        <title>Memes setting</title>
      </Head>
      <AppBar />
      <UserSettings />
    </>
  );
};

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  authPageURL: "/login",
  LoaderComponent: Loading,
})(Settings);
