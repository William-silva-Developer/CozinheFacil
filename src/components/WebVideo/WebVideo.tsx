import { View, Text } from 'react-native'
import React from 'react';
import WebView from 'react-native-webview';

import { Feather } from '@expo/vector-icons';

import { SafeAreaView, Container, BackButton } from './styles';

interface PropsParams {
handleClose: ()=>void;
videoUrl: string;
}


export default function WebVideo({ handleClose, videoUrl, ...rest }: PropsParams) {
  return (
    <SafeAreaView handleClose={handleClose} videoUrl={videoUrl} {...rest}>
        
        <Container onPress={handleClose}>
        
            <Feather name='arrow-left' size={28} color='#fff' />
            <BackButton>Voltar</BackButton>
            
        </Container>
        
        <WebView
          style={{flex: 1}}
          source={{uri: videoUrl }}
        
        />
      
    </SafeAreaView>
  )
}