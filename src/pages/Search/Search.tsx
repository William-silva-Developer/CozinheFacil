import React from 'react';
import {  StatusBar, FlatList } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';

import { SafeAreaView } from '../../stylesGlobal/styles.Global';
import { ListFood } from '../../components/ListFoods/ListFood';



import { Text } from './styles';
import api from '../../service/Api';


type ParamsProps = {
    search: {
        name: string,
    }
};

type Props = {
    id: string,
}

type Params = RouteProp<ParamsProps, 'search'>;

const Search: React.FC = () => {

    const { params } = useRoute<Params>();
    
    const [receipe, setReceipe] = React.useState<Props[]>([]);
    
    React.useEffect(() => {
        async function getSearch(){
            try {
                const res = (await api.get(`/foods?name_like=${params.name}`)).data;
                setReceipe(res);
                
            } catch (error) {
            
                return null;
                
            }
        };
        getSearch();
    },[])
    

  return (
  <SafeAreaView>
    <StatusBar barStyle='dark-content' backgroundColor='#fff' />
    
        <FlatList 
        
            data={receipe}
            keyExtractor={item => item.id}
            renderItem={({index, item}) => <ListFood data={item} index={index} />}
        />
  </SafeAreaView>
  )
}

export {Search};