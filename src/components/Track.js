import React from "react";

export default function Track({item, play}){
  const {
    name,
    uri,
    album,
    artists
  } = item;
  
  return (
    <div className={`track item-${item.name}`}>
      <div className="">{name}</div>
      <div className="">{artists[0].name}</div>
      <div className="">{album.name}</div>
      <div className="album-image">
        
      </div>
      <button 
        onClick={
          () => play( uri )
        }
      >
        play song
      </button>
    </div>
  );
}