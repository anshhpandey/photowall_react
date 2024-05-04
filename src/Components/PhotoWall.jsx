import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'

const PhotoWall = (props) => {
    return<>
    
    <div className="photoGrid">
    {props.posts
    .sort((x,y)=> y.id-x.id)
    .map((post,index)=> <Photo key={index} post={post} {...props} index={index}/>)}
   </div>
    </>
}

PhotoWall.PropTypes = {
    posts: PropTypes.array.isRequired,
}

export default PhotoWall