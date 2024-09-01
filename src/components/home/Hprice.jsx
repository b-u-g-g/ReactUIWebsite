import React from "react"
import Heading from "../common/heading/Heading"
import PriceCard from "../pricing/PriceCard"

const Hprice = () => {
  return (
    <>
      <section className='hprice padding'>
        <Heading subtitle='FEES POLICY' title='Fees for different classes' />
        <div className='price container grid'>
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Hprice
