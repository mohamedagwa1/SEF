import React, { useState } from 'react'

import {AiOutlinePlus,AiOutlineClose} from 'react-icons/ai' 
import './AccordionStyle.css'

const AccordionItem = ({question}) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='accordion-wrapper mb-3 position-relative'>
      <div className='icons'>
        {
          isOpen ? (
            <AiOutlineClose className='close-icon icon' onClick={()=> setIsOpen(false)} />
            ) : (
            <AiOutlinePlus className='plus-icon icon' />
          )
        } 
        
        
      </div>
      <p className='question-title' onClick={()=> setIsOpen(true)}>{question.title}</p>
      <p className={`question-answer ${isOpen ? "open mt-3" : "close"}`}>{question.answer}</p>
    </div>
  )
}

export default AccordionItem