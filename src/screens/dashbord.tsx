import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import CardComponent from '../component/card-component';

const DashBoardScreen = ({route}) => {
  const registeredData = route.params.registeredData;
  return (
    <View style={styles.container}>
      <View style={{padding: 10}}>
        <CardComponent />
      </View>

      {/* <Text>First Name: {registeredData.firstName}</Text>
      <Text>Last Name: {registeredData.lastName}</Text>
      <Text>Job Title: {registeredData.jobTitle}</Text>
      <Text>Salary: {registeredData.salary}</Text> */}
    </View>
  );
};

export default DashBoardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'offWhite',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
