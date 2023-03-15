import React  from 'react';
import { TiLocation } from "react-icons/ti";
import { RiSearch2Line } from "react-icons/ri";

import './locationInput.css';

const LocationInput = () => {
  return (
    <>
      <div className="search-box">
        <i><TiLocation /></i>
        <input type="text" className="search" placeholder='Enter your location'/>
        <button>
          <i>
            <RiSearch2Line />
          </i>
        </button>
      </ div>
    </ >
  );
}
export default LocationInput;