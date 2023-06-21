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
        <nav className="navbar navbar-expand-md ">
          <div className="container-fluid">
            <Heading style={{ margin: 'auto 0' }}>
              <Words class="menuTitle">IIA</Words>
            </Heading>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggler"
              aria-controls="navbarToggler"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarToggler"
            >
              <ul className="navbar-nav ml-3">
                <li className="nav-item active">
                  <Link to="/">
                    <Button
                      className="navToButton"
                      animate
                      disabled={!showPage}
                      show={anim.entered}
                      layer="header"
                      onClick={() => setShowPage('home')}
                      onMouseEnter={() => sounds.hover.play()}
                      aria-current="page"
                    >
                      <Words className="navToText">
                        <i className="fab fa-fort-awesome"></i> Home
                      </Words>
                    </Button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/plan">
                    <Button
                      className="navToButton"
                      animate
                      layer="header"
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
                </li>
                <li className="nav-item">
                  <Link to="/industry">
                    <Button
                      className="navToButton"
                      animate
                      layer="header"
                      disabled={showPage === 'industry'}
                      show={anim.entered}
                      onClick={() => setShowPage('industry')}
                      onMouseEnter={() => sounds.hover.play()}
                    >
                      <Words className="navToText">
                        <i className="fas fa-chart-line"></i> Industry
                      </Words>
                    </Button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
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
