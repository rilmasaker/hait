import { withAuthUser } from "next-firebase-auth";

import AppBar from "@/components/AppBar";
import ErrorPage from "@/components/PagesComponents/ErrorPage";

const Error = () => {
  return (
    <>
      <AppBar />
      <ErrorPage />
    </>
  );
};

export default withAuthUser()(Error);
