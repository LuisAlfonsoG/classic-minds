import React from 'react';
import DisplayItem from './DisplayItem';

export default function SearchResultList({ list, play }){
  return (
    <>
      {
        list.map(
          item => 
            <DisplayItem 
              key={item.id} 
              item={item} 
              play={play}
            />
        )
      }
    </>
  );
}