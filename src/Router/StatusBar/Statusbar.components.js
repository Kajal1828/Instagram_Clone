import React, { PureComponent } from 'react'
import "./StatusBar.scss"

export default class StatusbarComponents extends PureComponent {
  render() {
   const {statusList} = this.props
    return (
      <div>
        <div className='statusbar_container'>
          <img src="" alt="" />
             {
                statusList.map((item,index)=>(
                <div className='status' key={index}>
                   <img className='statusbar_status' src={item.imageURL} alt=''/>
                   <div className='statusbar_text'>{item.username}</div>             
                </div> 
               ))
             }
        </div>
      </div>
    )
  }
}
