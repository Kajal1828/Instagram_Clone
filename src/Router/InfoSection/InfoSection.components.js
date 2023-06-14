import React, { PureComponent } from 'react'
import "./InfoSection.scss";
import Avtar from '../../Component/Images/Avtar.jpg'

export default class InfoSectionComponents extends PureComponent {
  render() {
    return (
        <div>
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
