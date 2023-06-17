import React, { PureComponent } from 'react'
import MainContentComponents from './MainContent.components'

export default class MainContentContainer extends PureComponent {
  state={
    popup:false,
    postImageURL: "",

    
  }
  handlePopup=()=>{
    this.setState((prev)=>({
        popup:!prev.popup
    }))
  }
  handleUpload=(e) =>{ 
    const img = e.target.files[0]
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = () => {
      const base64Image = reader.result;
      console.log(base64Image);
      this.setState({
        postImageURL: base64Image,
      });
    };
    
  };
  upload=()=>{
    const data ={
      username: "Kajal",
      postImageURL: this.state.postImageURL,
      }
    fetch('http://localhost:3000/post',{
      method:'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    .then((res) => {
      console.log("success",res)
      this.handlePopup();

    })
    .catch((e)=>console.log(e.message))
  }
  handle={
    handlePopup:this.handlePopup.bind(this),
    handleUpload:this.handleUpload.bind(this),
    upload:this.upload.bind(this)
    }
  render() {
    return (

      <div>
        <MainContentComponents   {...this.state}{...this.handle}/>
      </div>
    )
  }
}
