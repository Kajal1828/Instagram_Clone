import React, { PureComponent } from 'react'
import Avtar from '../Images/Avtar.jpg'
import Heart from '../Images/heart.png'
import Comment from '../Images/comment.png'
import Share from '../Images/share.png'
import Edit from '../Images/editbtn.svg'
import Delete from '../Images/deletebtn.svg'
import "./Post.scss"

export default class PostComponents extends PureComponent {
  render() {
    const {comments,id,postComments,handleCommentData,postImage} = this.props
    const commentData = comments;
    console.log(commentData)

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
        <div style={{ "fontWeight":"bold","marginLeft":"20px"}} className='like'>
                  {this.props.likes} likes     
        </div>
        <div>
          <div>
        {
          commentData.map((item,index)=>(
         <div className="post_comment" key={index}>
          <b>{item.username}</b>: {item.description}
          {item.id === this.props.editingCommentId && (
            <div>
            <button onClick={() => this.props.handleEditComment(null)}>Cancel</button>
            <button onClick={() => this.props.handleSaveComment(item.id)}>Save</button>
          </div>
          )}
          {item.id !== this.props.editingCommentId && (
            <div>
              <button onClick={() => this.props.handleEditComment(item.id)} className='btnicon'><img src={Edit} alt=''/></button>
              <button onClick={() => this.props.handleDeleteComment(item.id)} className='btnicon'><img src={Delete} alt=''/></button>
            </div>
          )}
        </div>
      ))
    }
        </div>
        <div className='commentData'>
        <input text="text" className="post__commentbox" placeholder="Add a comment..." id={id} onChange={handleCommentData} />
        <button className="post__commentboxBtn" onClick={()=>postComments(id)}>Post</button> 
        </div>
      
        </div>
      </div>
    )
  }
}
