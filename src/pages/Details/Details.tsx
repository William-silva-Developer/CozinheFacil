import React, { useLayoutEffect} from 'react';
import { View, Pressable, Modal } from 'react-native';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';


import { Entypo, AntDesign } from '@expo/vector-icons';

import { getFavorites, isFavorite, removeFavorite, saveFavorites } from '../../Utils/Store';

import { SafeAreaView } from '../../stylesGlobal/styles.Global';


type Params = {
    Details: {
        index: number,
        data: {
            id: string;
            name: string;
            total_ingredients: string;
            time: string;
            cover: string;
            video: string;
            ingredients: [{
              id: string,
              name: string,
              amount: string,
            
            }];
            instructions: [{
              id: string;
              text: string;
            }];
        }
        
    }
    
};

type ParamsProps = RouteProp< Params,'Details' >;


 import { 
 Container, 
 Cover, 
 CoverPlay, 
 Scroll, 
 ContentText, 
 ContentIngredient, ContentInstructions, TextInstructions
  } from './styles';

import { Ingredients } from '../../components/Ingredients/Ingredients';
import { Instructions } from '../../components/Instructions/Instructions';
import WebVideo from '../../components/WebVideo/WebVideo';


const Details: React.FC = () => {

const [closeModal, setCloseModal] = React.useState<boolean>(false);
const [favorite, setFavorite] = React.useState<boolean>(false);
const  navigation = useNavigation();

const { params } = useRoute<ParamsProps>();

useLayoutEffect(() => {
    async function favorites(){
      const result = await isFavorite(params?.data);
      setFavorite(result);
    };
    favorites();
    
    navigation.setOptions({
    title: params?.data ? params?.data.name : 'Detalhes da Receita',
    headerRight: () => (
      <Pressable onPress={() => handleFavorite(params?.data)}>
      
        {favorite ? (<Entypo name='heart' size={26} color='#ff4141' />)
        :
        <Entypo name='heart-outlined' size={26} color='#ff4141' />}
      </Pressable>
    )
    })
},[ params?.data, navigation, favorite ]);


async function handleFavorite(value){
  
  if(favorite){
    await removeFavorite(value.id);
    setFavorite(false);
  }else{
  
    await saveFavorites("@keyFavorite", value);
    setFavorite(true);
    
  }
}



  return (
    <SafeAreaView>
      <Scroll contentContainerStyle={{paddingBottom: 18 }}>
      
        <Container onPress={() => setCloseModal(true)}>
          
            <Cover source={{uri: params?.data.cover }} resideMode='cover'/>
            
            <CoverPlay>
              <AntDesign name='playcircleo' size={45} color='#fff' />
            </CoverPlay>
          
        </Container>
        
        <ContentText>{params?.data.name}</ContentText>  
        <ContentIngredient>ingredientes ({params?.data.total_ingredients})</ContentIngredient>
        
           {params?.data.ingredients.map((item) => (
            <Ingredients key={Number(item.id)} data={item} />
           ))} 
           
           <ContentInstructions>
            <TextInstructions>Modo de preparo</TextInstructions>
           </ContentInstructions>
           
           {params?.data.instructions.map((item) => (
            <Instructions key={Number(item.id)} data={item} />
           ))}
           
           <Modal visible={closeModal}>
           
              <WebVideo handleClose={() => setCloseModal(false)} videoUrl={params?.data.video} />
              
           </Modal>
           
      </Scroll>
      
    </SafeAreaView>
  )
}

export  {Details};