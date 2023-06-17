import React, { PureComponent } from 'react'
import "./MainContent.scss"
import InfoSectionContainer from '../InfoSection'
import MainPageContainer from '../MainPage'
import SideNavbarContainer from '../../Component/SideNavbar'
import StatusbarContainer from '../StatusBar'
import SuggestionsContainer from '../Suggestions/Suggestions.container'

export default class MainContentComponents extends PureComponent {
  render() {
    const {popup , handlePopup, handleUpload,upload} =this.props
    return (
        <div>
            <div>
            <div className={popup?"popup":"hidden onClick={}"}>
              <div className="popup-header">
                <h1>Create new post</h1>
                <h1 onClick={handlePopup}>X</h1>
              </div>
              <div>
                  <p>Drag photos here</p>
                  <input type="file"  onChange={handleUpload}/>
                 <h3>Caption</h3>
                <input type='text'  placeholder='Write a caption...'/>
                 <div>
                  <button className='btn' onClick={upload}>Next</button>
                 </div>
                  
              </div>

            </div>
          </div>
        <div className='container'>
        <div className='column column-2'>
          <SideNavbarContainer
            handlePopup={handlePopup}
        /></div>
        <div className='maincontent_container column column-6'>
          <div>
           <StatusbarContainer/>
           <MainPageContainer
            popup={popup}
            handlePopup={handlePopup}
            />
          </div>
        </div>
        <div className='column column-2'>
          <InfoSectionContainer/>
          <SuggestionsContainer/>
        </div>
        <div className='column column-2'></div>

        </div>

      </div>
    )
  }
}
