import { Text, StyleSheet } from 'react-native';
import React from 'react';

const size = {
  superHeading: 40,
  h1: 30,
  h2: 20,
  small: 14
};


const TextView = (props) => {

  let moreStyle = {};

  if(props.size) {
    moreStyle = { ...moreStyle, fontSize: size[props.size]}
  }
  if(props.color) {
    moreStyle = { ...moreStyle, color: props.color}
  }

  return (
  <Text style={[styles.basic, moreStyle, props.style]}>{props.children}</Text>
)};

const styles = StyleSheet.create({
  basic: {
    fontFamily: "Open Sans",
  }
})

export default TextView;