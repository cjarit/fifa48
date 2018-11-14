import React, { Component } from 'react'

export default class LoadingScreen extends Component {
  state = {
    loading: true,
  }
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1500)
  }

  render() {
    return (
      <div
        className={
          this.state.loading ? 'loading-grid-row' : 'loading-grid-row hide'
        }
      >
        <div className="loading-col">
          <ul className="loading">
            <li />
            <li />
            <li />
          </ul>
        </div>
      </div>
    )
  }
}
