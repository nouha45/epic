import React from "react"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"
import Heading from "../common/Heading"
import {useLocation} from "react-router-dom"

const Featured = () => {
  const {state} = useLocation();
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='Tous les vidéos' subtitle='Trouvez vos vidéos' />
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured