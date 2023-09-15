import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <TouchableOpacity
          style={styles.boxContainer}
          onPress={() => navigation.navigate('register')}>
          <Text style={styles.titleText}>ADD EMPLOYEE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  subContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'tan',
  },
  boxContainer: {
    backgroundColor: 'green',
    paddingHorizontal: '20%',
    paddingVertical: '5%',
    borderRadius: 6,
    elevation: 2,
  },
  titleText: {
    fontWeight: '700',
    color: 'white',
    fontSize: 18,
  },
});
