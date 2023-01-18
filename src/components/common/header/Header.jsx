import React, { useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"
import Search from "../../assets/search"
import logo from "../header/logo1.png"
import servides from "../../../services/servides"


const Header = () => {
  const [navList, setNavList] = useState(false)
  const [selects, setSelects] = useState("");
  const [text, setText] = useState("");
  const [monuments, setMonuments]= useState([])
  console.log(selects)
  const handleChange= (e)=>{
    setText(e.target.value)
  }
  console.log(text)

  const chercherMonument= (e)=>{
  e.preventDefault();
    console.log("ana hna")
    if(selects === "City"){
      
      servides.findMonumentByCity(text).then((response) =>{
        console.log(response.data);
        console.log("ana hna 2");
        setMonuments(response.data)

       }).catch(error =>{
           console.log(error);
       })
    }

  }

  return (
    <>
      <header>     
        <div className='container flex'>
          <div className='logo'>
          <img src={logo} alt='' />
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text} 
                 {list.text === "Services" ? <i class="fa fa-sort-down" style={{marginLeft: "10px"}}></i> : <i></i>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='button flex'>
          <form className="placeSearch" action="">
          <button  onClick = {chercherMonument}>
          <Link to={{
  pathname: '/layout_two',
  state:monuments 
}}>  <Search></Search></Link>
          </button>
        
        <input  placeholder="Search here"  type="text" onChange={handleChange} />
        <div >
        <select value={selects} onChange={e=>setSelects(e.target.value)}>
            <option >Name</option>
            <option >City</option>
            <option >Description</option>
            

        </select>
        
    </div>
      </form>
            
            <button className='btn1'>
              <i className='fa fa-sign-out'></i> Sign In
            </button>
          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
