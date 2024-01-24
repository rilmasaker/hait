import { withAuthUser } from "next-firebase-auth";
import Head from "next/head";

import AppBar from "@/components/AppBar";
import PrivacyPolicy from "@/components/PagesComponents/PrivacyPolicy";

const Policy = () => {
  return (
    <>
      <Head>
        <title>Hait Nepal policy</title>
      </Head>
      <AppBar />
      <PrivacyPolicy />
    </>
  );
};
export default withAuthUser()(Policy);
