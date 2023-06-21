/* eslint-disable react/prefer-stateless-function */
import './HomePage.scss'
import React from 'react'
import { Frame, Heading, Words, Link, Line, Image } from 'arwes'

function HomePage(props) {
  return (
    <div className="HomePage">
      <div className="homePageBox">
        <div className="homePageContents">
          <Heading
            node="h1"
            style={{ margin: '0 auto', padding: 10, maxWidth: 700 }}
          >
            <Image animate resources="/logo-2.gif">
              <div className="h5">
                The Next Step in Virtual Reality Arcades!
              </div>
            </Image>
          </Heading>
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
                multi-experience VR arcade, themed around sci-fi cyberpunk
                styles, The arcade will feature various VR experiences,
                including VR free roam arenas for multiplayer events, with
                additional VR activities in private rooms, standing rooms, party
                rooms, VR racing simulators, and an internet café with VR ready
                gaming desktop setups. The arcade aims to provide an immersive
                and high-quality VR gaming experience to customers.
                Additionally, the business will leverage the EVA franchising
                model to ensure consistency and operational support across
                multiple locations. We will host regular events like PvP
                tournaments and themed gaming with experiences like zombie
                nights, military shooters, sports days, educational events and
                corporate events.
              </Words>
            </p>
          </Frame>
        </div>
      </div>
    </div>
  )
}

export default HomePage
