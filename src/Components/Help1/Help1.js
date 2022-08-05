//import React from "react"
import "./Help1.css"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import Download from "../HomeSection/Download/Download"
import { Timeline } from "../timeline/timeline.jsx"
import Blog from "../Blog/Blog"
import { useLocation, Link } from "react-router-dom"


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


const Help1 = () => {
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
      {/*<HeadTitle />*/}


      <section className='about1 top1'>
        <div className='container1'>
        {/*  <AboutCard />*/}
        </div>
        <h5>
              Volunteer as a Digital Navigator {/*<span>Story</span>*/}
      </h5>
    
      
      <p>

      If you are interested in being a Digital Navigator, please contact our grantee and partner organizations for any volunteer opportunities!
      </p>

      <Link to='/blog' className='primary-btn lib'>
            <i className='fas fa-long-arrow-alt-left'></i> Go Back
            </Link>

            <br></br>  

      </section>


      <section className='features1 top1'>
      



        <div className='container1 aboutCard1 flex_space1'>

            <div className='row row1'>

            <p>


            San José Public Library
            https://www.sjpl.org/volunteer-how-to
            <br></br>            <br></br>


            Catholic Charities of Santa Clara County
            https://www.catholiccharitiesscc.org/volunteer?locale=en
            <br></br>            <br></br>


            Closing the Divide
            https://closingthedivide.foundation/volunteer

            <br></br>            <br></br>


            International Children Assistance Network, Inc. (ICAN)
            https://www.ican2.org/volunteer-career-opportunities

            <br></br>            <br></br>


            International Rescue Committee, Inc. (IRC)
            https://www.rescue.org/volunteer

            <br></br>            <br></br>


            Sacred Heart Community Service
            https://www.sacredheartcs.org/volunteer

            <br></br>            <br></br>


            Silicon Valley Education Foundation (SVCF)
            https://www.svefoundation.org/about

            <br></br>           


            Sourcewise
            https://mysourcewise.com/support-sourcewise/volunteer/
            <br></br>            <br></br>


            Step Up & Do Something
            https://www.stepupanddosomething.org/volunteers.html
            <br></br>   <br></br>

            Tech Exchange (The Oakland Public Education Fund)
            https://www.oaklandedfund.org/programs/volunteer/
            <br></br>            <br></br>


            The Vietnamese Voluntary Foundation, Inc. (VIVO)
            https://www.vivousa.org/contact </p>

            <p>Click below to learn more about what a digital navigator is!</p> <br></br><br></br>
            <a href="https://www.digitalinclusion.org/digital-navigator-model/#:~:text=Who%20Are%20Digital%20Navigators%3F,community%20members%20through%20repeated%20interactions" target="_blank" className="primary-btn lib" >Click here</a>
    
            <br></br>
            <br></br>
            <p>OTHER <br></br>
                For all other inquiries, please contact our Program Director, Charlene Tatis, at info@sjdigitalinclusion.org.</p>

            {/*<button className='secondary-btn'>
              Explore More <i className='fas fa-long-arrow-alt-right'></i>
            </button>*}
          </div>

          <div className='row image'>
           {/* <img src='/images/dif.png' alt='' />*/}


          </div>


        </div>

      </section>


    </>
  )
}

export default Help1
