import React from 'react'

import { Container, NameIngredient, QuantIngredient, } from './styles';

interface Params {
key: number;
data: {
  id: string;
  name: string;
  amount: string;
}
}

export  function Ingredients({ data, key, ...rest }: Params){
  return (
  
    <Container key={key} data={data} {...rest}>
    
      <NameIngredient>{data.name}</NameIngredient>
      <QuantIngredient>{data.amount}</QuantIngredient>
      
    </Container>
  )
}