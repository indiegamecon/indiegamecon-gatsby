import React, { Component } from 'react'
import { Transition, animated } from 'react-spring'

class ReactSpringTest extends Component {
  state = {
    toggle: true,
  }

  handleToggle = () => {
    this.setState(prevState => ({
      toggle: !prevState.toggle,
    }))
  }

  render() {
    return (
      <div>
        <button onClick={this.handleToggle}>test</button>
        <Transition
          items={this.state.toggle}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {toggle =>
            toggle && (styles => <animated.div style={styles} >Stuff</animated.div>)
          }
        </Transition>
      </div>
    )
  }
}

export default ReactSpringTest
