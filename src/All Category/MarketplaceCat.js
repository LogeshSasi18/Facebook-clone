import React from 'react'
import market from '../Img/marketplace.png'

export default function MarketplaceCat () {
  return (
    <div className='df cat-border'>
      <img className='pad-space' src={market} alt='image' width={35} height="auto"/>
      <h4 className='fs-cat'>Marketplace</h4>
    </div>
  )
}
