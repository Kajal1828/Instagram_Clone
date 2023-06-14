import React, { PureComponent } from 'react'
import "./MainContent.scss"
import InfoSectionContainer from '../InfoSection'
import MainPageContainer from '../MainPage'
import SideNavbarContainer from '../SideNavbar'
import StatusbarContainer from '../StatusBar'
import SuggestionsContainer from '../Suggestions/Suggestions.container'

export default class MainContentComponents extends PureComponent {
  render() {
    return (
        <div>
        <div className='container'>
        <div className='column column-2'><SideNavbarContainer/></div>
        <div className='maincontent_container column column-6'>
          <div>
           <StatusbarContainer/>
           <MainPageContainer/>
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
