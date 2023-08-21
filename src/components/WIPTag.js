import React, { useState } from "react";

export default function WIPTag(){
  const [open, setOpen] = useState(true);
  
  if(!open){
    return (<></>); 
  }
  
  return (
    <div className="tag wip-tag">
      <div className="message">
        <h2>App under development</h2>
        <p>Some functions are not available yet. Only authorized users can make full use of the App.</p>
      </div>
      <div className="action">
        <button
          onClick={() => setOpen(false)} 
          className="close-button"
        >
          close
        </button>
      </div>
    </div>
  )
}