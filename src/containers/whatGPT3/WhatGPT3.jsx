import React from 'react'
import './whatgpt3.css'
import { Feature } from '../../components'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title='What is GPT-3' text="GPT-3 is the third iteration of the Generative Pre-trained Transformer series, a family of language models that use deep learning techniques to generate human-like text. GPT-3 is known for its remarkable ability to understand and produce natural language, making it one of the most advanced AI models for language processing tasks." />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title='Chatbots' text="A chatbot is an AI-driven conversational agent that uses the GPT model to engage in natural and meaningful dialogues with users. These chatbots can understand and generate human-like text, making interactions feel more intuitive and human."/>
        <Feature  title="Knowledgebase" text="A GPT-3 knowledge base is an AI-driven system that stores, retrieves, and provides information in a conversational manner. Unlike traditional knowledge bases, which require users to search and navigate through static content, a GPT-3 knowledge base interacts with users in natural language, offering dynamic and personalized responses."/>
        <Feature title="Education" text="GPT-3 has significant potential in the field of education, offering a wide range of applications that can enhance learning experiences, streamline educational processes, and provide personalized support to students and educators."/>
      </div>
    </div>
  )
}

export default WhatGPT3
