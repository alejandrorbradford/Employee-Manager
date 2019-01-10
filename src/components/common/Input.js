import React from 'react';
import { TextInput, Text, View } from 'react-native';

const Input = ({ labelText, value, onChangeText, placeholderText, secureTextEntry }) => {
    return (
        <View style={styles.containerStyle}>
          <Text style={styles.labelStyle}>{labelText}</Text>
          <TextInput
            secureTextEntry={secureTextEntry}
            placeholder={placeholderText}
            autoCorrect={false}
            value={value}
            onChangeText={onChangeText}
            style={styles.inputStyle}
          />
        </View>
    );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };
