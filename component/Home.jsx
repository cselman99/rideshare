import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Pressable, Dimensions, Platform } from 'react-native';
import Map from './Map.jsx';
import NavBar from './NavBar.jsx';
import BottomNav from './BottomNav.jsx';

export default function Home() {

  return (
    <View style={styles.container}>
      <Map />
      <Pressable style={styles.buttonMain} onPress={() => console.log("clicked")}>
        <Text style={styles.buttonText}>Find a Ride</Text>
      </Pressable>
      <BottomNav />
    </View>
  );
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: Platform.OS === "android" ? 25 : 0,
  },
  buttonMain: {
    zIndex: 10,
    position: 'absolute',
    bottom: 140,
    width: width / 1.5,
    height: 60,
    backgroundColor: '#3ade7f',
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    shadowOffset:{  width: 0,  height: 2,  },
    shadowColor: 'gray',
    shadowOpacity: 1.0,
  },
  mainText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 24,
    textAlign: 'center',
  },
});
