import React from "react";

export default function DisplayItem({item, play}){
  const {
    name,
    uri,
    album,
    artists
  } = item
  return (
    <div className={`item-${item.name}`}>
      <div>{name}</div>
      <div>{artists[0].name}</div>
      <div>{album.name}</div>
      <button 
        onClick={
          () => play( album.uri, uri)
        }
      >
          play song
      </button>
    </div>
  );
}