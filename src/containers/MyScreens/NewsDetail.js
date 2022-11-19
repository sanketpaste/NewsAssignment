import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NewsDetail = ({route}) => {
    const newsTitle = route.params.titleId
  return (
    <View>
      <Text style={{fontSize:30,fontWeight:'bold'}}>{newsTitle}</Text>
    </View>
  )
}

export default NewsDetail

const styles = StyleSheet.create({})