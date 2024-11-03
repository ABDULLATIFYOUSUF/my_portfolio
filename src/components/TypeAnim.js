import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function TypeAnim() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Web Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Front-end Developer',
        1000,
        'React.js Developer',
        1000,
        'MERN Stack Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  )
}

export default TypeAnim
