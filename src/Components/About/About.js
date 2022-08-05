//import React from "react"
import "./About.css"
import AboutCard from "./AboutCard"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import Download from "../HomeSection/Download/Download"
import { Timeline } from "../timeline/timeline.jsx"

// // FIREBASE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { collection, query, getDocs, orderBy } from "firebase/firestore";
import React, { useEffect, useState } from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu0xgi-GhygPSLrucbbBQl8YEmyxMsugQ",
  authDomain: "dif-website-9ab34.firebaseapp.com",
  projectId: "dif-website-9ab34",
  storageBucket: "dif-website-9ab34.appspot.com",
  messagingSenderId: "592525977813",
  appId: "1:592525977813:web:cb794b6436b09acf2eda5c",
  measurementId: "G-RFEDNER72Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const About = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // This just tells react to run this code when page first loads
    apiCall();
    return () => {
      setData([]);
    };
  }, []);

  async function apiCall() {
    const querySnapshot = await getDocs(query(collection(db, "timeline"), orderBy("date", "desc")));
    querySnapshot.forEach((doc, key) => {
      console.log(doc.data())
      let document = { key: key, docID: doc.id, docData: doc.data() }; // This is custom object I created and added the data received from backend
      setData((prevState) => [...prevState, document]); // Here we append each document to an array, which is our state called "data"
    });
  }
  return (
    <>
      <HeadTitle />


      <section className='about top'>
        <div className='container'>
        {/*  <AboutCard />*/}
        </div>

      </section>

      <section className='features top'>
        <div className='container aboutCard flex_space'>
          <div className='row row1'>
            <h1>
              Who We Are: <span>Our Story</span>
            </h1>
            <p>San José is the first city in the country to pledge to close the Digital Divide by establishing the Digital Inclusion Fund, a $24 million cross-sector fund that will be distributed in grant awards over a ten-year period. The fund is raised through innovative public-private partnerships, private and public philanthropic donors, and matched City funding. </p>
            <p>The City of San José, in partnership with the City of San José Mayor’s Office of Technology and Innovation, has engaged the California Emerging Technology Fund to work with community organizations and administer grant making. The Digital Inclusion Partnership will disburse approximately $500K - 1M each year to organizations in San José who are closing the Digital Divide through expanding Internet connectivity, device access and digital literacy skills.</p>
            <p>The Partnership will target three key components of Digital Inclusion: <br></br>
Access Programs<br></br>
PROVIDING INTERNET CONNECTIVITY TO RESIDENTS<br></br>
Device Programs<br></br>
ENSURING EVERY RESIDENT HAS A WORKING DEVICE<br></br>
Digital Literacy<br></br>
ENHANCING DIGITAL SKILLS TO ACCESS JOBS, EDUCATIONAL OPPORTUNITIES, & CRITICAL SERVICES<br></br>
</p>

            <button className='secondary-btn'>
              Explore More <i className='fas fa-long-arrow-alt-right'></i>
            </button>
          </div>

          <div className='row image'>
           {/* <img src='/images/dif.png' alt='' />*/}
            <iframe width="400" height="315" src="https://www.youtube.com/embed/sN1S--keOXU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <div className='control-btn'>
              <button className='prev'>
                <i className='fas fa-play'></i>
                </button>

              
            </div>
          </div>


        </div>
       {/* <Download />*/}

      </section>
      <div className="timeline">
          Our <span>Milestones</span>
      </div>
      {/*<section>*/}
        <div className="App">
          {data && ( // This just says: if data exists, then show this code
            <>
              {data.map((item, key) => {
                return (
                  <Timeline timelineData={item.docData}/>
                  );
              })}
            </>
          )}
        </div>
     {/* </section>*/}
    </>
  )
}

export default About
