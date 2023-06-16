import React from "react";

export default function NavBar(){
  return (
    <>
      <div id="navbar">
        <div className="home">
          <div className="icon"><img src="home-icon.svg" /></div>
          <div className="section-name">Home</div>
        </div>
        <div className="search">
          <div className="icon"> <img src="search-icon.svg"/> </div>
          <div className="section-name">Search</div>
        </div>
        <hr></hr>
      </div>
    </>
  );
}