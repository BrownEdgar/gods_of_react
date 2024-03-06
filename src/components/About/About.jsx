import { useState } from 'react'
import Image from '../../assets/photo.jpg'
import './About.css'

export default function About({ title }) {

  return (
    <div className='About'>
      <h1 className='About__title'>{title}</h1>
      <div className='About__content'>
        <img src={Image} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In inventore voluptates eius. Non consectetur velit, molestias nemo ducimus dolor! Suscipit, optio eos. Blanditiis accusantium sapiente aliquid cupiditate quam officia. Consequatur ab necessitatibus vero officia quos magnam dolore itaque iusto? Amet commodi esse ut vel ipsa maiores quae dignissimos. Quidem incidunt quis quia quos eligendi voluptate. Eum sequi qui quidem neque!</p>
      </div>
    </div>
  )
}
