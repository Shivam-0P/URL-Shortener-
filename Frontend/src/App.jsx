import React from 'react'
import { useState } from 'react'
import axios from "axios";
import "./App.css";

const App = () => {
  const [data , setdata] = useState()
  const [url,seturl] = useState();
  const onsubmit = async (e) =>{
  e.preventDefault();
     
    const response = await axios.post('https://url-shortener-1-ya41.onrender.com/url',{
        url:data,
    })
    seturl(response.data.id);

     setdata("");

  }
  return (
    <div>
      <div className='main-container'>
        <div className='container-card'>
          <p className='card-para'>URL Shortner</p>
          <h1 className='name'>URL</h1>
       
        <form action="" onSubmit={onsubmit}>
        <input type="text"
        placeholder='paste your url here'
        value={data} 
        onChange = {(e)=>setdata(e.target.value)}
        />
        <button type='submit'>Click</button>
        <p className='short url'>{`http://localhost:4000/${url}`}</p>
        </form>
         </div>
        
      </div>
    </div>
  )
}

export default App
