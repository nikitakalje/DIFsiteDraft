import React from "react"

const CardQuote = (props) => {
  return (
    <>
      <div className='box'>

        <div className='details'>
          <h2>{props.title}</h2>
            <p>{props.desc}</p>
        </div>
        <div className='img'>
          <img src={props.cover} alt='' />
        </div>
      </div>
    </>
  )
}

export default CardQuote
