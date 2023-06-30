/* eslint-disable react/prefer-stateless-function */
import React, { Suspense } from 'react'
import { Frame, Heading, Words, Line, Button, Link } from 'arwes'

const HeaderImage = React.lazy(() =>
  import('../../shared/HeaderImage/HeaderImage'),
)

function HomePage(props) {
  return (
    <div className="Page">
      <div className="PageBox">
        <div className="PageContents">
          <div style={{ margin: '0 auto', padding: 20, maxWidth: 678 }}>
            <Suspense fallback={<div>loading...</div>}>
              <HeaderImage />
            </Suspense>
          </div>
          <Line animate />
          <Heading node="h1">
            <div className="h1">
              <Frame
                animate
                level={1}
                corners={3}
                layer="header"
                show={props.anim.entered}
              >
                <div className="titleText">The Idea</div>
              </Frame>
            </div>
          </Heading>
          <div className="arwes-framed-text">
            <Frame
              animate
              level={3}
              corners={3}
              layer="header"
              show={props.anim.entered}
            >
              <p>
                <Words
                  animate
                  show={props.anim.entered}
                  style={{ padding: '20px' }}
                >
                  A multi-experience VR arcade themed around sci-fi cyberpunk
                  styles. The arcade will feature various VR experiences,
                  including VR free-roam for multiplayer events, with additional
                  VR activities in private rooms, standing rooms, party rooms,
                  VR racing simulators, VR entertainment motion Simulators, 5D
                  cinema, and a cyber café with VR-ready desktop setups. The
                  arcade aims to provide customers with an immersive and
                  high-quality VR gaming experience. We will host regular events
                  like PvP tournaments and themed gaming with occasions like
                  zombie nights, military shooters, and sports days. The center
                  will also include spaces and offerings for schools to educate
                  in an immersive environment and businesses to suit corporate
                  needs, such as safety and training simulator companies and
                  what they will provide. We will use EVA and ZerolatencyVR for
                  free roam arenas, specialty and unique offerings from
                  VirtuixOmni, MajorMega, Hologate, LekeVRmetaverse, and
                  FuninVR. Standing and Escape room providers are SpringboardVR
                  and VRcave. We also include Educational tools and software
                  from Talon Simulations, InspiritVR, and ForgeFX. We will have
                  a full bar and restaurant to keep guests longer and charged
                  up.
                </Words>
              </p>
              <div className="cta-button">
                <Button animate layer="control">
                  <Link href="/plan">
                    <Words show={props.anim.entered} layer="header">
                      <h5>Read Our full Plan</h5>
                    </Words>
                    <br></br>
                    <Words show={props.anim.entered} layer="header">
                      <h5 style={{ marginBottom: 0 }}>Click Here!</h5>
                    </Words>
                  </Link>
                </Button>
              </div>
              <br></br>
            </Frame>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
