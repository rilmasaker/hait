import { withAuthUser, AuthAction } from "next-firebase-auth";

import AppBar from "@/components/AppBar";
import Admin from "@/components/Admin";
import Loading from "@/components/Common/Loading";

import { getMemesToAproove } from "@/firebase/read/memes";

const SolomonsVestibule = ({ memes }) => {
  return (
    <>
      <AppBar />
      <Admin memesToAproove={memes} />
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  let memes;
  try {
    memes = await getMemesToAproove();
  } catch (e) {
    console.log(e);
  }
  return {
    props: {
      memes,
    },
  };
};

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  authPageURL: "/login",
  LoaderComponent: Loading,
})(SolomonsVestibule);
