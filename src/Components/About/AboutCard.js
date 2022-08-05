import React from "react"
import "./About.css"

const AboutCard = () => {
  return (
    <>
      <div className='aboutCard mtop flex_space background-color: blue'>
        <div className='row row1'>
         {/* <h4>About Us</h4>*/}
          <h1>
             <span> Digital Inclusion <br></br>Lives Here </span> 
          </h1>
          <p>Ensuring all San Joseans have access to  devices, access, and literacy.</p>
         {/* <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
          <button className='secondary-btn'>
            Explore More <i className='fas fa-long-arrow-alt-right'></i>
          </button>*/}
        </div>
        <div className='row image'>
         {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/sN1S--keOXU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>*/}
          <img src='/images/about.png' alt='' />
         {/* <div className='control-btn'>
            <button className='prev'>
              <i className='fas fa-play'></i>

            </button>

              
          </div>*/}
        </div>
        
      </div>
      <div className='row image'>
      {/*<iframe width="560" height="315" src="https://www.youtube.com/embed/sN1S--keOXU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>*/}
      </div>
    </>
  )
}

export default AboutCard
