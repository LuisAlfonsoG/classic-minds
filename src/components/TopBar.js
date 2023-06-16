import React from "react";
import User from "./User";
import AppIcon from "./AppIcon";
import SearchBar from "./SearchBar";

export default function TopBar({search}){
  return (
    <div id="top-bar"> 
      <User />
      <SearchBar 
        search={(value) => search(value)}
      />
      <AppIcon />
    </ div>
  );
}