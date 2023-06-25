import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
  ThemeProvider,
  createTheme,
  Arwes,
  Puffs,
  SoundsProvider,
  createSounds,
  Link,
  Footer,
  withSounds,
} from 'arwes'
import './App.scss'

import NavBar from '../components/shared/NavBar/NavBar'
import HomePage from '../components/pages/HomePage/HomePage'
import Plan from '../components/pages/Plan/Plan'
import Industry from '../components/pages/Industry/Industry'
import background from '../helpers/assets/images/background.jpg'
import glow from '../helpers/assets/images/glow.png'
import theme from '../helpers/Theme'
import mySounds from '../helpers/Sounds'

function App() {
  const resources = {
    bg: background,
    pattern: glow,
  }

  const [state, setState] = useState({
    showPage: 'home',
  })

  const setShowPage = (page) => {
    setState((prev) => ({
      ...prev,
      showPage: page,
    }))
  }

  const createdTheme = createTheme(theme)
  const createdSounds = createSounds(mySounds)
  const MyNav = withSounds()((props) => <NavBar {...props} />)
  return (
    <ThemeProvider theme={createdTheme}>
      <SoundsProvider sounds={createdSounds}>
        <Arwes
          resources={resources}
          animate
          show
          background={{
            small: background,
            medium: background,
            large: background,
            xlarge: background,
          }}
          pattern={glow}
        >
          {(anim) => (
            <div className="App">
              <Router>
                <MyNav anim={anim} setShowPage={setShowPage} state={state} />
                <Puffs>
                  <Routes>
                    <Route path="/" element={<HomePage anim={anim} />} />
                    <Route path="/plan" element={<Plan anim={anim} />} />
                    <Route
                      path="/industry"
                      element={<Industry anim={anim} />}
                    />
                  </Routes>
                </Puffs>
                <div className="footer">
                  <Footer
                    style={{ bottom: '0', width: '100vw', margin: 'auto' }}
                  >
                    <div className="footerContents">
                      <Link
                        href="htts://iiarcades.com"
                        alt="Infinite Immersion Arcades"
                      >
                        - 2023 -
                      </Link>
                    </div>
                  </Footer>
                </div>
              </Router>
            </div>
          )}
        </Arwes>
      </SoundsProvider>
    </ThemeProvider>
  )
}

export default App
