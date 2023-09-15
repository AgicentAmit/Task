import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {registerStart} from '../constants/userSlice';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  Alert,
} from 'react-native';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.user.loading);
  const error = useSelector(state => state.user.error);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    salary: '',
  });

  const handleRegister = () => {
    // Validate the input fields
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.jobTitle ||
      !formData.salary
    ) {
      Alert.alert('Please fill in all fields');
      return;
    }

    // Convert salary to a number (assuming it's a valid number)
    const salary = parseFloat(formData.salary);

    if (isNaN(salary)) {
      Alert.alert('Salary must be a valid number');
      return;
    }

    // Dispatch the registration action
    dispatch(registerStart(formData));

    // Clear the input fields
    setFormData({
      firstName: '',
      lastName: '',
      jobTitle: '',
      salary: '',
    });

    // Optionally, navigate to another screen after successful registration
    navigation.navigate('dashboard', {registeredData: formData});
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.textFieldContainer}>
        <Text style={styles.headingTitle}>Enter employee details</Text>
        <View style={styles.textInputContainer}>
          <Text>First Name</Text>
          <TextInput
            style={styles.inputText}
            value={formData.firstName}
            onChangeText={text => setFormData({...formData, firstName: text})}
          />
        </View>
        <View style={styles.textInputContainer}>
          <Text>Last Name</Text>
          <TextInput
            style={styles.inputText}
            value={formData.lastName}
            onChangeText={text => setFormData({...formData, lastName: text})}
          />
        </View>
        <View style={styles.textInputContainer}>
          <Text>Job Title</Text>
          <TextInput
            style={styles.inputText}
            value={formData.jobTitle}
            onChangeText={text => setFormData({...formData, jobTitle: text})}
          />
        </View>
        <View style={styles.textInputContainer}>
          <Text>Salary</Text>
          <TextInput
            style={styles.inputText}
            value={formData.salary}
            onChangeText={text => setFormData({...formData, salary: text})}
            keyboardType="numeric"
          />
        </View>
      </View>
      <View style={{padding: '10%'}}>
        <Button title="Save" color="green" onPress={handleRegister} />
        {loading && <Text>Loading...</Text>}
        {error && <Text>Error: {error}</Text>}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headingTitle: {
    textAlign: 'center',
    fontSize: 18,
    color: 'green',
    fontWeight: '800',
  },
  textFieldContainer: {
    padding: '15%',
  },
  textInputContainer: {
    paddingTop: '15%',
  },
  inputText: {
    borderBottomWidth: 2,
    borderBottomColor: 'lightgreen',
  },
});

export default RegisterScreen;
