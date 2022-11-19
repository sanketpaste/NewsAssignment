import { StyleSheet, Text, View, Image, ImageBackground, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

const MovieDetailScreen = ({ route }) => {
  const [movies_detail, set_movies_detail] = useState({})
  const data = route.params.movies_item

  const movie_detail_url = `https://api.themoviedb.org/3/movie/${data.id}?api_key=68e82445c8842ba8616d0f6bf0e97a41`

  const movie_image_url = `https://image.tmdb.org/t/p/original/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg`


  const get_movie_details = async () => {
    console.log(movie_detail_url);

    const result = await fetch(movie_detail_url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result_ = await result.json();
    set_movies_detail(result_)
    console.log('movie details', result_);

  }
  useEffect(() => {
    get_movie_details()
  }, [])
  return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      {(movies_detail && movies_detail?.poster_path) &&
        <ImageBackground
          style={{ flex: 1, justifyContent: 'center', height: '100%', width: '100%' }}
          source={{
            uri: `https://image.tmdb.org/t/p/original/${movies_detail?.poster_path}`
          }}
        >
          <Text style={styles.text}>{movies_detail.original_title}</Text>
        </ImageBackground>}

      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }} >
        <View style={{margin:20}}>
          <Text>{movies_detail.overview}</Text>
          <Text>{movies_detail.release_date}</Text>
          <Text>{movies_detail.status}</Text>
          <Text>{movies_detail.tagline}</Text>
        </View>


      </View>
    </View>
  )
}

export default MovieDetailScreen

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 30,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign:'center',
    backgroundColor: "#000000c0"
  }
})