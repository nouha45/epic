import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Recent from "../home/recent/Recent"

const Pages = () => {
  return (
    <>
   <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Recent} />
          <Route exact path='/blog' component={Home} />
          <Route exact path='/actualite' component={Home} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages