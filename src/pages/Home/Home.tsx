import React from 'react';
import { TextInput, FlatList  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

///import { Image, View, Text as MotiText } from 'moti';

import { Ionicons } from '@expo/vector-icons';

import api from '../../service/Api';
import { ListFood } from '../../components/ListFoods/ListFood';
import { Logo } from '../../components/Logo/Logo';

import { SafeAreaView } from '../../stylesGlobal/styles.Global';

import { ContentHeader, ContentHeaderText, Text, AreaSearcher, Touchable, ContentIcon, LogoTipo } from './styles';



type Props = {
id: string;
name: string;
total_ingredients: string;
time: string;
cover: string;
video: string;
ingredients: {
  id: string;
  name: string;
  amount: string;

};
intructions: {
  id: string;
  text: string;
}

}


const Home: React.FC = () => {

const [input, setInput] = React.useState<string>();
const [revenue, setRevenue] = React.useState<Props[]>([]);

const { navigate } = useNavigation();

React.useEffect(() => {
  

  
  async function getRevenue(){
    
    try {
      
        const data = (await api.get('/foods')).data;
        setRevenue(data);
      
    } catch (error) {
    
      return;
      
    }
  }
  
    getRevenue();
  
},[ revenue ])


const handleSearch = () => {

  let name = input;
  setInput('');
  navigate('Search',{ name: name });

}

  return (
  <SafeAreaView>
    
      
      <ContentHeader>
          <ContentHeaderText>
          <Logo />
          <Text>Encontre a receita</Text>
          <Text>que combina com você</Text>
          </ContentHeaderText>
          <ContentIcon>
            
            <LogoTipo source={require('../../../assets/img/logo2.png')} resideMode='contain' />
            
        </ContentIcon>
      </ContentHeader>
      
      
      
      <AreaSearcher>
        <TextInput
        style={{flex: 1}}
        placeholder='Digite um nome de comida'
        value={input}
        onChangeText={value=> setInput(value)}
        />
        
        <Touchable onPress={handleSearch}>
          <Ionicons name="search" size={28} color="#4cbe6c" />
        </Touchable>
      </AreaSearcher>
      
      <FlatList 
        data={revenue}
        keyExtractor={item => String(item.id)}
        renderItem={({item, index}) => <ListFood data={item}  index={index} />}
      />
      
      

  </SafeAreaView>   
  )
}

export  {Home};