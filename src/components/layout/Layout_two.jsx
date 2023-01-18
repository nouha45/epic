import React, {useEffect, useState} from 'react'
import {useLocation} from "react-router-dom"
import axios from "axios";
import Heading from "../common/Heading"
import './layout.css'

import Sidebar_1 from '../sidebar/Sidebar_1'
import Topnav_1 from '../topnav/TopNav_1'
import Featured from '../gallerie/Featured'
import Upload from '../../pages/upload'

import { BrowserRouter, Route , Switch} from 'react-router-dom'

const Layout_two = () => {
    const [videoData, setVideoData] = useState([]);
    const location = useLocation()
    const data = location.state
    console.log(data)
   


    

    return (

       
                <div className="layout theme-mode-light theme-color-blue">
                  <div className="layout__content">
                        <Topnav_1/>
                        <div className="layout__content-main">
    
                    <section className='featured background'>
        <div className='container'>
          <Heading title='Tous les vidéos' subtitle='Trouvez vos vidéos' />
          {        
        data.map( 
             d =>  
      <div key={d.id} className='content grid3 mtop'>
        
      
        
          <div className='box' >
            <span className="title">{d.name}</span>
        <span className="sub_title">{d.city}</span>
            
            <video controls crossOrigin="anonymous">
              <source src={d.file} type="video/mp4" />
              Sorry, your browser doesn't support videos.
            </video>
          <div className="description"> <span >{d.description}</span></div> 
          </div>
        
       
      </div>)}
        </div>
      </section>
                    
                        </div>
                    </div>
                </div>
    )
}

export default Layout_two