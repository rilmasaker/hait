import { withAuthUser } from "next-firebase-auth";

import Typography from "@mui/material/Typography";

import AppBar from "@/components/AppBar";
import CardDesktop from "@/components/MemeCard/DesktopCard";
import SmallCard from "@/components/MemeCard/SmallCard";
import TwoColumnsLayout from "@/components/Common/TwoColumnsLayout";
import UserSettings from "@/components/Common/UserSettings";
import Comments from "@/components/Common/Comments";
import { Text } from "@/utils/Languages";

import { getOneMeme, getCommentByMemeId } from "@/firebase/read/memes";

const MainComponent = ({ meme, textComments }) => {
  const {
    id,
    bottomText,
    category,
    src,
    tags,
    topText,
    likes,
    dislikes,
    timestamp,
    video,
    username,
    userSrc,
  } = meme;
  return (
    <>
      <CardDesktop
        bottomText={bottomText}
        category={category}
        key={id}
        src={src}
        tags={tags}
        topText={topText}
        timestamp={timestamp}
        likes={likes}
        dislikes={dislikes}
        id={id}
        video={video}
        userSrc={userSrc}
        username={username}
      />
      <Comments textComments={textComments} memeId={id} />
    </>
  );
};
export const SideComponent = ({ memes = [] }) => (
  <>
    {" "}
    <UserSettings />
    <Typography variant="inherited" sx={{ mt: 2, mb: 2 }}>
      {<Text tid="popular" />}
    </Typography>
    {memes.slice(0, 2).map(({ src, video }) => (
      <SmallCard src={src} key={src} video={video} />
    ))}
  </>
);

const MemeView = ({ memes = [], meme, textComments }) => {
  const side = <SideComponent memes={memes} />;
  const main = <MainComponent meme={meme} textComments={textComments} />;

  return (
    <>
      <AppBar />
      <TwoColumnsLayout mainComponent={main} sideComponent={side} />
    </>
  );
};

export async function getServerSideProps({ params }) {
  const { id } = params;
  let meme;
  let textComments = [];
  try {
    meme = await getOneMeme(id);
    textComments = await getCommentByMemeId(id);
  } catch (e) {
    console.log(e);
  }

  return {
    props: {
      textComments,
      meme,
    },
  };
}

export default withAuthUser()(MemeView);
