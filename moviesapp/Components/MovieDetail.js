import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

const MovieDetail = ({onPress,set}) => {

    const [movies_list, set_movies_list] = useState([])

  const MOVIESLIST1_URL = `https://api.themoviedb.org/3/movie/${set.id}?api_key=68e82445c8842ba8616d0f6bf0e97a41`

  const getData = async () => {
    

    const result = await fetch(MOVIESLIST1_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const list = await result.json();
    
    

  }
  useEffect(() => {
    getData()
  }, [])

 
 

    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                <Text style={{ margin: 10 }}>{set.title}</Text>
            </TouchableOpacity>

        </View>
    )
}

export default MovieDetail

const styles = StyleSheet.create({})