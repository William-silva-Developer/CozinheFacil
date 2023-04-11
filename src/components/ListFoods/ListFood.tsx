import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import { Container, Cover, AreaInfo, Title, Ingredient } from './styles';


type Props = {
    id: string;
    name: string;
    total_ingredients: string;
    time: string;
    cover: string;
    video: string;
    ingredients?: {
      id: string;
      name: string;
      amount: string;
    
    };
    intructions?: {
      id: string;
      text: string;
    }
    
    }

interface ParamsProps  {
data: Props[] | any;
index: number;
}

export  function ListFood({ data, index, ...rest }: ParamsProps) {

const { navigate } = useNavigation();


  return (
    <Container onPress={() => navigate('Details',{data: data, index: index })} data={data} index={index} {...rest}>
        <Cover source={{uri: data.cover}} resideMode='cover' />
        
        <AreaInfo>
            <Title>{data.name}</Title>
            <Ingredient>{data.total_ingredients} ingredientes | {data.time}</Ingredient>
        </AreaInfo>
        
        <LinearGradient
          style={{
          position: 'absolute',
          flex: 1,
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          borderRadius: 8,
          backgroundColor: 'transparent',
          zIndex: 1,
          height: 200,
          
          }}
          colors={['transparent', 'rgba(0,0,0, 0.40)', 'rgba(0,0,0, 0.95)' ]}
        />
    
    </Container>
  )
}