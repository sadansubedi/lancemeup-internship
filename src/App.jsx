import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Moviedata from './components/Moviedata'
import Navbar from './components/Navbar'
import MovieDetails from './components/MovieDetails'
import axios from 'axios';

import { Route, Routes } from "react-router-dom";
// import CheckOut from './CheckOut'
import CheckOut from './components/CheckOut'
import Confirmpay from './components/Confirmpay'
function App() {
  // const [count, setCount] = useState(0)
  const [data, setData] = useState(null);

  useEffect(() => {
    // Define an async function to make the API call
    const fetchData = async () => {
      try {
        // Make a GET request using Axios
        const response = await axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=8ec1fbe2');
       // console.log(response.data)
        // Set the fetched data to the state
        setData(response.data);
      } catch (error) {
        // Handle errors, e.g., log the error or show an error message
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);


  return (
    <>
    <Navbar/>
    <Routes>
            <Route exact path="/"  element={<Moviedata data={data} />}/>
            <Route exact path="/screen2" element={<MovieDetails data={data}/>}/>
            <Route exact path="/checkout" element={<CheckOut />}/>
            <Route exact path="/confirmpay" element={<Confirmpay data={data}/>}/>
           
      </Routes>
     
    </>
  )
}

export default App
