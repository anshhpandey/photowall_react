import React, { Component } from 'react'
import { Link } from 'react-router-dom'




class AddPhoto extends Component{

    constructor(){
      super()
      this.handleSubmit = this.handleSubmit.bind(this)

    }
      handleSubmit(e){
        console.log("Hello")
          e.preventDefault()
          const imageLink = e.target.elements.link.value
          const description = e.target.elements.description.value
          const post = {
            id : Number(new Date()),
            imageLink: imageLink,
            description: description
          }
          if(description && imageLink){
           this.props.addPost(post)
           this.props.history.push('/')
          }

      }
    render(){
        return (
            <>
                <h1 className='heading header'>
                  <Link className='link' style={{ color: 'black' }} to={'/'}>Photowall</Link>
                  </h1>
                <div className="form">
                <form action="" onSubmit={this.handleSubmit} >
                    <input type="text" placeholder='Link' name='link'/>
                    <input type="text" placeholder='Description' name='description' />
                    <button>Post</button>
                </form>
                </div>
            </>
          )
    }
  
}

export default AddPhoto