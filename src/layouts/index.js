import React from 'react'
import styled from "styled-components"
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'

const children = styled("div")({
  display: "flex",
  flexdirection: "row",
});

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Flying Herring" />
    <Navbar />
    <children>{children()}</children>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
