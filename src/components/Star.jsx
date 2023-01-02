import {FaStar,FaStarHalfAlt} from 'react-icons/fa'
import {AiOutlineStar} from 'react-icons/ai'
import React from 'react'

function Star({star}) {
    const {rate,count} = star

    const ratingStar = Array.from({length:5},(elem,index)=>{
      let numbers = index + 0.5

      return(
        <span key={index}>
          {
             rate >= index + 1?(<FaStar className='icon' />):rate >= numbers? (<FaStarHalfAlt className='icon'/>): (<AiOutlineStar className='icon'/>)
          }
        </span>
      )
    })

    return (
      <div>
          <div className="">
              <span style={{color:'green'}}>{ratingStar}</span> <span>({count} customer reviews)</span>
          </div>
      </div>
    )
}

export default Star
