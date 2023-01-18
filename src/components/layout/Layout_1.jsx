import React, {useEffect} from 'react'

import './layout.css'

import Sidebar_1 from '../sidebar/Sidebar_1'
import Topnav_1 from '../topnav/TopNav_1'
import Featured from '../gallerie/Featured'
import Upload from '../../pages/upload'

import { BrowserRouter, Route , Switch} from 'react-router-dom'

const Layout_1 = () => {

    

    return (
        <BrowserRouter>
            <Route render={(props) => (
                <div className="layout theme-mode-light theme-color-blue">
                    <Sidebar_1 {...props}/>
                    <div className="layout__content">
                        <Topnav_1/>
                        <div className="layout__content-main">
                        {/* <Switch>
                        <Route path='/user/upload' component={Upload}/>
                        <Route path='/user' component={Featured}/>
                    </Switch> */}
                    
                        </div>
                    </div>
                </div>
            )}/>
        </BrowserRouter>
    )
}

export default Layout_1