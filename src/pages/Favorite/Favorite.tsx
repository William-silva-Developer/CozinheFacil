import React, {useState, useEffect} from 'react';
import { FlatList } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import { getFavorites } from '../../Utils/Store';
import { SafeAreaView } from '../../stylesGlobal/styles.Global';





 import { Title, Text } from './styles';
import { ListFood } from '../../components/ListFoods/ListFood';

type PropsParams = {
id: string;
}


const Favorite: React.FC = () => {

const [receipe, setReceipe] = useState<PropsParams[]>([]);
const isFocus = useIsFocused();

useEffect(() => {
 
  let isActive = true; 
 
  async function getReceipe() {
    const res = await getFavorites("@keyFavorite");
    if(isActive) {
      setReceipe(res);
      
    }
  };
  if(isActive) {
    getReceipe();
  }
  
  return () => {
    isActive = false;
  }
},[receipe])

  return (
    <SafeAreaView>
    
        <Title>Receitas Favoritas</Title>
        
        {receipe.length === 0 && <Text>Você ainda não tem receitas favoritadas</Text>}
        
        <FlatList
          data={receipe}
          keyExtractor={item => String(item.id)}
          renderItem={({item, index}) => (
          <ListFood data={item} index={index} />)}
        />
        
    </SafeAreaView>
  )
}

export  {Favorite};