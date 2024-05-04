import { Component } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import Photo from "./Photo";
import Comments from "./Comments";

class Single extends Component{
    render(){
        const {match , posts} = this.props
       const id = match.params.id
       const post = posts.find((p)=> p.id === id) 
       const comment = this.props.comment[id] || []
       const index = posts ? posts.findIndex((post) => post.id === id) : -1;
    //    console.log(post)
       
        return(
            <>
            <Link style={{ color: 'black' }} className="link" to={'/'}><Title title={'Photowall'}/></Link>

            <div className="single-photo">
            <Photo post={post} {...this.props} index={index}/>
            <Comments addComment={this.props.addComment} comments={comment} id={id}/>
            </div>
            </>
        )
    }
}

export default Single