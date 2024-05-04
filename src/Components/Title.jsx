import React from 'react'
import {Link} from 'react-router-dom'
// import AddPhoto from './AddPhoto'




const Title = (props) => {
  return(
    <div className='header'>
    <h1 className='heading'>{props.title} </h1>
    <Link to='/AddPhoto' className='addIcon' onClick={props.onNavigate}>+</Link>
    </div>
    
  )
}

export default Title