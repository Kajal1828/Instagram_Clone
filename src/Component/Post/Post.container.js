import React, { PureComponent } from 'react'
import PostComponents from './Post.components'

export default class PostContainer extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
          commentList: []
         }
    }
    componentDidMount(){
      this.getComments();
  }

  getComments=()=>{ 
    fetch('http://localhost:3000/comment')
        .then((res) => res.json())
        .then(data =>{
           console.log(data)
           this.setState({
            commentList:data
           });
        })
        .catch((error) => console.log(error));
       };
  render() {
    const {id,userName,postImage,likes} =this.props
    return (
      <div>
        <PostComponents {...this.state}
                     id={id} 
                     userName={userName} 
                     postImage={postImage} 
                     likes={likes} 
        />
      </div>
    )
  }
}
