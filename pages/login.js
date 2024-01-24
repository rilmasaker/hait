import { withAuthUser } from "next-firebase-auth";
import Head from "next/head";

import AppBar from "@/components/AppBar";
import LoginComponent from "@/components/PagesComponents/Login";

const Login = ({}) => {
  return (
    <>
      <Head>
        <title>Hait login</title>
      </Head>
      <AppBar />
      <LoginComponent />
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  return {
    props: {
      // auth,
    },
  };
};

export default withAuthUser()(Login);
