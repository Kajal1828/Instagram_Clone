import React, { PureComponent } from 'react'
import InfoSectionComponents from './InfoSection.components'

export default class InfoSectionContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
  render() {
    return (
      <div>
        <InfoSectionComponents/>
      </div>
    )
  }
}
