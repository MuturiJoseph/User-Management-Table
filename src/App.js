import React,{Component } from 'react';
import { Route,Switch,Redirect} from 'react-router-dom';
import NavBar from './components/navBar';
import Users from './components/user';
import UserForm from './components/userForm';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/users/:id" component={UserForm} />
          <Route path="/users/new" component={UserForm} />
          <Route path="/users" component={Users} />
          <Redirect from="/" exact to="/users" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
    );
  }
};
 
export default App;


