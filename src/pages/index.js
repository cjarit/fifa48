import React, { Component } from 'react'

import HomePage from '../components/homepage'
import LoadingScreen from '../components/loading_screen'

import '../vendors/feather_icon/css/feather_icon.css'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../scss/layout.scss'
import '../scss/main.scss'
import '../scss/header.scss'
import '../scss/loading.scss'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    loading: true,
  }
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 3000)
  }

  render() {
    const { loading } = this.state
    if (loading) {
      return <LoadingScreen/>
    }
    return <HomePage />
  }
}

export default IndexPage
