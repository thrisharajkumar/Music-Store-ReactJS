import React from "react";
import { Song } from "./Song";

export const Songs = ({ fn, allSongs }) => {
  console.log("All Songs:", allSongs);
  if (!Array.isArray(allSongs)) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {allSongs.map((currentSong, index) => (
        <Song fn={fn} key={index} song={currentSong} />
      ))}
    </>
  );
};
