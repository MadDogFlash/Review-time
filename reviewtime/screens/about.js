import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function About() {
  return (
    <View style={globalStyles.container}>
      <Text>Flash510 hails from Oakland California and is a seasoned veteran when it comes to playing video games. Starting from the NES and Sega Genesis, video games has captivated his attention (and time) since he was a child. From humble beginnings of old modem dial up, to now fiber speed, he played all sorts of games from the 90s to today. Ask him about an old favorite educational game called Zoombinis and he will recall how much he missed the old innocence of pre 2000 computing. Nowadays he plays nothing but ranked in Apex Legends and League of Legends while going to school.</Text>
    </View>
  );
}