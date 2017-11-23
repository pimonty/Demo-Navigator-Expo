import React from 'react';
import { Platform, AppState, Dimensions, StyleSheet, Text, View } from 'react-native';


import Mainlogin from './screen/login/mainlogin.js';

export default class App extends React.Component {

 //Constructor

  constructor(props) {
    super(props);
    
    this.state = {
      appState: AppState.currentState,
      Screenres: Dimensions.get('window'),
    };

  }


  //Funciones necesarias.
  
  _is_screen_landscape(){
    var boolpos = this.state.Screenres.height > this.state.Screenres.width;
    return boolpos ? true : false ;
  }

 
  //Funciones reservadas de react.

  componentDidMount() { 
    console.log('WILL MOUNT -------');

    //giro izq+der y solo vista vertical no invertida.
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.ALL_BUT_UPSIDE_DOWN);

    AppState.addEventListener('change', this._handleAppStateChange);
    Dimensions.addEventListener('change', this.handler);
  }

  componentWillUnmount() {
    console.log('WILL UNMOUNT-------');
    AppState.removeEventListener('change', this._handleAppStateChange);
    Dimensions.removeEventListener('change', this.handler);
  }


//Declaración de variables

  _handleAppStateChange = (nextAppState) => {

    

    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
      console.log('App has come to the foreground!')
    }

    if (this.state.appState.match('active') && nextAppState === 'background') {
      console.log('App has gone to the foreground!')
    }

    if (this.state.appState.match('active') && nextAppState === 'inactive') {
      console.log('App has gone to the foreground!')
    }
  
    

    this.setState({ appState: nextAppState });
    
  }

  handler = () => {
    console.log('Actualiza resolución...no puede determinarse en Expo hacia donde giró el dispositivo.');

    if (Platform.OS === 'android') {
      console.warn('Recuerda que el módulo Dimensions de React no da la resolución correcta')
      this.setState({ Screenres: Dimensions.get('window'), });
    }

    if (Platform.OS === 'ios') {
      this.setState({ Screenres: Dimensions.get('window'), });
    }
    
  }

  render() {
    return (
      <View style={styles.container}>
      <Mainlogin></Mainlogin>
        <Text>Estado: {this.state.appState}</Text>            
        <Text>Resolución detectada: {this.state.Screenres.height} x  {this.state.Screenres.width}</Text>               
      </View>      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
  },
});
