import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

const Useritem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='card-panel center-align section z-depth-2'>
      
      <img
        src={avatar_url}
        alt=''
        className='responsive-img circle'
        style={{ width: '80px' }}
      />
     <h5>{login}</h5>
      <div>
        <Link to={`/user/${login}`} className='btn'>
          More
        </Link>
      </div>
    </div>
  );
};
Useritem.propTypes = {
  user: PropTypes.object.isRequired,
};
export default Useritem;
