import React, { PureComponent } from 'react'
import "./MainPage.scss"
import PostContainer from '../Post'

export default class MainPageComponents extends PureComponent {
  render() {
    const{postArray} = this.props
    return (
        <div>
        <div>{
                 postArray.map((item,index)=>(
                     <PostContainer key={index} 
                     id={item.postId} 
                     userName={item.username} 
                     postImage={item.postImageURL} 
                     likes={item.likes} />
                 ))
             }
        </div>

   </div>
    )
  }
}
