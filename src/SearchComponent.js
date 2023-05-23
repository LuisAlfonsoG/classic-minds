import React, {useState} from "react";
import WebPlayback from "./WebPlayback";
import SearchBar from "./SearchBar";
import SearchResultList from "./SearchResultList";

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

function play(albumUri, trackUri, token){
  let config ={
    method: "PUT",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "context_uri" : albumUri,
      "offset": {
        "uri": trackUri
      },
      "position_ms": 0
    })
  }
  
  console.log(config);
  
  fetch(
    `https://api.spotify.com/v1/me/player/play`,
    config
  )

} 

export default function SearchComponent({token}){
 
  const [searchResult, setSearchResult] = useState("");
   
  return (
    <>
      <WebPlayback  token={token} />
      <SearchBar 
        search={
          async value => setSearchResult(await search(value, token))
        } 
      />
      <SearchResultList 
        list={searchResult.tracks?.items || []} 
        play={(albumUri, trackUri) => {play(albumUri, trackUri, token)}}
      />
    </>
  );
}