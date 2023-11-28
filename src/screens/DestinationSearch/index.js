import React, {useState} from 'react';
import {View, TextInput, FlatList, Text, Pressable} from 'react-native';
import search from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const DestinationSearchScreen = () => {
  const navigation = useNavigation();
  const [inputText, setInputText] = useState('');

  return (
    <View style={styles.container}>
      <View>
        <GooglePlacesAutocomplete
          placeholder="Where Are you going"
          onPress={(data, details = null) => {
            console.log(data, details);
            navigation.navigate('Guests');
          }}
          query={{
            key: 'YOUR API KEY',
            language: 'en',
            type:'(cities)',
          }}
          suppressDefaultStyles
          renderRow={(item:GooglePlaceData) =><Suggestion item={item}/>}
        />
      </View>

      <TextInput
        style={styles.textInput}
        placeholder="Where are you going"
        value={inputText}
        onChangeText={setInputText}
      />
      <FlatList
        data={search}
        renderItem={({item}) => (
          <Pressable
            onPress={() => navigation.navigate('Guests')}
            style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name="location-pin" size={30} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;
