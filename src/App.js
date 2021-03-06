import React, { Component, Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
 import Users from './components/users/Users';
import User from './components/users/User';
import axios from 'axios';
 import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';

//import jwt_decode from "jwt-decode";
 let githubClientId;
let githubClientSecret;


class App extends Component {
  state = {
    users: [],
    user:{},
    loading: false,
    msg:null
    
  };
  
//Search Github users
  searchUsers= async (text)=>{
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  }

  //Get single user
  getUser=async(username)=>{
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`
    );
    this.setState({ user: res.data, loading: false });
  }

//Clear Users
clearUsers=()=>{
  this.setState({users:[],loading:false})
}

//Set Alert
setAlert=(msg)=>{
  this.setState({msg:msg});
  setTimeout(()=>{
    this.setState({msg:null})},1500)
}
  render() {
   const {users,loading,user}=this.state;
    return (
      <Router>
      <div className='App'>
        <Navbar />
        <div className='container section'>
          <Alert msg={this.state.msg} />
          <Switch>
           
            <Route exact path='/' render={props=>(
            <Fragment>
            <Search searchUsers={this.searchUsers}
             clearUsers={this.clearUsers} 
             showClear={users.length>0?true:false}
             setAlert={this.setAlert}/>
           
          <Users loading={loading} users={users} />
            </Fragment>
            )}  />
            <Route exact path='/about' component={About}/>
             
            <Route exact path='/user/:login' render={props=>(
              <User {...props} getUser={this.getUser} user={user} loading={loading}/>
            )}/>
          </Switch>
          
        </div>
      </div>
      </Router>
    );
  }
}

export default App;




