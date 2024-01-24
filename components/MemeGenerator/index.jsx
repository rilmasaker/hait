import TwoColumnsLayout from "../Common/TwoColumnsLayout";
import { SideComponent } from "../PagesComponents/Home";
import MainComponent from "./Generate";

const MemeGenerator = ({ memes = [], video }) => {
  const main = <MainComponent video={video} />;
  const side = <SideComponent memes={memes} />;

  return <TwoColumnsLayout mainComponent={main} sideComponent={side} />;
};

export default MemeGenerator;
