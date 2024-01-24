import Typography from "@mui/material/Typography";

import CardDesktop from "../MemeCard/DesktopCard";
import SmallCard from "../MemeCard/SmallCard";
import TwoColumnsLayout from "../Common/TwoColumnsLayout";
import UserSettings from "../Common/UserSettings";
import Empty from "../Common/Empty";
import Pagination from "../Common/Pagination";
import Skeleton from "../Common/Skeleton";
import Loader from "../Common/Loader";

import { Text } from "@/utils/Languages";

const MainComponent = ({ memes, isLoading }) => (
  <>
    {isLoading ? (
      <>
        <Loader />
        {[...Array(10).keys()].map((n) => (
          <Skeleton key={n} />
        ))}
      </>
    ) : (
      memes.map(
        ({
          id,
          bottomText,
          category,
          src,
          tags,
          topText,
          likes,
          timestamp,
          dislikes,
          video,
          username,
        }) => (
          <CardDesktop
            bottomText={bottomText}
            category={category}
            key={id}
            src={src}
            tags={tags}
            timestamp={timestamp}
            topText={topText}
            id={id}
            likes={likes}
            dislikes={dislikes}
            video={video}
            username={username}
          />
        )
      )
    )}
  </>
);

export const SideComponent = ({ memes }) => (
  <>
    {" "}
    <UserSettings />
    <Typography variant="inherited" sx={styles.margin}>
      <Text tid="popular" />
    </Typography>
    {memes.slice(0, 2).map(({ src, video }) => (
      <SmallCard src={src} key={src} video={video} />
    ))}
  </>
);

const Home = ({
  memes,
  isStart,
  isEnd,
  getPrev,
  getNext,
  isPagination,
  isLoading,
}) => {
  if (!memes?.length && !isLoading) {
    return <Empty />;
  }
  const side = <SideComponent memes={memes} />;
  const main = (
    <>
      <MainComponent memes={memes} isLoading={isLoading} />
      {isPagination && (
        <Pagination
          isStart={isStart}
          isEnd={isEnd}
          getPrev={getPrev}
          getNext={getNext}
        />
      )}
    </>
  );

  return <TwoColumnsLayout mainComponent={main} sideComponent={side} />;
};

const styles = {
  margin: { wordBreak: "break-word", fontSize: 12 },
};

export default Home;
