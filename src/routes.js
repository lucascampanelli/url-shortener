import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Index from './views/Index';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Index}/>
            </Switch>
        </BrowserRouter>
    );
}