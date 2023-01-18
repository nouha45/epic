import React from "react"
import Heading from "../common/Heading"
import "./about.css"
import sahra from "../images/sahara_1.jpg"
import elfnna from "../images/elfnna.jpg"
import casa from "../images/casablanca.jpg"

const About = () => {
  return (
    <>
      <section className='about'>
        
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Pourquoi Epic Trip ?' subtitle='Découvrez Epic Trip' />

            <p>Recent surveys have indicated that small businesses recognize the need they have to connect to connect with consumer.</p>
            <div className="liste">
            <ul>
            <li>Ville</li>
            <li>Site touristique</li>
            <li>Monument</li>
          </ul>
          </div>
          </div>
          <div className='right row'>
          <div class="gallery">
          <figure class="gallery__item gallery__item--1">
            <img src={sahra} alt='' /></figure>
            <figure class="gallery__item gallery__item--2"> <img src={elfnna} alt='' /></figure>
            <figure class="gallery__item gallery__item--3"><img src={casa} alt='' /></figure>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
