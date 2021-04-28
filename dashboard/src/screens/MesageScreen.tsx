import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';

import {NavigationScreenProp} from 'react-navigation';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export type Props = {
  route: any;
};

const MesageScreen = (props: Props) => {
  const {title, description} = props.route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View>
          <Text>{title}</Text>
        </View>
        <View style={styles.description}>
          <Text numberOfLines={5}>{description}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#ffff'},
  body: {height: height / 1.2, marginLeft: '5%', marginRight: '5%'},
  description: {marginTop: '10%'},
});

export default MesageScreen;
