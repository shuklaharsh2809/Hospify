import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    height: 210,

    resizeMode: 'cover',
    borderRadius: 10,
  },
  bedrooms: {
    marginVertical: 10,
    color: 'grey',
  },
  description: {
    fontSize: 18,
    lineHeight: 20,
  },
  prices: {
    fontSize: 18,
  },
  oldprice: {
    color: 'grey',
    textDecorationLine: 'line-through',
  },
  price: {
    fontWeight: 'bold',
  },
  totalprice: {
    color: 'grey',
    textDecorationLine: 'underline',
  },
});

export default styles;
