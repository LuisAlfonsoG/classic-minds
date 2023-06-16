import React, {useState} from "react";

export default function SearchBar({search}){
  const [value, setValue] = useState("");
  
  return (
    <div id="search-bar">
      <div className="search-bar-form">
        <input 
          onChange={e => setValue(e.target.value)} 
          value={value} 
          type="text"
          placeholder="What do you want to listen to?"
        />
        <button 
          onClick={
            () => search(value) 
          } 
        >
          <img src="search-icon.svg" />
        </button>
      </div>
      <div className="filters">
        <div className="song">Song</div>
        <div className="artist">Artist</div>
        <div className="album">Album</div>
        <div className="playlist">Playlist</div>
      </div>
    </div>
  )
}