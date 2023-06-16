import React from "react";
import NavBar from "./NavBar";
import SearchComponent from "./SearchComponent";
import WebPlayback from "./WebPlayback";

export default function Main({token}){
  return (
    <>
      <div id="background-gradient"></div>
      <div id="main-container">
        <NavBar />
        <WebPlayback token={token}/>
        <SearchComponent token={token}/>
      </div>      
    </>
  );  
}