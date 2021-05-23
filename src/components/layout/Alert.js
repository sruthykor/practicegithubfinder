import React from 'react'
import 'materialize-css/dist/css/materialize.min.css';
 const Alert = ({msg}) => {
    return (
        msg !==null && (
            <div className="section" style={alertStyle}>
                <i className="tiny material-icons">info</i>
               {msg}
                
            </div>
        )
    )
}
const alertStyle={
     background:  '#f4f4f4',
     color: '#333',
      
}

export default Alert;