import React from "react"
import { list } from "../../data/Data"
import { Link } from "react-router-dom"

const RecentCard = () => {
  return (
    <>
      <div className='content grid3 mtop'>
        {list.map((val, index) => {
          const { cover, category, location, name, price, type } = val
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
              <div class="line-5"></div>
                <h4>{name}</h4>
                
              </div>
              <div className='button flex'>
                <Link>voir plus
                 
                </Link>
                <i className="fa fa-arrow-right"></i>
                
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RecentCard
