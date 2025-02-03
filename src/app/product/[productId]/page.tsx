import React from 'react'

type DetailProps = {
    productId?: string
}

const Detail = async ({params}: {params:DetailProps}) => {
     const {productId} = params
     console.log(productId, "productId")
  return (
    <div>detail</div>
  )
}

export default Detail