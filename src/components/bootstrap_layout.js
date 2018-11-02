import React from 'react'
import PropTypes from 'prop-types'

//import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import '../scss/layout.scss'


const ContainerBS = ({ children }) => (
  <div className="container">
    <div className="row">
      {children}
    </div>
  </div>
)

const ContainerNoRowBS = ({ children }) => (
  <div className="container">
    {children}
  </div>
)

const RowBS = ({ children }) => (
  <div className="row">
    {children}
  </div>
)

const RowCenterBS = ({ children }) => (
  <div className="row justify-content-center">
    {children}
  </div>
)

ContainerBS.propTypes = {
  children: PropTypes.node.isRequired,
}

RowBS.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ContainerBS, RowBS, ContainerNoRowBS, RowCenterBS }