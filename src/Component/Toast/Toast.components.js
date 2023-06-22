import React, { PureComponent } from 'react';
import "./Toast.scss";

export class ToastComponent extends PureComponent {
  render() {
    return (
      <div>
        <div className='toastify'>Login Successfully </div>
      </div>
    )
  }
}

export default ToastComponent