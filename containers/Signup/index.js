import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, SafeAreaView } from 'react-native';
import { Formik } from 'formik';

const SignUp = () => {

  const handleSignUp = () => {
    // TODO: Firebase stuff...
    console.log('handleSignUp')
  }

  return (
    <SafeAreaView style={styles.SAVContainer}>
    <Formik
      initialValues={{ email: '', password: '', errorMessage: null }}
      onSubmit={values => console.log(values)}
    >
      {({ handleBlur, handleChange, values, errors, handleSubmit }) => (<View style={styles.container}>
        <Text>Sign Up</Text>
        {/* {errors.errorMessage &&
          <Text style={{ color: 'red' }}>
            {state.errorMessage}
          </Text>} */}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={handleChange('email')}
          value={values.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={handleChange('password')}
          value={values.password}
        />
        <Button title="Sign Up" onPress={handleSubmit} />
        <Button
          title="Already have an account? Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>)}
    </Formik>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  SAVContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})

export default SignUp;