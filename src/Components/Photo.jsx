import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Photo = (props) => {
    const post = props.post;

    return (
        <figure className="figure">
            <Link to={`/singlePhoto/${props.post.id}`}>
                <img className="photo" src={post.imageLink} alt={post.description} />
            </Link>
            <figcaption>
                <p>{post.description}</p>
            </figcaption>
            <div className="btn-container">
                <button className="remove-btn" 
                        onClick={() => {
                            props.removePost(props.index); 
                            props.history.push('/');
                        }}>Remove</button>
            </div>

            <div className="btn-container">
            <button>
            <Link className='comment-btn'  to={`/singlePhoto/${props.post.id}`}>
               
                <div className='comment-count'>
                <div className='speech-bubble'></div>
                    {props.comment[post.id] ? props.comment[post.id].length : 0}
                </div>
            </Link>
            </button>
            </div>
        </figure>

    );
};

Photo.propTypes = {
    post: PropTypes.object.isRequired,
};

export default Photo;

