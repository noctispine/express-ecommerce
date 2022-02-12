import React from 'react'
import { PlaceholderLoadingCard, ProductWrapper } from './Product.style'

const PlaceholderProduct = () => {
  return (
    <ProductWrapper>
      {' '}
      <PlaceholderLoadingCard>
        <div className="img-container">
          <div className="img" />
        </div>
        <div className="content" />
      </PlaceholderLoadingCard>
    </ProductWrapper>
  )
}

export default PlaceholderProduct
