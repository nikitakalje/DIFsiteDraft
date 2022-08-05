import React from "react"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import AllItem from "./AllItem"
import MostPopular from "../HomeSection/popular/MostPopular"
import Faq from '../faq/Faq';


const Destinations = () => {
  return (
    <div>
      <HeadTitle />
      <AllItem />
      <MostPopular />
     {/* <Faq />*/}
    </div>
  )
}

export default Destinations
