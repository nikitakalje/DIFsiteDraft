import React from "react"
import "../popular/MostPopular.css"
import "./Quotes.css"
import CardQuote from "./CardQuote"
import Qdata from "./Qdata"

const Works = () => {
  return (
    <>
      <section className='popular works'>
        <div className='container'>
          <div className='heading'>
            <h1>How are you affected by the Digital Divide?</h1>
            <div className='line'></div>
          </div>

          <div className='content grid'>
            {Qdata.map((value, index) => {
              return <CardQuote key={index} cover={value.cover} title={value.title} desc={value.desc} />
            })}
          </div>

        </div>
      </section>
    </>
  )
}

export default Works
