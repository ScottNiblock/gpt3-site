import React from 'react'
import './features.css'
import { Feature } from '../../components'

const featuresData = [
  {title: "Improving Constantly",
    text:"GPT-3 improves continuously through regular model updates with new data, fine-tuning with human feedback, and algorithmic advancements. Reinforcement learning from human feedback (RLHF) and active user feedback loops further enhance its performance. Ethical considerations and collaborative research ensure ongoing refinement and safety."
},
{title:"Algorithmic Improvements",
  text: "Improvements in the underlying neural network architectures and algorithms can lead to better performance, such as more efficient training methods and advanced optimization techniques."
},
{
  title:"Regular Model Updates",
  text:"GPT-3  regularly retrains the model on new and diverse datasets, ensuring it stays updated with the latest information and trends."
},
{
  title: "Community and User Feedback",
  text: "Feedback from the user community helps identify areas of improvement and new features that could be beneficial."
}
]
const Features = () => {
  return (
    <div  className='gpt3__features section__padding' id='features' >
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step Into the Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((feature,index)=>{
          return(
            <Feature key={feature.title + index} title={feature.title} text={feature.text}/>
          )
        })}

      </div>
    </div>
  )
}

export default Features
