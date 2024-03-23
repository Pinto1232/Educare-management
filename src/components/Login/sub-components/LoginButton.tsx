import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface LoginButtonProps {
  onPress: () => void; 
  title: string; 
}

const LoginButton = ({ onPress, title }: LoginButtonProps) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});

export default LoginButton;