import React, { PureComponent } from 'react'
import "./Suggestions.scss"
import ToastContainer from '../../Component/Toast/Toast.container'

export default class SuggestionComponents extends PureComponent {
  render() {
    const {SuggestionsList,toast} = this.props
    return (
        <div>
        <div className="suggestions__container">
            <div className="suggestions__header">
                <div>Suggestions For You</div>
            </div>
            <div className="suggestions__body">
                {
                     SuggestionsList.map((item,index)=>(
                    <div className="suggestions__friends" key={index}>
                    <img src={item.imageURL} className="suggestions__image" alt=''/>
                    <div className="suggestions__username">{item.username}</div>
                    </div>
                    ))
                }
            </div>
            {toast&&<ToastContainer/>}
        </div>
    </div>
    )
  }
}
