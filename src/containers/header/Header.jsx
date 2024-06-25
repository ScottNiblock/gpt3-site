import React from 'react'
import'./header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let's Build Something Amazing With GPT-3 OpenAI</h1>
        <p>Harness the power of GPT-3, the state-of-the-art language model developed by OpenAI, to create groundbreaking applications that redefine the boundaries of artificial intelligence. With its ability to understand and generate human-like text, GPT-3 opens up a world of possibilities for developing innovative solutions across various domains.</p>

        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Enter your Email Address' />
          <button type='button'>Get Started</button>
           </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt='people'/>
          <p>1,600 people requested access in the last 24 hours.</p>
        </div>
     
      </div>
      <div className='gpt3__header-image'>
          <img src={ai} alt='ai'/>

        </div>
    
    </div>
  )
}

export default Header
