// import React, { PureComponent } from 'react'
// import "./Navbar.scss"
// import Home from '../Images/homee.svg'
// import Messanger from '../Images/messenger.png'
// import Heart from '../Images/heart.png'
// import Create from '../Images/add-button.png'
// import Avtar from '../Images/Avtar.jpg'



// export default class NavbarComponents extends PureComponent {
//   render() {
//     return (
//         <>
//         <div>

// <nav className='navbar'>
//     <div className='navbar-logo'>
//     <img src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png" alt="" />
//     </div>
//     <div className='navbar-search'>
//         <form>
//             <input type="text" placeholder="Search"/>
//         </form>
//     </div>
//     <div className="homeIcon">
//        <img src={Home} alt="home" />
//        <img src={Messanger} alt="" />
//        <img src={Create} alt="" />
//        <img src={Heart} alt="" />
//        <img src={Avtar} alt=""  style={{"maxHeight": "28px","maxWidth": "28px" ,"border-radius" : "50%"}}/>

//     </div>
// </nav>
// </div>
//         </>
      
//     )
//   }
// }


import React, { PureComponent } from 'react'
import "./Navbar.scss"
import Heart from '../Images/heart.png'
import Create from '../Images/add-button.png'




export default class NavbarComponents extends PureComponent {
  render() {
    const{ handlePopup, onImageUpload} = this.props
    return (
      <>
        <nav className='navbar'>
            <div className='navbar-logo'>
            <img src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png" alt="" />
            </div>
            <div className='homeIcon'>               
               <img src={Create} alt=""  onClick={handlePopup}/>

            <input
             type="file"
             style={{ display: 'none' }}
             ref={(ref) => (this.uploadInput = ref)}
             onChange={onImageUpload}
           />

               
               <img src={Heart} alt="" />
            </div>            
        </nav>
      </>
    )
  }
}
