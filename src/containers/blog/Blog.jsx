import React from 'react'
import './blog.css'
import {Article} from '../../components'
import blog01 from '../../assets/blog01.png'
import blog02 from '../../assets/blog02.png'
import blog03 from '../../assets/blog03.png'
import blog04 from '../../assets/blog04.png'
import blog05 from '../../assets/blog05.png'
const blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A Lot is Happening, We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
        <Article imgUrl={blog01} date= 'Jun 27, 2024' title="GPT-3 and Open Ai is the future. Let's explore why that is"/>
        </div>
        <div className='gpt3__blog-container_groupB'>
        <Article imgUrl={blog02} date= 'Jun 27, 2024' title="GPT-3 and Open Ai is the future. Let's explore why that is"/>
        <Article imgUrl={blog03} date= 'Jun 27, 2024' title="GPT-3 and Open Ai is the future. Let's explore why that is"/>
        <Article imgUrl={blog04} date= 'Jun 27, 2024' title="GPT-3 and Open Ai is the future. Let's explore why that is"/>
        <Article imgUrl={blog05} date= 'Jun 27, 2024' title="GPT-3 and Open Ai is the future. Let's explore why that is"/>
        </div>
      </div>
    </div>
  )
}

export default blog
