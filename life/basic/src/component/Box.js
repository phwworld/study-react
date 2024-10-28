import React from 'react'

const Box = ({ title, item, custom }) => {
  console.log(title, item, custom);


  return (
    <div>
      <p>{title}</p>
      <ul>
        {item.map((item) => (
          <li >{item}</li>
        ))}
      </ul>
      <button type="button" onClick={() => custom("test")}>event</button>
    </div>
  )
}

export default Box
