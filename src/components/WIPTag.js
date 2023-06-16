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
        <p>Some funtions are not available yet</p>
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