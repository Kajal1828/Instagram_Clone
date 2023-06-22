import React, { PureComponent } from 'react'
import ToastComponent from './Toast.components'

export class ToastContainer extends PureComponent {
  render() {
    return (
      <div>
        <ToastComponent /> 
      </div>
    )
  }
}

export default ToastContainer