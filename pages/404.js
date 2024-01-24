import { withAuthUser } from "next-firebase-auth";

import AppBar from "@/components/AppBar";
import Page404 from "@/components/PagesComponents/Page404";

const Custom404 = () => {
  return (
    <>
      <AppBar />
      <Page404 />
    </>
  );
};
export default withAuthUser()(Custom404);
