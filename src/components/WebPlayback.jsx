import React, { useState, useEffect } from 'react';

const track = {
  name: "",
  album: {
    images: [
      { url: "" }
    ]
  },
  artists: [
    { name: "" }
  ]
}

function WebPlayback(props) {

  const [player, setPlayer] = useState(undefined);
  const [id, setId] = useState(undefined);
  const [is_paused, setPaused] = useState(false);
  const [is_active, setActive] = useState(false);
  const [current_track, setTrack] = useState(track);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {

    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {

      const player = new window.Spotify.Player({
        name: 'Classic Minds',
        getOAuthToken: cb => { cb(props.token); },
        volume: 0.5
      });

      setPlayer(player);

      player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
        setId(device_id);
      });

      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });


      player.addListener('player_state_changed', (state => {

        if (!state) {
          return;
        }

        setTrack(state.track_window.current_track);
        setPaused(state.paused);
        setPosition(state.position);
        setDuration(state.duration);
        player.getCurrentState().then(state => {
          (!state) ? setActive(false) : setActive(true)
        });

      }));

      player.connect();

    };
  }, []);
  
  return (
    <>
      <div id='playback' className="playback-container">
        <div className="main-wrapper">
          <img src={current_track.album.images[0].url || "default-album-img.png"}
            className="now-playing__cover" alt="" />

          <div className="now-playing__side">
            <div className="now-playing__name">{
              current_track.name
            }</div>

            <div className="now-playing__artist">{
              current_track.artists[0].name
            }</div>
          </div>
          <div className='progress-bar'>
            <span style={{
              width: duration ? (100*position/duration)+'%': '0%'}}></span>
          </div>
          <div className='controllers'>
            <button className="btn-prev" onClick={() => { player.previousTrack() }} >
              <img src="skip-previous.svg" alt="" />
            </button>

            <button className="btn-play-pause" onClick={() => { player.togglePlay() }} >
              {
                is_paused 
                ? <img src='play-controller.svg'/> 
                : <img src='pause-controller.svg'/>
              }
            </button>

            <button className="btn-next" onClick={() => { player.nextTrack() }} >
              <img src='skip-next.svg' />
            </button>
          </div>
        </div>
      </div>
    </>
  )

}

export default WebPlayback;