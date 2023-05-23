import React, {useState} from "react";

export default function SearchBar({search}){
  const [value, setValue] = useState("");
  
  return (
    <>
      <input 
        onChange={e => setValue(e.target.value)} 
        value={value} 
        type="text"
      />
      <button 
        onClick={
          () => search(value) 
        } 
      >
        search
      </button>
    </>
  )
}