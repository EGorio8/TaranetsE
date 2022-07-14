import React from 'react'
import {useState} from "react";

const Map = (props)=> {

  const [list, setList]= useState();

  fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(response => response.json())
  .then(json => setList(json))

  return 
    <div>
      <div>Map</div>;
    </div>
};

export default Map