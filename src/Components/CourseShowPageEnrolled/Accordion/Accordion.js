import React from 'react'
import AccordionItem from './AccordionItem'

const Accordion = ({questions}) => {
  return (
    <div>
      {
        questions.map((question,index)=>(
          <AccordionItem key={index} question={question} />
        ))
      }
    </div>
  )
}

export default Accordion