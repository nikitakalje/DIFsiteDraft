import React from "react"
import { Link } from "react-router-dom"

const BlogCard = ({ item: { id, newPage, cover, title, desc, para, catgeory, date } }) => {
  return (
    <>
      <div className='items'>
        <div className='img'>
          <img src={cover} alt='Gallery Image' />
        </div>

        <div className='category flex_space'>
         {/* <span>{date}</span>*/}
          <label>{catgeory}</label>
        </div>

        <div className='details'>
          <h3>{title}</h3>
          {/*<p>{para}</p>*/}
        </div>

        {/*<Link to={`/blogsingle/${id}`} className='blogItem-link'>*/}
        {/*<Link to={`/${newPage}/${id}`} className='blogItem-link'>*/}
        <Link to={`/${newPage}`} className='blogItem-link'>
          LEARN MORE <i className='fa fa-long-arrow-right'></i>
        </Link>



      </div>
    </>
  )
}

export default BlogCard
