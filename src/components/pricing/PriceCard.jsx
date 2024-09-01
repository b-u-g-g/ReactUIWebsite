import React from "react"
import { price } from "../../dummydata"

const PriceCard = () => {
  return (
    <>
      {price.map((val) => (
        <div className='items shadow'>
          <h4>{val.name}</h4>
          
          <p>{val.desc}</p>
          <button className='outline-btn'>CHECK</button>
        </div>
      ))}
    </>
  )
}

export default PriceCard
