import React,{useState,useEffect}from 'react'
import { NavLink } from 'react-router-dom';

import DateRangeIcon from '@mui/icons-material/DateRange';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const MovieDetails = (props) => {
  //const { movieData } = props.location.state || {};
     const [Click, setClick] = useState(0);

    //console.log(Click);
   // console.log(movieData);
  const {data}= props;

  //  console.log(data);
  
    
  const handleClick=()=>{
    if ( Click <= 0) {
      exit()
    } 
      setClick(Click-1);
    
  }
  const handleClick2=()=>{
    if ( Click >= 10) {
      exit()
    } 
      setClick(Click+1);
    
  }
    return (
      <div>
         {data ? (
        <div className='flex justify-between mx-24 p-7 mt-10 '>
          <div className='h-70 w-70  ' > <img src={data.Poster} alt=""/><h3>Country: {data.Title}</h3><h3>Genre: {data.Genre}</h3> <h3>Country: {data.Country}</h3></div>
          <div className='bg-gray-700 text-gray-400 text-left flex flex-col w-80 h-70'>
            <h1 className='m-4 text-xl ' >Events Details</h1>
            <hr />
            <p className='mx-5 my-3'><h1><DateRangeIcon/> Date and Time</h1>{data.DVD}</p>
            <hr />
            <p className='flex flex-col m-4 '><h1><LocationOnIcon/> Location</h1>{data.Country} <span className='text-red-700'>View on Map</span></p>
            <hr />
            <p className='flex flex-col m-4'>
              <h1>Select tickets</h1>
               <h1 className='flex justify-between'>
                <span className='flex flex-col'>1x Ticket(s) <strong>USD $500.00</strong> </span> 
                <span className='text-2xl cursor-pointer' onClick={()=>handleClick()}>-</span>
                          <span className='text-xl' >{Click}</span>
                          <span className='text-2xl cursor-pointer' onClick={()=>handleClick2()}>+</span>
                </h1>
                <NavLink to={{
                  pathname:'/checkout' }}
                       state={{clickValue: Click}} 
                       className="w-full bg-red-700 m-4 text-center text-xl rounded-xl ">
                  <span>CheckOut for ${Click*500}.00</span>
                  </NavLink>
                  {/*i try to pass data through navlink  got it from stackoverflow */}
                {/* <NavLink to={"/checkout"} className='w-full bg-red-700 m-4 text-center text-xl rounded-xl' ><span>CheckOut for ${Click*500}.00</span></NavLink> */}
                </p>
          </div>
         
        </div>
    ) : (
      <p>Loading...</p>
    )}
       
      </div>
    );
  };

export default MovieDetails
