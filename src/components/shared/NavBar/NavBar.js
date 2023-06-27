/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prefer-stateless-function */
import './NavBar.scss'
import React from 'react'
import { Button, Header, Heading, Words, Link as Link2 } from 'arwes'
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
          <Heading style={{ margin: 'auto' }}>
            <div className="Socials">
              <Link2 href="mailto:contact@iiarcades.com">
                <i className="fa-solid fa-square-envelope fa-fw"></i>
              </Link2>
              <Link2 href="https://twitter.com/IIArcades">
                <i className="fa-brands fa-square-twitter fa-fw"></i>
              </Link2>
              <Link2 href="https://instagram.com/IIArcades">
                <i className="fa-brands fa-square-instagram fa-fw"></i>
              </Link2>
              <Link2 href="https://www.facebook.com/people/Infinite-Immersion-Arcades/100093241084884/">
                <i className="fa-brands fa-square-facebook fa-fw"></i>
              </Link2>
              <Link2 href="https://linkedin.com/company/IIArcades">
                <i className="fa-brands fa-linkedin fa-fw"></i>
              </Link2>
            </div>
          </Heading>
          <button
            className="navbar-toggler navbar-custom"
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
            className="collapse navbar-collapse justify-content-end"
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
