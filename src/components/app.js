import React from 'react'

import HomePage from './homepage'
import LoadingScreen from './loading_screen'

class App extends React.Component {

  state = {
    loading: true,
  }
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1500)
  }

  render() {
    const { loading } = this.state
    if (loading) {
      return <LoadingScreen/>
    }
    return <HomePage/>
  }
}

export default App
