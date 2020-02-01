import React from 'react'
import { StyleSheet, Text, TextInput, View, SafeAreaView } from 'react-native';
import { Formik } from 'formik';
import colors from '../../theme';
import TextView from '../../components/text';
import Button from '../../components/button';

const PreLogin = () => {

  const handleSignUp = () => {
    // TODO: Firebase stuff...
    console.log('handleSignUp')
  }

  return (
    <>
    <SafeAreaView style={styles.topSAVContainer} />
    <SafeAreaView style={styles.SAVContainer}>
      <View style={styles.header}></View>
      <View style={styles.bottomContainer}>
        <TextView size="superHeading">Picula</TextView>
        <TextView>Sign up. You know you want to</TextView>
        <TextView color={colors.textGrey  }>It will take less than a minute</TextView>
        <View style={styles.buttonContainer}>
          <Button title="Sign Up"></Button>
          <Button title="Log In">Sign Up</Button>
        </View>
      </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  topSAVContainer: {
    backgroundColor: colors.primaryColor,
    flex: 0,
  },
  SAVContainer: {
    flex: 1,
  },
  header: {
    flex: 3,
    backgroundColor: colors.primaryColor,
    borderBottomLeftRadius: 30
  },
  bottomContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    height: 40
  }
})

export default PreLogin;