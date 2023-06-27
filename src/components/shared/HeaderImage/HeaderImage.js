/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import { Heading, Image } from 'arwes'

function HeaderImage(props) {
  return (
    <Heading node="h1">
      <Image animate resources="/logo-2.gif">
        <div className="h5"> The Next Step in Virtual Reality Arcades! </div>
      </Image>
    </Heading>
  )
}

export default HeaderImage
