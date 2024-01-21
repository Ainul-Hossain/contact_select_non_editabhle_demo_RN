import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const YouTubeSearchInput = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [editable, setEditable] = useState(true);

  const handleInputChange = (text) => {
    setSearchQuery(text);
  };

  const handleClearPress = () => {
    setSearchQuery('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchQuery}
          onTouchStart={()=>{
            // setEditable(true);
            setSearchQuery('hi');
            setEditable(false);
          }}
          editable={editable}
          onChangeText={handleInputChange}
        />
        {searchQuery !== '' && (
          <TouchableOpacity
            onPress={()=>{
              handleClearPress();
              setEditable(true);
            }}
            style={styles.clearButton}>
            <Text style={styles.clearButtonText}>✕</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
  },
  input: {
    flex: 1,
    height: 45,
    fontSize: 18,
    paddingHorizontal: 8,
  },
  clearButton: {
    padding: 8,
  },
  clearButtonText: {
    color: 'gray',
    fontSize: 18,
  },
});

export default YouTubeSearchInput;
