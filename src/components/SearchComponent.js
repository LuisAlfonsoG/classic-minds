import React, {useState} from "react";
import SearchBar from "./SearchBar";
import TrackList from "./TrackList";
import play from "../play";

async function search(value, token){
  
  const result = await fetch(
    `https://api.spotify.com/v1/search?q=${encodeURI(value)}&type=track`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  
  return await result.json(); 
}

export default function SearchComponent({token}){
 
  const [searchResult, setSearchResult] = useState("");
   
  return (
    <>
      <SearchBar 
        search={
          async value => setSearchResult(await search(value, token))
        } 
      />
      <TrackList 
        list={searchResult.tracks?.items || []} 
        play={
          (albumUri, trackUri) => play(albumUri, trackUri, token)
        }
      />
    </>
  );
}