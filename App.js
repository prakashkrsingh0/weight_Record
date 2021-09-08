import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';
import WeightInput from './src/weightInput';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component{
 

 backgroundStyle = {
    backgroundColor: "red",
  };

  render(){
    return (
      <SafeAreaView >
        <StatusBar barStyle={'light-content'} />
        <ScrollView
          >
          <View
            style={{
              backgroundColor: Colors.white,
            }}>
              <WeightInput/>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
};


