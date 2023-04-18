import React, { useState } from 'react';
import { UilSearch,UilLocationPinAlt } from '@iconscout/react-unicons'


function Inputs({setquery,setUnits,units}) {
  const [city, setCity] = useState("");

  const handleSearchClick=()=>{
    console.log(city)
    if(city !== ""){
      setquery({q:city});
    }
  }

  const handleLocationClick=()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((pos)=>{
        let lat= pos.coords.latitude;
        let lon = pos.coords.longitude;
        setquery({
          lat,
          lon,
        })
      })
      
    }
  }

  const handleUnitchange=(e)=>{
    const selectedUint=e.currentTarget.name
    if(units !== selectedUint) setUnits(selectedUint); 
  }
  return (
    <div className='flex flex-row justify-center my-6'>
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input 
            type='text'
            value={city}
            onChange={(e)=> setCity(e.currentTarget.value)}
            className='text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase'
            placeholder='Enter City Name.....'
            />
            <UilSearch 
            size={25} 
            className='cursor-pointer text-white transition ease-out hover:scale-125' 
            onClick={handleSearchClick}/>
            <UilLocationPinAlt 
            size={25} 
            className='cursor-pointer text-white transition ease-out hover:scale-125'
            onClick={handleLocationClick}
            />
        </div>
        <div className='flex flex-row w-1/4 items-center justify-center'>
            <button 
            name='metric' 
            className='text-xl text-white font-light hover:scale-125 transition ease-out'
            onClick={handleUnitchange}
            >°C</button>
            <p className='text-white text-xl mx-1'>|</p>
            <button name='imperial' 
            className='text-xl text-white font-light hover:scale-125 transition ease-out'
            onClick={handleUnitchange}
             >°F</button>
        </div>

    </div>
  )
}

export default Inputs