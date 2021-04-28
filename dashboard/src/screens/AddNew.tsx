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
  TextInput,
} from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const AddNew = props => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Title</Text>
      <TextInput style={styles.title}></TextInput>
      <Text>Description</Text>
      <TextInput multiline={true} style={styles.desc}></TextInput>

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text>Add</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
  },
  body: {
    height: height / 1.2,
    marginLeft: '5%',
    marginRight: '5%',
  },
  description: {marginTop: '10%'},
  title: {borderWidth: 0.5, width: '75%'},
  desc: {borderWidth: 0.5, width: '75%', minHeight: width / 4},
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
export default AddNew;
