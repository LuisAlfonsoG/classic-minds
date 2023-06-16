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
      <div className="wrapper">
        <button 
          onClick={
            () => play( uri )
          }
        >
          <img src="play-arrow.svg" />
        </button>
        <div className="track-info">
          <div className="">{name}</div>
          <div className="">{artists[0].name}</div>
        </div>
      </div>
      <div className="album-image">
        <img src={album.images[0].url} />      
      </div>
      
    </div>
  );
}