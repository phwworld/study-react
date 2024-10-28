import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  }

  return (
    <div>
      <h1>About</h1>
      <button onClick={goHome}>go home</button>
    </div>
  )
}

export default About
