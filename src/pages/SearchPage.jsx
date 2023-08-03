import React, { useEffect, useState } from "react";
import { Search } from "../Components/Search";
import { Songs } from "../Components/Songs";
import { getSongs } from "../services/api-client";
import { Player } from "../Components/Player";

export const SearchPage = () => {
  const [allSongs, setSongs] = useState([]);
  const [flag, setFlag] = useState(false);
  const [song,setPlayerSong] = useState(null);
  
  const loadSongs = async () => {
    setSongs(await getSongs('Latest Songs'));
  };
  

  useEffect(() => {
    loadSongs();
  }, []);

  const togglePlayer = (flag, songarg) => {
    setPlayerSong(songarg);
    setFlag(flag);
  };

  const getArtistName = async (artistName) => {
    console.log('Rec Artist Name', artistName);
    try {
      const songs = await getSongs(artistName);
      setSongs(songs);
    } catch (error) {
      console.error("Error fetching songs:", error);
    }
  };

  const jsx = (
    <>
      <Search fn={getArtistName} />
      <Songs fn={togglePlayer} allSongs={allSongs} />
    </>
  );

  return (
    <div className="container">
      <h1 className="alert alert-info text-center">Music Store</h1>
      {flag ? <Player fn ={togglePlayer} song ={song}/> : jsx}
    </div>
  );
};
