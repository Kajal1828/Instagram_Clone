import React, { PureComponent } from 'react'
import Avtar from '../Images/Avtar.jpg'
import Heart from '../Images/heart.png'
import Comment from '../Images/comment.png'
import Share from '../Images/share.png'
import "./Post.scss"

export default class PostComponents extends PureComponent {
  render() {
    const {commentList} = this.props
    return (

        <div className='post_container'>
        <div className='post_header'>
            <img src={Avtar} alt="" className='post_image' />
            <div className='post_username'>KajalSah1828</div>
        </div>
        <div>
           <img src={this.props.postImage} alt="" className='postimg'/>
        </div>
        <div style={{"marginLeft":"10px"}}>
          <img src={Heart} className='post_reactimage' alt='' />
          <img src={Comment} className='post_reactimage' alt=''/>
          <img src={Share} className='post_reactimage' alt='' />
        </div>
        <div style={{ "fontWeight":"bold","marginLeft":"20px"}}>
                  {this.props.likes} likes     
        </div>
        <div>
        {
           commentList.map((item,index)=>(
         <div className="post_comment"><b>{item.username}</b>: {item.description}</div>
          ))
        }
        <input text="text" className="post__commentbox" placeholder="Add a comment..." />
        </div>
      </div>
    )
  }
}