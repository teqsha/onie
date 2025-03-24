import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const PostScreen = () => {
 
   const navigation = useNavigation();
  return (
    <View>
      <Text>PostScreen</Text>
    </View>
  )
}

export default PostScreen