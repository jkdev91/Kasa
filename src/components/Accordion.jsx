
import { useState } from 'react';

const Accordion = ({title, content}) => {

    const [toggle , setToggle]= useState(false)

    return (
        <>
            <div className="accordion-item">
                <h3 className="accordion-title" onClick={() =>setToggle(!toggle)}>
                    {title}
                    <img 
                        className= {toggle ? 'arrow arrow-up' : 'arrow arrow-down'} 
                        src= '..\arrow_up.png'
                        alt="arrow to show content" 
                    />
                </h3>
                <div className= {toggle ? 'accordion-content' : 'accordion-content_hidden'}>
                    {Array.isArray(content) ? content.map((item, index) => {
                        return (
                            <p key= {index}>{item}</p>
                        )

                    }) : content  
                    }

                </div>
            </div>


        </>
    )
  }
    
  export default Accordion


  