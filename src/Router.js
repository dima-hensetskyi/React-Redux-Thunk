import { HashRouter as Router, NavLink, Route, Switch } from 'react-router-dom';

import Users from './components/Users/Users';
import addUserForm from './components/Users/addUserForm';
import Posts from './components/Post/Posts';
import PostForm from './components/Post/postsForm';

const Routers = () => (
  <Router>
    <nav className="nav-panel">
      <NavLink to="/users" className="app-link" activeClassName="active-link">
        Users
      </NavLink>
      <NavLink to="/addUser" className="app-link" activeClassName="active-link">
        Add User
      </NavLink>
      <NavLink to="/tweets" className="app-link" activeClassName="active-link">
        Tweets
      </NavLink>
      <NavLink to="/add-tweet" className="app-link" activeClassName="active-link">
        Add tweet
      </NavLink>
    </nav>

    <Switch>
      <Route path="/users" component={Users} />
      <Route path="/addUser" component={addUserForm} />
      <Route path="/tweets" component={Posts} />
      <Route path="/add-tweet" component={PostForm} />
      <Route path="/" component={addUserForm}></Route>
    </Switch>
  </Router>
);
export default Routers;
