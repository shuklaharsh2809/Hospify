import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const Post = props => {
  const post = props.post;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/images/bedroom1.jpg')}
      />
      <Text style={styles.bedrooms}>
        {post.bed} bed {post.bedroom} bedroom
      </Text>
      <Text style={styles.description} numberOfLines={2}>
        {post.type}.{post.title}
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldprice}>${post.oldPrice}</Text>
        <Text style={styles.price}> ${post.newPrice}</Text>/Night
      </Text>
      <Text style={styles.totalprice}>${post.totalPrice} total</Text>
    </View>
  );
};
export default Post;
