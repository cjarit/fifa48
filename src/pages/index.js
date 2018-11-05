import React from 'react'

import App from '../components/app'
import Layout from '../components/layout';

import '../vendors/feather_icon/css/feather_icon.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import '../scss/layout.scss'
import '../scss/main.scss'
import '../scss/header.scss'
import '../scss/loading.scss'
import '../scss/followbox.scss'
import '../scss/intro.scss'
import '../scss/join.scss'
import '../scss/footer.scss'

const IndexPage = () => (
  <Layout>
    <App></App>
  </Layout>
)

export default IndexPage
