import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import PropTypes from 'prop-types'



 class Search extends Component {
     
     state={
         text:''
     }
     static propTypes={
         searchUsers: PropTypes.func.isRequired,
          clearUsers: PropTypes.func.isRequired,
          showClear: PropTypes.bool.isRequired,
          setAlert: PropTypes.func.isRequired,
     }
     onChange=(e)=>this.setState({[e.target.name]:e.target.value});

     onSubmit=(e)=>{
         e.preventDefault();
         if(this.state.text===''){
             this.props.setAlert('Please enter something');
         }
         else{
        this.props.searchUsers(this.state.text);
         this.setState({text:''})
         }
        

     }
     render(){
         const {showClear, clearUsers}=this.props;
      return (
        <div className="section">
           
           <form onSubmit={this.onSubmit} className="col s12">
              <div className="row">
                  <div className="input-field col s12">
                      <input type="text" name="text" placeholder="Please enter any Github username..." value={this.state.text} onChange={this.onChange}/>
                      
                      <button style={userStyle} className="btn teal lighten-2" type="submit">Search</button>
                     
                  </div>
              </div>
       
      
          </form>
          {showClear && ( <button style={userStyle} className="btn grey darken-2" onClick={clearUsers}>Clear</button>)}
           
       </div>
    )
}}

const userStyle = {
  display: 'block',
  width: '100%'
};

export default Search;
