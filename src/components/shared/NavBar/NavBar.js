/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prefer-stateless-function */
import './NavBar.scss'
import React, { useState } from 'react'
import { Button, Header, Heading, Row, Words } from 'arwes'
import { Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

function NavBar(props) {
  const location = useLocation()
  const { setShowPage, sounds, anim } = props
  const showPage = location.pathname.replace('/', '')

  return (
    <div className="NavBar">
      <Header
        animate
        show={anim.entered}
        style={{ backgroundColor: 'rgba(0,0,0,.5)' }}
      >
        <nav className="navbar">
          <Heading style={{ margin: 'auto 0' }}>
            <Words class="menuTitle">IIA</Words>
          </Heading>
          <Row className="row wrap mr-1" id="navLinks" col s={12}>
            <Link to="/">
              <Button
                className="navToButton"
                animate
                disabled={!showPage}
                show={anim.entered}
                layer="primary"
                onClick={() => setShowPage('home')}
                onMouseEnter={() => sounds.hover.play()}
              >
                <Words className="navToText">
                  <i className="fab fa-fort-awesome"></i> Home
                </Words>
              </Button>
            </Link>
            <Link to="/plan">
              <Button
                className="navToButton"
                animate
                layer="primary"
                disabled={showPage === 'plan'}
                show={anim.entered}
                onClick={() => setShowPage('plan')}
                onMouseEnter={() => sounds.hover.play()}
              >
                <Words className="navToText">
                  {' '}
                  <i className="fas fa-rocket"></i> The Plan
                </Words>
              </Button>
            </Link>
            {/* <Link to="/industry">
              <Button
                className="navToButton"
                animate
                layer="primary"
                disabled={showPage === 'industry'}
                show={anim.entered}
                onClick={() => setShowPage('industry')}
                onMouseEnter={() => sounds.hover.play()}
              >
                <Words className="navToText">
                  <i className="fas fa-chart-line"></i> Industry
                </Words>
              </Button>
            </Link> */}
          </Row>
        </nav>
      </Header>
    </div>
  )
}

NavBar.propTypes = {
  setShowPage: PropTypes.func.isRequired,
  sounds: PropTypes.any.isRequired,
  anim: PropTypes.any.isRequired,
}

export default NavBar
