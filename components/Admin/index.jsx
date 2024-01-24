import { useState } from "react";
import { useAuthUser } from "next-firebase-auth";

import Grid from "@mui/material/Grid";

import AdminCard from "./AdminCard";

const Admin = ({ memesToAproove = [] }) => {
  const [memes, setMemes] = useState(memesToAproove);

  const user = useAuthUser();

  const handleRemove = (memeId) => {
    const remainMemes = memes.filter(({ id }) => memeId !== id);
    setMemes(remainMemes);
  };

  return (
    <>
      <Grid container>
        {memes.map(
          ({
            authorId,
            id,
            src,
            category,
            tags,
            topText,
            bottomText,
            video,
            username,
          }) => {
            return (
              <Grid item key={id} xs={12} sm={6} md={4}>
                <AdminCard
                  authorId={authorId}
                  bottomText={bottomText}
                  category={category}
                  key={id}
                  src={src}
                  tags={tags}
                  topText={topText}
                  id={id}
                  video={video}
                  handleRemove={handleRemove}
                  username={username}
                />
              </Grid>
            );
          }
        )}
      </Grid>
    </>
  );
};

export default Admin;
