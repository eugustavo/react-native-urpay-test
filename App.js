/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React from 'react';
import { View, ScrollView, Image, Text, StatusBar } from 'react-native';
import Animated from 'react-native-reanimated';

const images = [
  {id: 1,  uri: require('./src/assets/1.jpg')},
  {id: 2,  uri: require('./src/assets/2.jpg')},
  {id: 3,  uri: require('./src/assets/3.jpg')},
  {id: 4,  uri: require('./src/assets/4.jpg')},
  {id: 5,  uri: require('./src/assets/5.jpg')},
];
const HEADER_HEIGHT = 270;

const App = () => {
  <StatusBar
    backgroundColor= "transparent"
    translucent
    barStyle="light-content"
  />

  const scrollY = new Animated.Value(0);
  const diffClampScrollY = Animated.diffClamp(scrollY, 0, HEADER_HEIGHT);
  const headerY = Animated.interpolate(diffClampScrollY, {
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
  });


  return (
    <View style = {{flex: 1}}>

      <Animated.View style = {{
        position: 'absolute',
        left: 0,
        right: 0,
        top: -20,
        height: HEADER_HEIGHT,
        backgroundColor: '#dbdbdb',
        borderRadius: 20,
        zIndex: 1000,
        elevation: 1000,
        transform: [{translateY: headerY}],
        alignItems: 'center',
      }}>
        <Text style={{
          fontSize:17,
          color: '#757575',
          paddingTop: 40,
          }}>
            Saldo total
          </Text>

          <Text style={{
            fontSize: 32,
            color:'#380052',
          }}>
            R$ 1.530,00
          </Text>
        <ScrollView style={{ 
          flex: 1,
          flexDirection: 'row',
          paddingTop: 50,
          paddingRight: 250,
          paddingLeft: 10,

          }}>
            <View style={{
              backgroundColor: '#FFF',
              height: 100,
              width: 120,
              borderRadius: 17,
            }} />
        </ScrollView>

      </Animated.View>
      <Text style={{
        fontSize:32,
        color: '#000',
        fontWeight: 'bold',
        paddingLeft: 10,
        }}>
          Historico
        </Text>

      <Animated.ScrollView
        bounces = {false}
        scrollEventThrottle = {16}
        style={{paddingTop: 200}}
        onScroll = {Animated.event([
          {
            nativeEvent : {contentOffset: {y: scrollY}},
          },
        ])}
      >
        {images.map(image => (
          <View style = {{height: 400, margin: 20}}>
            <Image
            source = {image.uri}
            style={{
              flex:1,
              height: null,
              width: null,
              borderRadius: 20,
            }}
            />
          </View>
        ))}
      </Animated.ScrollView>
    </View>
  );
};


export default App;
