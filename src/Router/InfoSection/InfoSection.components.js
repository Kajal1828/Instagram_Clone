import React, { PureComponent } from 'react'
import "./InfoSection.scss";
import Avtar from '../../Component/Images/Avtar.jpg'
import ToastContainer from '../../Component/Toast/Toast.container';

export default class InfoSectionComponents extends PureComponent {
  render() {
    const {toast} = this.props
    return (
        <div>
           {toast && <ToastContainer />}
        <div className="info__container">
            <img src={Avtar} className="info__image" alt=''/>
            <div className="info_content">
                <div className="info_username">Kajal Sah</div>
                <div className="info_description"> 💻🙋‍♀️...Busy in Own World</div>
            </div>
        </div>
    </div>
    )
  }
}
