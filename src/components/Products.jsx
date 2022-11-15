import React from 'react'
import { popularProducts } from '../data'

import styled from 'styled-components'
import Product from './Product'
const Container = styled.div`
padding:0 20px;
display:flex;
flex-wrap:wrap;
justify-content: space-evenly;
`

const Products = () => {
  return (
    <Container>
        {popularProducts.map((item) => (
            <Product item={item}  key={item.id} />
        ))}
    </Container>
  )
}

export default Products