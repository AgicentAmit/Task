import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CardComponent = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardContainer}>
        <View style={styles.container}>
          <View style={styles.profileIcon}>
            <Text>AS</Text>
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text>
                Amit <Text>Sharma</Text>
              </Text>
            </View>
            <Text>manager</Text>
          </View>
        </View>
        <View style={styles.profileIcon}>
          <Text>AS</Text>
        </View>
      </View>
    </View>
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  mainContainer: {backgroundColor: 'white', padding: 10},
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    borderRadius: 100,
    backgroundColor: 'green',
    padding: 6,
  },
});
