import React from 'react';
import Track from './Track';

export default function TrackList({ list, play }){
  return (
    <div id="track-list">
      {
        list.map(
          item => 
            <Track 
              key={item.id} 
              item={item} 
              play={(uri) => play(item.album.uri, uri)}
            />
        )
      }
    </div>
  );
}