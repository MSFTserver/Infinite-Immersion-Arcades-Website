/* eslint-disable react/prefer-stateless-function */
import './Plan.scss'
import React from 'react'
import { Frame, Heading, Words, Link, Line, Code } from 'arwes'

function Plan(props) {
  return (
    <div className="Plan">
      <div className="PlanBox">
        <div className="PlanContents">
          <Heading node="h1">
            <div className="h1">
              <Frame
                animate
                level={1}
                corners={3}
                layer="primary"
                show={props.anim.entered}
              >
                <div className="titleText">Our Plan!</div>
              </Frame>
            </div>
          </Heading>
          <p>
            <Frame
              animate
              level={1}
              corners={3}
              layer="primary"
              show={props.anim.entered}
            >
              <Words
                animate
                show={props.anim.entered}
                style={{ padding: '20px' }}
              >
                Infinite Immersion Arcades multi-experience VR arcade will cater
                to the growing demand for virtual reality entertainment that
                includes people across multiple facets outside of gaming culture
                including educational tools for schools and business. It will
                feature VR free roam arenas approximately 5,600 sqft.
                (102'x55'), allowing up to 10 players to participate in
                multiplayer events. Equipped with HTC Vive Focus 3 headsets and
                VR-ready HP Omen desktops with latest hardware (4090 at time of
                writing) which also allows for wireless play with the new wifi
                capabilities which will be one of our focuses to eliminate
                backpacks and wires that can add restrictions to users and draw
                away from the immersive experience. We would also like to
                partner with ZerolatencyVR to provide a few more exclusive
                titles that work in a free roam open environment. The arcade
                will also have 400 sqft. (20'x20') briefing rooms for pre-event
                strategizing, a large viewing room for spectators approximately
                2,600 sqft. (48'x55'), and a high-end bar and restaurant
                offering a futuristic ambiance of approximately 3,400 sqft.
              </Words>
              <Words
                animate
                show={props.anim.entered}
                style={{ padding: '20px' }}
              >
                Furthermore, the establishment will include private rooms at 225
                sqft. (15'x15') with 1 VR headset, standing rooms with 3 VR
                headsets in each room at 450 sqft. (15'x30'), and party rooms
                with 5 VR Headsets each at 675 sqft. (15'x45') to accommodate
                various group sizes and preferences. In rooms with multiple
                stations each person has roughly 7 feet of space to move around
                inside. Initially these rooms will be run off of SpringboardVR
                for the wide variety and quality of games including genres like
                PvP FPS, fantasy, scifi, horror with over 400 games in the
                collection they also have nice inbuilt features on gauging time
                played per title and pricing for usage. Additionally, the VR
                racing simulator stations and the internet café with VR ready
                seated gaming desktop setups will provide diverse options for VR
                enthusiasts. With a strong focus on sci-fi cyberpunk theming,
                the arcade will provide an immersive environment that enhances
                the overall experience.
              </Words>
            </Frame>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Plan
