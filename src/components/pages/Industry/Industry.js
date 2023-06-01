/* eslint-disable react/prefer-stateless-function */
import './Industry.scss'
import React from 'react'
import { Frame, Heading, Words, List, Line, Code } from 'arwes'

function Industry(props) {
  return (
    <div className="Industry">
      <div className="IndustryBox">
        <div className="IndustryContents">
          <Heading node="h2">
            <div className="h2" style={{ textAlign: 'center' }}>
              Why Us?
            </div>
          </Heading>
          <p>
            <Words animate show={props.anim.entered}>
              The multi-experience VR arcade presents a lucrative business
              opportunity within the growing VR industry. By providing a diverse
              range of immersive experiences, exceptional customer service, and
              leveraging the EVA franchising model, the business aims to attract
              and retain customers while capturing a significant market share.
              The increasing adoption of VR technology and the rising demand for
              immersive entertainment make these businesses a promising venture
              in a rapidly expanding industry.
            </Words>
          </p>
          <Line animate />
          <Heading node="h2">
            <div className="h2" style={{ textAlign: 'center' }}>
              Industry Overview
            </div>
          </Heading>
          <p>
            <Words animate show={props.anim.entered}>
              The VR industry is experiencing significant growth and presents
              compelling opportunity for businesses. Virtual reality has gained
              popularity across various sectors, including gaming,
              entertainment, training, and education. According to market
              research, the global virtual reality market was valued at $15.81
              billion in 2020 and is projected to reach $62.1 billion by 2027,
              growing at a CAGR of 21.6% from 2021 to 2027. The increasing
              adoption of VR technology, advancements in VR hardware and
              software, and rising consumer interest in immersive experiences
              are key drivers of this growth. Additionally, VR arcades provide a
              unique opportunity for people to access high-end VR equipment and
              experiences that may not be readily available at home.
            </Words>
          </p>
          <Line animate />
          <Heading node="h2">
            <div className="h2" style={{ textAlign: 'center' }}>
              Who are we after?
            </div>
          </Heading>
          <Words>
            The target market for the multi-experience VR arcade includes both
            gamers and non-gamers who are interested in immersive experiences.
            This includes individuals, groups, corporate teams, and event
            organizers looking for unique and exciting entertainment and
            educational options.
            <br></br>
            <br></br>
            <h5 style={{ textDecoration: 'underline double' }}>
              Competitive Analysis:
            </h5>
            <List node="ul">
              <li>
                The VR arcade industry has witnessed significant growth and
                popularity in recent years. The increasing accessibility and
                affordability of VR technology have fueled the demand for
                immersive gaming experiences. Customers are seeking unique and
                immersive experiences beyond what is available at home. However,
                the industry is still evolving, and the market is highly
                competitive.
              </li>
            </List>
            <br></br>
            <h5 style={{ textDecoration: 'underline double' }}>
              Our key competitors include:
            </h5>
          </Words>
          <List node="dl">
            <li style={{ textDecoration: 'underline' }}>The VOID:</li>
          </List>
          <List node="ul">
            <li>
              The VOID is a well-known VR arcade chain that offers high-quality
              immersive experiences. They have successfully implemented
              large-scale free-roam setups, such as "Star Wars: Secrets of the
              Empire" and "Ghostbusters: Dimension." The VOID has gained
              recognition through partnerships with major entertainment
              franchises, which has attracted a substantial customer base.
            </li>
          </List>
          <List node="dl">
            <li style={{ textDecoration: 'underline' }}>Zero Latency:</li>
          </List>
          <List node="ul">
            <li>
              Zero Latency is another prominent player in the VR arcade market.
              They specialize in providing free-roam VR experiences in various
              genres, including action, horror, and sci-fi. Zero Latency's key
              differentiator is their proprietary technology, which enables
              accurate tracking and precise motion capture.
            </li>
          </List>
          <List node="dl">
            <li style={{ textDecoration: 'underline' }}>
              Dreamscape Immersive:
            </li>
          </List>
          <List node="ul">
            <li>
              Dreamscape Immersive focuses on delivering high-quality VR
              experiences with a cinematic touch. They offer group experiences
              and have partnered with major film studios to create immersive
              experiences based on popular movie franchises.
            </li>
          </List>
          <List node="dl">
            <li style={{ textDecoration: 'underline' }}>
              Other local and regional VR arcades:
            </li>
          </List>
          <List node="ul">
            <li>
              In addition to the established chains, there are numerous local
              and regional VR arcades operating in different locations. These
              businesses often cater to a specific demographic or offer unique
              themes to attract customers.
            </li>
          </List>
          <Line animate />
          <h5 style={{ textDecoration: 'underline' }}>
            Performance of Competitors:
          </h5>
          <Words>
            While specific financial data may not be publicly available for all
            competitors
            <br></br> we can assess their performance based on various factors:
          </Words>
          <List node="dl">
            <li>Customer Reviews: </li>
          </List>
          <List node="ul">
            <li>
              The VR arcade industry heavily relies on positive customer
              feedback and reviews. Analyzing customer sentiments and ratings
              can provide insights into the success of competing businesses.
            </li>
          </List>
          <List node="dl">
            <li>Market Presence:</li>
          </List>
          <List node="ul">
            <li>
              The number of locations, partnerships, and collaborations a
              competitor has can indicate their market reach and potential
              profitability.
            </li>
          </List>
          <List node="dl">
            <li>Repeat Business:</li>
          </List>
          <List node="ul">
            <li>
              Evaluating the customer retention rates and loyalty programs
              implemented by competitors can offer insights into the overall
              satisfaction and customer engagement.
            </li>
          </List>
          <List node="dl">
            <li>Innovation and Technology:</li>
          </List>
          <List node="ul">
            <li>
              Examining the technological advancements and unique experiences
              offered by competitors can shed light on their ability to attract
              and retain customers.
            </li>
          </List>
        </div>
      </div>
    </div>
  )
}

export default Industry
