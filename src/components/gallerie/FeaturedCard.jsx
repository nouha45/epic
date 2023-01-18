import React, { useState, useEffect } from "react";
import axios from "axios";
import {useLocation} from "react-router-dom"

const FeaturedCard = () => {
  const [videoData, setVideoData] = useState([]);
  const {state} = useLocation()

  useEffect(() => {
    axios
      .get("http://localhost:8029/files")
      .then((response) => setVideoData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
    {
                                state.map(
                                   st =>
      <div className='content grid3 mtop'>
        
      
        
          <div className='box' >
            <span className="title">{st.name}</span>
        <span className="sub_title">{st.city}</span>
            
            <video controls crossOrigin="anonymous">
              <source src={`http://localhost:8029/files/${st.file}`} type="video/mp4" />
              Sorry, your browser doesn't support videos.
            </video>
          <div className="description"> <span >{st.description}</span></div> 
          </div>
        
       
      </div>)}
    </>
  );
};

export default FeaturedCard;
