/* eslint-disable react/prefer-stateless-function */
import './Industry.scss'
import React from 'react'
import { Frame, Heading, Words, List, Line, Code } from 'arwes'

function Industry(props) {
  return (
    <div className="Industry">
      <div className="IndustryBox">
        <div className="IndustryContents">
          <Heading node="h1">
            <div className="h1" style={{ textAlign: 'center' }}>
              <Frame
                animate
                level={1}
                corners={3}
                layer="header"
                show={props.anim.entered}
              >
                <div className="titleText">
                  <Words animate show={props.anim.entered}>
                    Why Us?
                  </Words>
                </div>
              </Frame>
            </div>
          </Heading>
          <div className="arwes-framed-text">
            <Frame
              animate
              level={1}
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
                  The multi-experience VR arcade presents a lucrative business
                  opportunity within the growing VR industry. By providing a
                  diverse range of immersive experiences, exceptional customer
                  service, and leveraging the EVA franchising model, the
                  business aims to attract and retain customers while capturing
                  a significant market share. The increasing adoption of VR
                  technology and the rising demand for immersive entertainment
                  make these businesses a promising venture in a rapidly
                  expanding industry.
                </Words>
              </p>
            </Frame>
          </div>
          <Line animate />
          <Heading node="h1">
            <div className="h1" style={{ textAlign: 'center' }}>
              <Frame
                animate
                level={1}
                corners={3}
                layer="header"
                show={props.anim.entered}
              >
                <div className="titleText">
                  <Words animate show={props.anim.entered}>
                    Industry Overview
                  </Words>
                </div>
              </Frame>
            </div>
          </Heading>
          <div className="arwes-framed-text">
            <Frame
              animate
              level={1}
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
                  The VR industry is experiencing significant growth and
                  presents compelling opportunity for businesses. Virtual
                  reality has gained popularity across various sectors,
                  including gaming, entertainment, training, and education.
                  According to market research, the global virtual reality
                  market was valued at $15.81 billion in 2020 and is projected
                  to reach $62.1 billion by 2027, growing at a CAGR of 21.6%
                  from 2021 to 2027. The increasing adoption of VR technology,
                  advancements in VR hardware and software, and rising consumer
                  interest in immersive experiences are key drivers of this
                  growth. Additionally, VR arcades provide a unique opportunity
                  for people to access high-end VR equipment and experiences
                  that may not be readily available at home.
                </Words>
              </p>
            </Frame>
          </div>
          <Line animate />
          <Heading node="h1">
            <div className="h1" style={{ textAlign: 'center' }}>
              <Frame
                animate
                level={1}
                corners={3}
                layer="header"
                show={props.anim.entered}
              >
                <div className="titleText">
                  <Words animate show={props.anim.entered}>
                    Analysis
                  </Words>
                </div>
              </Frame>
            </div>
          </Heading>
          <div className="arwes-framed-text">
            <Frame
              animate
              level={1}
              corners={3}
              layer="header"
              show={props.anim.entered}
            >
              <Words style={{ padding: '20px' }}>
                The target market for the multi-experience VR arcade includes
                both gamers and non-gamers who are interested in immersive
                experiences. This includes individuals, groups, corporate teams,
                and event organizers looking for unique and exciting
                entertainment and educational options.
              </Words>
              <Line animate />
              <Words style={{ padding: '20px' }}>
                <h3 style={{ textDecoration: 'underline double' }}>
                  Competitive Analysis:
                </h3>
                <br></br>
                <p>
                  The VR arcade industry has witnessed significant growth and
                  popularity in recent years. The increasing accessibility and
                  affordability of VR technology have fueled the demand for
                  immersive gaming experiences. Customers are seeking unique and
                  immersive experiences beyond what is available at home.
                  However, the industry is still evolving, and the market is
                  highly competitive.
                </p>
              </Words>
              <br></br>
              <Words style={{ padding: '20px' }}>
                <h3 style={{ textDecoration: 'underline double' }}>
                  Our key competitors include:
                </h3>
              </Words>
              <br></br>
              <Words style={{ padding: '20px' }}>
                <List node="dl">
                  <li>
                    <p style={{ textDecoration: 'underline' }}>The VOID:</p>
                    The VOID is a well-known VR arcade chain that offers
                    high-quality immersive experiences. They have successfully
                    implemented large-scale free-roam setups, such as "Star
                    Wars: Secrets of the Empire" and "Ghostbusters: Dimension."
                    The VOID has gained recognition through partnerships with
                    major entertainment franchises, which has attracted a
                    substantial customer base.
                  </li>
                </List>
              </Words>
              <Words style={{ padding: '20px' }}>
                <List node="dl">
                  <li>
                    <p style={{ textDecoration: 'underline' }}>Zero Latency:</p>
                    Zero Latency is another prominent player in the VR arcade
                    market. They specialize in providing free-roam VR
                    experiences in various genres, including action, horror, and
                    sci-fi. Zero Latency's key differentiator is their
                    proprietary technology, which enables accurate tracking and
                    precise motion capture.
                  </li>
                </List>
              </Words>
              <Words style={{ padding: '20px' }}>
                <List node="dl">
                  <li>
                    <p style={{ textDecoration: 'underline' }}>
                      Dreamscape Immersive:
                    </p>
                    Dreamscape Immersive focuses on delivering high-quality VR
                    experiences with a cinematic touch. They offer group
                    experiences and have partnered with major film studios to
                    create immersive experiences based on popular movie
                    franchises.
                  </li>
                </List>
              </Words>
              <Words style={{ padding: '20px' }}>
                <List node="dl">
                  <li>
                    <p style={{ textDecoration: 'underline' }}>
                      Other local and regional VR arcades:
                    </p>
                    In addition to the established chains, there are numerous
                    local and regional VR arcades operating in different
                    locations. These businesses often cater to a specific
                    demographic or offer unique themes to attract customers.
                  </li>
                </List>
              </Words>
              <Line animate />
              <Words style={{ padding: '20px' }}>
                <h3 style={{ textDecoration: 'underline double' }}>
                  Performance of Competitors:
                </h3>
              </Words>
              <Words style={{ padding: '20px' }}>
                While specific financial data may not be publicly available for
                all competitors
                <br></br> we can assess their performance based on various
                factors:
              </Words>
              <Words style={{ padding: '20px' }}>
                <List node="dl">
                  <li>
                    <p style={{ textDecoration: 'underline' }}>
                      Customer Reviews:
                    </p>
                    The VR arcade industry heavily relies on positive customer
                    feedback and reviews. Analyzing customer sentiments and
                    ratings can provide insights into the success of competing
                    businesses.
                  </li>
                </List>
              </Words>
              <Words style={{ padding: '20px' }}>
                <List node="dl">
                  <li>
                    <p style={{ textDecoration: 'underline' }}>
                      Market Presence:
                    </p>
                    The number of locations, partnerships, and collaborations a
                    competitor has can indicate their market reach and potential
                    profitability.
                  </li>
                </List>
              </Words>
              <Words style={{ padding: '20px' }}>
                <List node="dl">
                  <li>
                    <p style={{ textDecoration: 'underline' }}>
                      Repeat Business:
                    </p>
                    Evaluating the customer retention rates and loyalty programs
                    implemented by competitors can offer insights into the
                    overall satisfaction and customer engagement.
                  </li>
                </List>
              </Words>
              <Words style={{ padding: '20px' }}>
                <List node="dl">
                  <li>
                    <p style={{ textDecoration: 'underline' }}>
                      Innovation and Technology:
                    </p>
                    Examining the technological advancements and unique
                    experiences offered by competitors can shed light on their
                    ability to attract and retain customers.
                  </li>
                </List>
              </Words>
              <Line animate />
              <Words style={{ padding: '20px' }}>
                <h3 style={{ textDecoration: 'underline double' }}>
                  Opportunities and Challenges for Infinite Immersion Arcades:
                </h3>
              </Words>

              <List node="dl">
                <Words style={{ padding: '20px' }}>
                  <h4 style={{ textDecoration: 'underline double' }}>
                    Opporunities:
                  </h4>
                </Words>
                <Words style={{ padding: '20px' }}>
                  <li>
                    <p style={{ textDecoration: 'underline' }}>Unique Theme:</p>
                    Infinite Immersion Arcades' sci-fi themeing can
                    differentiate itself from competitors and attract customers
                    who are interested in futuristic experiences.
                  </li>
                </Words>
                <Words style={{ padding: '20px' }}>
                  <li>
                    <p style={{ textDecoration: 'underline' }}>
                      Large-Scale Free Roam:
                    </p>
                    The availability of spacious free-roam areas can provide
                    customers with a sense of freedom and immersion that is
                    difficult to achieve at home.
                  </li>
                </Words>
                <Words style={{ padding: '20px' }}>
                  <li>
                    <p style={{ textDecoration: 'underline' }}>
                      Additional Services:
                    </p>
                    The inclusion of a full bar and restaurant can create a
                    comprehensive entertainment experience, encouraging
                    customers to spend more time and money at the arcade.
                  </li>
                </Words>
              </List>
              <List node="dl">
                <Words style={{ padding: '20px' }}>
                  <h4 style={{ textDecoration: 'underline double' }}>
                    Challenges:
                  </h4>
                </Words>
                <Words style={{ padding: '20px' }}>
                  <li>
                    <p style={{ textDecoration: 'underline' }}>
                      Intense Competition:
                    </p>
                    The VR arcade industry is highly competitive, and Infinite
                    Immersion Arcades will need to offer compelling experiences
                    and stand out from the competition to attract a significant
                    customer base.
                  </li>
                </Words>
                <Words style={{ padding: '20px' }}>
                  <li>
                    <p style={{ textDecoration: 'underline' }}>
                      Initial Investment and Operational Costs:
                    </p>
                    Establishing a large-scale VR arcade with additional
                    services can require substantial upfront investment and
                    ongoing operational expenses. Managing costs while
                    maintaining quality will be crucial. (in Progress)
                  </li>
                </Words>
                <Words style={{ padding: '20px' }}>
                  <li>
                    <p style={{ textDecoration: 'underline' }}>
                      Market Volatility:
                    </p>
                    The VR arcade industry is still evolving, and market trends
                    can change rapidly. Keeping up with technological
                    advancements and customer preferences will be essential to
                    long-term success.
                  </li>
                </Words>
              </List>
            </Frame>
          </div>
          <br></br>
          <Heading node="h1">
            <div className="h1" style={{ textAlign: 'center' }}>
              <Frame
                animate
                level={1}
                corners={3}
                layer="header"
                show={props.anim.entered}
              >
                <div className="titleText">
                  <Words animate show={props.anim.entered}>
                    Market Conclusion:
                  </Words>
                </div>
              </Frame>
            </div>
          </Heading>
          <div className="arwes-framed-text">
            <Frame
              animate
              level={1}
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
                  Infinite Immersion Arcades enters a competitive VR arcade
                  market where major players like The VOID, Zero Latency, and
                  Dreamscape Immersive have already established a strong
                  presence. To succeed, Infinite Immersion Arcades must offer
                  unique and high-quality experiences, leverage their sci-fi
                  themeing, and provide excellent customer service. Continuous
                  innovation, effective marketing strategies, and staying ahead
                  of market trends will be vital in capturing a significant
                  share of the market and achieving long-term success in the VR
                  arcade industry.
                </Words>
              </p>
            </Frame>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Industry
