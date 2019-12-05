import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Modal,
  TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import Card from '../shared/card';
import ReviewForm from './reviewForm';

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    { title: 'Death Stranding', rating: 5, body: 'Hideo Kojima returns in his brand new masterpiece debuting his brand new studio after the splinter from Konami. People can simplify this game as a Delivery Simulator but its more than that. Expect plenty of Kojima flair and some thought provoking post apocalyptic gameplay. I went in blind with barely any exposure to the trailers and I feel like you should too. so I will not reveal what this game is like, but I will say it is really comfortable playing in the rain with hot coco and blankets.', key: '1' },
    { title: 'The Outer Worlds', rating: 5, body: 'A spiritual successor to Fallout New Vegas comes this surprisingly wonderful RPG. New Vegas but in space is here and is a solid rpg shooter. A nice space aesthetic and good gun play solidifies this game in the upper echeleon of RPG Shooters. ', key: '2' },
    { title: 'Halo Reach', rating: 3, body: 'Halo Reach and the Master Chief Collection finally arrive to PC! with it comes a new polished look taking advantage of pc power and internet. nostalgia glasses are turned on for people familiar with this title.', key: '3' },
    { title: 'Call of Duty: Modern Warfare', rating: 4, body: 'A complete reboot of the modern warfare series that brings alot of grit and pseudo-realism into a solid shooter. cross play involved as pc players can also play with xbox and ps4 players. no jetpacks here', key: '4'},
    { title: 'Hyper Light Drifter', rating: 5, body: 'A wonderful metroidvania game that harkens to the old 8 and 16 bit era of gaming described by the developer as a mix of diablo and legend of zelda', key: '5'},
    { title: 'Tomb Raider (2013)', rating: 4, body: 'A reimagining reboot reconstruction (excessive wording I know) of Laura Croft exploits by Crystal Dynamics', key: '6'},
    { title: 'WoW Classic', rating: 5, body: 'World of Warcraft vanilla and its brutal difficulty of 2004 is back in modern days as a server restricted to its old version. first timers beware its long and hard but with the power of resources and the internet, the grind to level 60 is much easier.', key: '7'},
    { title: 'Apex Legends', rating: 5, body: 'Apex Legends from day 1, redefines what the battle royale genre should be and include from the get go. solid gunplay, a host of characters from the titanfall universe, gives this the title of the brand new titan on the block when it comes to the battle royale genre.', key: '8' }, 
  ]);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>
  
      <Modal visible={modalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons 
              name='close'
              size={24} 
              style={{...styles.modalToggle, ...styles.modalClose}} 
              onPress={() => setModalOpen(false)} 
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons 
        name='add' 
        size={24} 
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)} 
      />

      <FlatList data={reviews} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
          <Card>
            <Text style={globalStyles.titleText}>{ item.title }</Text>
          </Card>
        </TouchableOpacity>
      )} />

    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  }
});