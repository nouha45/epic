import "./App.css"
import Pages from "./components/pages/Pages"
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './assets/css/grid.css'
import './assets/css/theme.css'
import './assets/css/index.css'
import { BrowserRouter , Switch, Route } from "react-router-dom"
import Layout_1 from "./components/layout/Layout_1"
import Layout_two from "./components/layout/Layout_two"
//import Layout from "./components/layout/Layout"

function App() { 
  //page de garde 
   //return <Pages />

  //respo monument dashbord
 // return <Layout_1 />
 
   //Admin dashbord
  //return <Layout />
  return(
    <BrowserRouter>
     <Switch>
          <Route exact path='/' component={Pages} />
          <Route  path='/layout_1' component={Layout_1} />
          <Route  path='/layout_two' component={Layout_two} />
          
        </Switch>
    </BrowserRouter>
  )
}

export default App
