import {Route, Switch} from 'react-router-dom'

const route = (
    <Switch>
        {/* Frontend */}
        <Route path='/' exact={true} component={'login'} />
        <Route path='/login' component={'login'} />
        <Route path='/register' component={'register'} />

        {/* Backend */}
        <Route path='/backend/dashboard' component={'dashboard'} />
        
    </Switch>
)

export default routes