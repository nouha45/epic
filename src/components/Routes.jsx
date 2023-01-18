import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Rmonuments from '../pages/RMonuments'
import Setting from '../pages/Settinng'
import Upload from '../pages/upload'
import Featured from './gallerie/Featured'

const Routes = () => {
    return (
        <Switch>
            <Route path='/admin' exact component={Dashboard}/>
            <Route path='/admin/responsables' component={Rmonuments}/>
            <Route path='/admin/settings' component={Setting}/>
           
        </Switch>
    )
}

export default Routes
