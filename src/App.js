import "./App.css"
import Navbar from "./Common/Navbar/Navbar"
import Home from "./Components/pages/Home"
import About from "./Components/About/About"
import Gallery from "./Components/gallery/Gallery"
//import Destinations from "./Components/Destinations/Destinations"
//import DHome from "./Components/Destinations/Home"
import Destinations from "./Components/Destinations/Home"
//import { Timeline } from './timeline/timeline.jsx'


import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SinglePage from "./SinglePage/SinglePage"

/*-------------blog------------ */
import Blog from "./Components/Blog/Blog"
import BlogSingle from "./Components/Blog/blog-single-page/BlogSingle"
import Testimonial from "./Components/Testimonial/Testimonial"
import Contact from "./Components/Contact/Contact"
import Digitalnav from "./Components/Digitalnav/Digitalnav"
import Footer from "./Common/footer/Footer"
import Login from "./Components/login/Login"
import Register from "./Components/login/Register"
import Faq from "./Components/faq/Faq"
import Help1 from "./Components/Help1/Help1"

/*-------------blog------------ */

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


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // This just tells react to run this code when page first loads
    apiCall();
    return () => {
      setData([]);
    };
  }, []);

  async function apiCall() {
    const querySnapshot = await getDocs(query(collection(db, "timeline"), orderBy("date")));
    querySnapshot.forEach((doc, key) => {
      console.log(doc.data())
      let document = { key: key, docID: doc.id, docData: doc.data() }; // This is custom object I created and added the data received from backend
      setData((prevState) => [...prevState, document]); // Here we append each document to an array, which is our state called "data"
    });
  }

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/help1' exact component={Help1} />
          <Route path='/gallery' exact component={Gallery} />
          <Route path='/destinations' exact component={Destinations} />
          <Route path='/singlepage/:id' component={SinglePage} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/blogsingle/:id' component={BlogSingle} />
          <Route path='/testimonial' component={Testimonial} />
          <Route path='/digitalnav' component={Digitalnav} />
          <Route path='/faq' component={Faq} />
          <Route path='/contact' component={Contact} />
          <Route path='/sign-in' component={Login} />
          <Route path='/Register' component={Register} />

        </Switch>
       {/* <Footer />*/}

       
      </Router>

      {/*
      <section>
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
      </section>*/}
    </>
  )
}

export default App
