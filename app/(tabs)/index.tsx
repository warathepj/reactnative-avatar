import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image, Platform } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

const FamicomStyleApp = () => {
  const [inputText, setInputText] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('https://api.dicebear.com/9.x/pixel-art/svg?seed=John');

  const handleSubmit = () => {
    // Handle submit logic here
    console.log('Submitted:', inputText);
    // Update avatar when submitting
    setAvatarUrl(`https://api.dicebear.com/9.x/pixel-art/svg?seed=${inputText}`);
  };

  const handleDownload = async () => {
    try {
      if (Platform.OS === 'web') {
        // For web: Create a link element and trigger download
        const link = document.createElement('a');
        link.href = avatarUrl;
        link.download = `avatar-${inputText || 'default'}.svg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        // For mobile: Download and share the file
        const filename = `${FileSystem.documentDirectory}avatar-${inputText || 'default'}.svg`;
        
        const downloadResult = await FileSystem.downloadAsync(
          avatarUrl,
          filename
        );

        if (downloadResult.status === 200) {
          const isAvailable = await Sharing.isAvailableAsync();
          if (isAvailable) {
            await Sharing.shareAsync(downloadResult.uri);
          } else {
            alert('Sharing is not available on your platform');
          }
        } else {
          alert('Failed to download the avatar');
        }
      }
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download the avatar');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: avatarUrl }}
          style={styles.avatar}
        />
      </View>
      <View style={styles.borderContainer}>
        <View style={styles.mainContainer}>
          <Text style={styles.title}>ENTER YOUR NAME</Text>
          
          <TextInput
            style={styles.input}
            onChangeText={setInputText}
            value={inputText}
            placeholder="TYPE HERE"
            placeholderTextColor="#8B8B8B"
          />
          
          <TouchableOpacity 
            style={styles.button}
            onPress={handleSubmit}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <TouchableOpacity 
        style={[styles.button, styles.downloadButton]}
        onPress={handleDownload}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>DOWNLOAD AVATAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe6e6',
    justifyContent: 'center',
    padding: 20,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  borderContainer: {
    borderWidth: 4,
    borderColor: '#E83A30',
    padding: 4,
    backgroundColor: '#2A2A2A',
    marginBottom: 20,
  },
  mainContainer: {
    borderWidth: 4,
    borderColor: '#FFF',
    padding: 20,
    backgroundColor: '#4A4A4A',
  },
  title: {
    fontFamily: 'PressStart2P',
    color: '#FFF',
    fontSize: 20,
    marginBottom: 30,
    textAlign: 'center',
    textShadowColor: '#E83A30',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 0,
  },
  input: {
    fontFamily: 'PressStart2P',
    fontSize: 16,
    color: '#FFF',
    borderWidth: 4,
    borderColor: '#FFF',
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#2A2A2A',
    height: 60,
  },
  button: {
    backgroundColor: '#E83A30',
    borderWidth: 4,
    borderColor: '#FFF',
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'PressStart2P',
    color: '#FFF',
    fontSize: 16,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 0,
  },
  downloadButton: {
    marginTop: 10,
  },
});

export default FamicomStyleApp;


