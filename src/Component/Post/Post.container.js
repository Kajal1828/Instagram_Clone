import React, { PureComponent } from "react";
import PostComponents from "./Post.components";

export default class PostContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      id:this.props.id,
      userName:this.props.userName,
      postImage:this.props.postImage,
      likes:this.props.likes,
      comments: this.props.comments,
       newComment: "",
       editingCommentId: null,
    };
  }
  
  handleEditComment = (id) => {
    this.setState({ editingCommentId: id });
  };

  handleDeleteComment = (id) => {
    const updatedComments = this.state.comments.filter(
      (comment) => comment.id !== id
    );
    this.setState({ comments: updatedComments });
  };

  handleCommentData = (e) => {
    this.setState(
      {
        commentdesc: {
          username: "kajal sah",
          description: e.target.value,
        },
      },
      () => {
        this.handleCommentPost();
      }
    );
  };
  handleCommentPost = (id) => {
    this.setState({
      comments : [...this.state.newComment, this.state.commentdesc],
    });
  };
  postComments = (id) => {
    const data ={
      id:this.state.id,
      userName:this.state.userName,
      postImageURL:this.state.postImage,
      likes:this.state.likes,
      comments:this.state.comments ,
    }
    fetch("http://localhost:3000/post/" + id, {
      method: "put",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .catch((error) => console.log(error.message));
  };
  render() {
    const { id, userName, postImage, likes } = this.props;
    const { comments, newComment, editingCommentId } = this.state
    
    return (
      <div>
        <PostComponents
           id={id}
           userName={userName}
           postImage={postImage}
           likes={likes}
           comments={comments}
           editingCommentId={editingCommentId}
           handleCommentData={this.handleCommentData}
           postComments={this.postComments}
           handleEditComment={this.handleEditComment}
           handleSaveComment={this.handleSaveComment}
           handleDeleteComment={this.handleDeleteComment}
         />
      </div>
    );
  }
}
