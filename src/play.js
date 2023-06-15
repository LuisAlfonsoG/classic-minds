export default function play(albumUri, trackUri = null, token){

  let body = {
    "context_uri" : albumUri,
    "position_ms": 0
  }

  if(trackUri){
    body["offset"] = {
      "uri": trackUri
    }
  }
  
  let config = {
    method: "PUT",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  };
  
  console.log(config);
  
  fetch(
    `https://api.spotify.com/v1/me/player/play`,
    config
  )

} 