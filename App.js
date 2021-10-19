import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Alert, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import minhaft from './assets/minhaft.jpg';
import Card from './src/components/card';
// import  {} from 'react-native-icons/Feather'


const App = () => {

  function handleSocialMedia(social_media){
    switch (social_media) {
      
      case 'linkedin':
        Alert.alert( 'Me segue lá no LinkedIn!', 'https://www.linkedin.com/in/otaldol2/')
        break;

      case 'medium':
          Alert.alert( 'Dá uma lida lá no Medium!', 'https://otaldol2.medium.com/')  
        break;

      case 'github':
          Alert.alert('Se liga nos códigos que eu tenho no meu Github...', 'https://github.com/OTalDoL2/')  
        break;

      case 'instagram':
          Alert.alert('Me segue no INSTAGRAAAAAAM', 'https://www.instagram.com/l2.ramos/')  
        break;
    
      default:
        break;
    }
  }

  return (
    <>
      <View style={styles.page}>
        <View style={styles.container__header}>
          <Image source={minhaft} style={styles.foto} />
          <Text style={styles.nome}> Lucas Matheus</Text>
          <Text style={styles.funcao}> Game, Web and Mobile Dev</Text>
          <View style={styles.social_media}>
            {/* <Instagram />
            <LinkedIn /> */}
            <TouchableOpacity onPress={() => handleSocialMedia('instagram')}>
              <Icon name="instagram" size={30} color="#349" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleSocialMedia('medium')}>
              <Icon name="medium" size={30} color="#349" />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => handleSocialMedia('linkedin')}>
             <Icon name="linkedin" size={30} color="#349" />
            </TouchableOpacity>            

            <TouchableOpacity onPress={() => handleSocialMedia('github')}>
              <Icon name="github" size={30} color="#349" />
            </TouchableOpacity>
          </View>
        </View>

        <Card titulo="Formação Academica">
          <Text style={styles.card_content_txt}> oBoticário </Text>
        </Card>
        <Card titulo="Experiência Profissional">
          <Text style={styles.card_content_txt}> C# </Text>
          <Text style={styles.card_content_txt}> HTML e CSS </Text>
          <Text style={styles.card_content_txt}> Unity 2D </Text>
          <Text style={styles.card_content_txt}> React Native (básico) </Text>
        </Card>
      </View>    
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1
  },
  container__header: {
    marginTop: 50,
    alignItems: 'center',
    alignItems: 'center'
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 150
  },
  social_media: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%', 
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10
  },
  funcao: {
    color: '#939393',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card_content_txt: {
    color: '#939393',
    marginBottom: 5,
    display: 'block'
  },
});

export default App;