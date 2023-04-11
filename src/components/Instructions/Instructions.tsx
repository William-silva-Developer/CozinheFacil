import React from 'react';


import { Container, TextId, TextIntructions } from './styles';

interface Params {
    key: number;
    data: {
      id: string;
      text: string;
    }
    }

export  function Instructions({ data, key, ...rest }:Params) {
  return (
    <Container key={key} data={data} {...rest}>
    
        <TextId>{data.id} - </TextId>
        <TextIntructions>{data.text}</TextIntructions>    
        
    </Container>
  )
}