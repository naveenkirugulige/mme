import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export type Props = {
  title: string;
  description: string;
};

const Card = (props: Props) => {
  const {title, description} = props;
  return (
    <View style={styles.card}>
      <View style={styles.titleContainer}>
        <Text>{title}</Text>
      </View>
      <View style={styles.description}>
        <Text numberOfLines={5}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width / 1.2,
    height: height / 5,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: '#ebeae8',
  },
  titleContainer: {
    marginLeft: '5%',
    marginTop: '5%',
    height: '10%',
  },
  description: {
    marginLeft: '5%',
    marginTop: '5%',
    marginRight: '5%',
    height: '90%',
  },
});
export default Card;
