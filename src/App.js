import React, {Component} from 'react'
import axios from 'axios'
class App extends Component {
  state = {
    quote: ''
  }
  componentDidMount =() => {
    axios.get('https://api.chucknorris.io/jokes/random')
      .then(res => {
        console.log('response', res.data.value)
        this.setState({
          quote: res.data.value
        })
      })
  }
  getNewFact = () => {
    axios.get('https://api.chucknorris.io/jokes/random')
      .then(res => {
        console.log('response', res.data.value)
        this.setState({
        quote: res.data.value
      })
    })
  }
  render () {
    return(
      <div className="container left-align">
      <h1>Chuck Norris Facts</h1>
      <p className="output">{this.state.quote}</p>
    <button onClick={ this.getNewFact}>CHUCK STUFF</button>
    </div>
    )
  }
}
export default App