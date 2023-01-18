import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Découverez le patrimoine marocain là où vous etes ! ' subtitle='' />

          <form className='flex'>
            <div className='box'>
              <input type='text' placeholder='Ville' />
            </div>
            <div className='box'>
              <input type='text' placeholder='Site touristique' />
            </div>
            
            <button className='btn1'>
              <i className='fa fa-search'></i>Rechercher

            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
