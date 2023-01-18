import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
      

      <footer>
        <div className='container'>
        {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo1.png' alt='' />
              <h2>Subscribe in our Newsletter</h2>
              <p>Subscribe to be the first one to know about updates . Enter your email</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

        </div>
      </footer>
      <div className='legal'>
        <span>© Epic Trip</span>
      </div>
    </>
  )
}

export default Footer
