import React from 'react'
import './brand.css'
import slack from '../../assets/slack.png'
import shopify from '../../assets/shopify.png'
import google from '../../assets/google.png'
import dropbox from '../../assets/dropbox.png'
import atlassian from '../../assets/atlassian.png'

const Brand = () => {
  return (
    <div className='gpt3__brand'>
      <div className='gpt3__brand-images'>
        <img src={google} alt='google' />
        <img src={shopify} alt='shopify' />
        <img src={slack} alt='slack' />
        <img src={dropbox} alt='dropbox' />
        <img src={atlassian} alt='atlassian' />
      </div>
    </div>
  )
}

export default Brand
