import React from "react";
import SearchComponent from "./SearchComponent";
import User from "./User";
import AppIcon from "./AppIcon";

export default function TopBar({token}){
  return (
    <> 
      <User />
      <SearchComponent token={token}/>
      <AppIcon />
    </>
  );
}