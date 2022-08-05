import React from "react"
import Cards1 from "./Cards1"
import "./MostPopular.css"

const MostPopular = () => {
  return (
    <>
      <section className='popular top'>
        <div className='full_container'>
          <div className='heading'>
            <h1>Self Troubleshooting</h1>
            <div className='line'></div>
          </div>

          <div className='content'>
            <Cards1 />
          </div>
        </div>
      </section>
    </>
  )
}

export default MostPopular
