import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const GuestScreen = () => {
  const navigation = useNavigation();
  const [adults, setAdults] = useState(0);
  const [childern, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  return (
    <View style={{justifyContent: 'space-between', height: '100%'}}>
      <View>
        <View style={styles.row}>
          <View>
            <Text style={{fontWeight: 'bold'}}>Adults</Text>
            <Text style={{color: 'lightgrey'}}>Age 13 or above</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              onPress={() => setAdults(Math.max(0, adults - 1))}
              style={styles.button}>
              <Text style={{fontSize: 20, color: 'grey'}}>-</Text>
            </Pressable>
            <Text style={{marginHorizontal: 16, fontSize: 16}}>{adults}</Text>
            <Pressable
              onPress={() => setAdults(adults + 1)}
              style={styles.button}>
              <Text style={{fontSize: 20, color: 'grey'}}>+</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.row}>
          <View>
            <Text style={{fontWeight: 'bold'}}>Children</Text>
            <Text style={{color: 'lightgrey'}}>Age 2-12</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              onPress={() => setChildren(Math.max(0, childern - 1))}
              style={styles.button}>
              <Text style={{fontSize: 20, color: 'grey'}}>-</Text>
            </Pressable>
            <Text style={{marginHorizontal: 16, fontSize: 16}}>{childern}</Text>
            <Pressable
              onPress={() => setChildren(childern + 1)}
              style={styles.button}>
              <Text style={{fontSize: 20, color: 'grey'}}>+</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.row}>
          <View>
            <Text style={{fontWeight: 'bold'}}>Infants</Text>
            <Text style={{color: 'lightgrey'}}>Under 2</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              onPress={() => setInfants(Math.max(0, infants - 1))}
              style={styles.button}>
              <Text style={{fontSize: 20, color: 'grey'}}>-</Text>
            </Pressable>
            <Text style={{marginHorizontal: 16, fontSize: 16}}>{infants}</Text>
            <Pressable
              onPress={() => setInfants(infants + 1)}
              style={styles.button}>
              <Text style={{fontSize: 20, color: 'grey'}}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View>
        <Pressable
          onPress={() =>
            navigation.navigate('Home', {
              screen: 'Explore',
              params: {
                screen: 'SearchResults',
              },
            })
          }
          style={{
            marginBottom: 20,
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            height: 40,
            marginHorizontal: 20,
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>
            Search
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default GuestScreen;
