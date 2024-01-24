import { withAuthUser } from "next-firebase-auth";

import AppBar from "@/components/AppBar";
import OfflinePage from "@/components/PagesComponents/OfflinePage";

const Offline = () => {
  return (
    <>
      <AppBar />
      <OfflinePage />
    </>
  );
};

export default withAuthUser()(Offline);
