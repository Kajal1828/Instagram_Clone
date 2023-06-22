import React, { PureComponent } from 'react'
import SuggestionComponents from './Suggestion.components'

export default class SuggestionsContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { 
            SuggestionsList: [],
            toast:true,
         }
    }
    componentDidMount(){
        this.getSuggestions();
        setTimeout(()=>{
          this.setState({
            toast:false
          })
        },3000)
      }
      getSuggestions(){
        fetch('http://localhost:3000/suggestion')
        .then((res) => res.json())
        .then(data =>{
           console.log(data)
           this.setState({
              SuggestionsList:data
           });
        })
        .catch((error) => console.log(error));
       };
  render() {
    return (
      <div>
        <SuggestionComponents {...this.state}/>
      </div>
    )
  }
}
