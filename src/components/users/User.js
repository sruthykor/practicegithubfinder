import React, { Component, Fragment } from 'react'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css';


class User extends Component {
    componentDidMount(){
        this.props.getUser(this.props.match.params.login);

    }
    static propTypes={
        loading: PropTypes.bool.isRequired,
        user: PropTypes.bool.isRequired,
        getUser: PropTypes.func.isRequired,
    }
    render() {
        const{name,
            avatar_url,
            location,
            bio,
            blog,
            html_url,
            login,
            company,
           
            hireable}=this.props.user
        const{loading}=this.props.loading

        if(loading){
            return <Spinner/>

        }else{
             return (
            <Fragment>
               <Link to='/' style={userStyle} className="btn">Back To Search</Link>
              <span className="section"> Hireable:{' '}
               {hireable? <i className="tiny material-icons teal">check</i>: <i className="tiny material-icons red">close</i>}</span>
             
              <div className="card-panel center-align ">
                   <div className="row section">
                      <div className="col s6">
                          <img src={avatar_url} alt="" className="responsive-img circle" style={{width:'150px'}}/>
                          <h5>{name}</h5>
                           <p>Location:{location}</p>
                      </div>

                       <div className="col s6 left-align">
                           {bio && (<Fragment>
                            <h4>Bio</h4>
                           <p>{bio}</p>
                           </Fragment>)}
                           <a href={html_url} className="btn">Visit Github Profile</a>
                           <ul>
                               <li>
                           {login && <Fragment><strong>Username:</strong>{login}</Fragment>}
                               </li>
                               <li>
                           {company && <Fragment><strong>Company:</strong>{company}</Fragment>}
                               </li>
                               <li>
                           {blog && <Fragment><strong>Website:</strong>{blog}</Fragment>}
                               </li>
                               </ul>
                       </div>
                  </div>
              </div>
            </Fragment>
        )
        }
       
    }
}
const userStyle={
     background:  '#f4f4f4',
     color: '#333',
      
}

export default User







