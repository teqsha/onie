import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UploadReels from './upload/UploadReels';
import ReelsVideo from './upload/ReelsVideo';


const UploadScreen = () => {
  return (
    <View>
      <UploadReels/>
      <ReelsVideo/>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default  UploadScreen 

