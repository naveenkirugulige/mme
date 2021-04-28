import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  Text,
} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
import Card from './components/Card';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

type Props = {navigation: NavigationScreenProp<any>};

const test = [
  {
    title: 'test1',
    desc: 'akdsgsadfjasdsfMVSFyffikasgdaskjffiifsifwjfbask,hjdf;hdgsvSgduk',
  },
  {title: 'test2', desc: 'decs2'},
  {title: 'test2', desc: 'decs2'},
  {title: 'test2', desc: 'decs2'},
  {title: 'test2', desc: 'decs2'},
];

const Home = (props: Props) => {
  const {navigation} = props;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <ScrollView>
          {test.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Message', {
                    title: item.title,
                    description: item.desc,
                  });
                }}>
                <Card title={item.title} description={item.desc} key={index} />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('AddCard');
        }}>
        <Text>Add Element</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#ffff'},
  body: {height: height / 1.4, alignItems: 'center', paddingTop: '5%'},
  button: {
    width: width / 2,
    height: height / 14,
    backgroundColor: '#afa9e8',
    alignSelf: 'center',
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Home;
