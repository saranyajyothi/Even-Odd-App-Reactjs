// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  isClicked = () => {
    this.setState(previousCount => ({
      count: previousCount.count + Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state
    const value = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bg-container">
        <h1>count {count}</h1>

        <p>Count is {value}</p>
        <div>
          <button className="button" type="button" onClick={this.isClicked}>
            Increment
          </button>
        </div>
        <p>*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
