import React, { PureComponent } from 'react'
import StatusbarComponents from './Statusbar.components'

export default class StatusbarContainer extends PureComponent {
  constructor(props){
    super(props);
    this.state= {
     statusList: []
     }
}
componentDidMount(){
  this.getData();
}
getData(){
  fetch('http://localhost:3000/status')
  .then((res) => res.json())
  .then(data =>{
     console.log(data)
     this.setState({
        statusList:data
     });
  })
  .catch((error) => console.log(error));
 };

  render() {
    return (
      <div>
        <StatusbarComponents {...this.state} />
      </div>
    )
  }
}
