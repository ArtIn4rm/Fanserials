import React, {useContext} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { publicRoutes, simpRoutes, moderatorRoutes, adminRoutes} from '../routes';
import { SERIES_ROUTE } from '../utils/consts';
import {Context} from '../index'

const AppRouter = () => {
    const {user} = useContext(Context)
    return (
        <Switch>
            {user.isAuth.isSimp && simpRoutes.map(({path, Component}) => 
                <Route key={path} path={path} component={Component} exact/>
            )}
            {user.isAuth.isModerator && moderatorRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {user.isAuth.isAdmin && adminRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={SERIES_ROUTE}/>
        </Switch>
    );
};

export default AppRouter;