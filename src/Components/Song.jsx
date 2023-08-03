import React, { useState } from "react";

export const Song = ({ song, fn }) => {
  console.log(song);
  const [playerFlag, setPlayerFlag] = useState(false);

  const showPlayer = () => {
    setPlayerFlag(true);
    fn(true, song); // You might need to call this function to handle the player state in the parent component (not mentioned in the code provided).
  };

  return (
    <div className="row">
      <div className="col-4">
        <img src={song.artworkUrl100} height={100} width={100} alt="Album Artwork" />
      </div>
      <div className="col-4">
        {song.artistName} {song.trackName}
      </div>
      <div className="col-4">
        <button onClick={showPlayer} className="btn btn-primary">
          Play Song
        </button>
      </div>
    </div>
  );
};
