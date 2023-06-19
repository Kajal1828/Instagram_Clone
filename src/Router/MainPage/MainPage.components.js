import React, { PureComponent } from 'react'
import "./MainPage.scss"
import PostContainer from '../../Component/Post/Post.container'

export default class MainPageComponents extends PureComponent {
  render() {
    const{postArray} = this.props
    return (
        <div>
        <div>{
                 postArray.map((item,index)=>(
                     <PostContainer key={index} 
                     id={item.id} 
                     userName={item.username} 
                     postImage={item.postImageURL} 
                     likes={item.likes}
                     postArray={postArray} 
                     comments={item.comments}/>
                 ))
             }
        </div>

   </div>
    )
  }
}
