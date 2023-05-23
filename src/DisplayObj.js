import React from "react";

export default function DisplayObj({obj, space = 0}){
  if(!obj) return;
  const keys = Object.keys(obj);
  return (
    <>
      {keys.map((key) => {
        let s = <span style={{"visibility": "hidden"}}>++</span>;
        for(let i = 0; i < space; i++){
          s = <>{s}<span style={{"visibility": "hidden"}}>++</span></>;
        }
        return (
          <div>
            <div>{s} {key} :</div>
            {
              typeof obj[key] === "object"
              ? <DisplayObj space={space + 1} obj={obj[key]} />
              : <div>{s} <span style={{"visibility": "hidden"}}>++</span> {obj[key]} </div>
            }
          </div>
        )
      })}
    </>
  )
}