import React, { PureComponent } from 'react'
import MainPageComponents from './MainPage.components'

export default class MainPageContainer extends PureComponent {
  constructor(props){
    super(props)
    this.state={ 
      postArray:[]
    }
}
componentDidMount(){
  this.getPost();
}

getPost=()=>{
    fetch('http://localhost:3000/post')
    .then((res) => res.json())
    .then(data =>{
       console.log(data)
       this.setState({
          postArray:data
       });
    })
    .catch((error) => console.log(error));
   };

  render() {
    return (
      <div>
        <MainPageComponents {...this.state} 
       
        />
      </div>
    )
  }
}
