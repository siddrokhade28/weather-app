import React from 'react';
import { iconUrlFromCode } from '../services/WeatherService';


function Forcast({title,items}) {
    return (
        <div>
            <div className='flex items-center justify-normal mt-6'>
                <p className='text-white font-medium uppercase'>{title} </p>
            </div>

            <hr className='my-2'></hr>

            <div className='flex flex-row  items-center justify-between text-white'>
                {items.map((item)=>(
                     <div className='flex flex-col items-center  justify-center'>
                     <p className='font-light text-sm'>{item.title} </p>
                     <img className='max-w-xs h-auto' src={iconUrlFromCode(item.icon)} alt="" />
 
                     <p className='font-medium'> {`${item.temp.toFixed()}°`}</p>
                 </div>
                ))}

               

            </div>



        </div>
    )
}

export default Forcast