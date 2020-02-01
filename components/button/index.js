import { TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import TextView from '../text';
import colors from '../../theme';

const size = {
  superHeading: 40,
  h1: 30,
  h2: 20,
  small: 14
};


const Button = (props) => {

  let moreStyle = {};

  if(props.color) {
    moreStyle = { ...moreStyle, color: props.color}
  }

  return (
  <TouchableOpacity
    onPress={props.onPress}
    style={[styles.basic, moreStyle, props.style]}>
    <TextView color="white" styles={props.textStyle}>{props.title}</TextView>
  </TouchableOpacity>
)};

const styles = StyleSheet.create({
  basic: {
    padding: 10,
    height: 40,
    width: 100,
    justifyContent:'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: colors.primaryColor,
    borderRadius: 10
  }
})

export default Button;