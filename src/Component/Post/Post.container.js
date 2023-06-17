

import React, { PureComponent } from 'react'
import PostComponents from './Post.components'

export default class PostContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
    }
  }


  postComments = (id) => {

    const dta = {
      comments: 
        {
          username:"kajal sah",
          description:this.state.comment
        }
      
    }
    fetch('http://localhost:3000/post/'+id, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dta),
    })
      .then((res) => console.log(res))
      .then(

      )

      .catch((error) => console.log(error.message));
  };
  render() {
    const { id, userName, postImage, likes, comments } = this.props
    // console.log(comments)
    return (
      <div>
        <PostComponents
          id={id}
          userName={userName}
          postImage={postImage}
          likes={likes}
          comments={comments}
          postComments={this.postComments}

        />
      </div>
    )
  }
}