import { StyleSheet, Text, View, Image, ImageBackground, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

const DetailsMovie = ({ route }) => {
  const [moviedetail, setMoviedetail] = useState({})

  const movieData = route.params.about_movies
  const details_uri = `https://api.themoviedb.org/3/movie/${movieData.id}?api_key=68e82445c8842ba8616d0f6bf0e97a41`


  const getMoviesData = async () => {
    console.log(details_uri);
    const result = await fetch(details_uri, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await result.json()
    setMoviedetail(data)
    console.log('movieDetails', data);
  }

  useEffect(() => {
    getMoviesData()
  }, [])
  return (
    <View style={{ flex: 1, alignItems: 'center',justifyContent:'flex-end' }}>
      {(moviedetail && moviedetail?.poster_path) &&
        <ImageBackground
          style={{ height: 500, width: '100%' }}
          source={{
            uri: `https://image.tmdb.org/t/p/original/${moviedetail?.poster_path}`
          }}>
          <View style={{flex:1,justifyContent:'flex-end'}}>
          <Text style={styles.imageText}>{moviedetail.title}</Text>
          </View>
            
         
        </ImageBackground>
      }

      <View style={{ flex: 1, }}>

        <ScrollView>
          <View style={{ margin: 20 ,}}>
            <Text style={styles.text}>Overview: {moviedetail.overview}</Text>
            <Text style={styles.text}>Release Date: {moviedetail.release_date}</Text>
            <Text style={styles.text}>Status: {moviedetail.status}</Text>
            <Text style={styles.text}>Tagline: {moviedetail.tagline}</Text>
          </View>

        </ScrollView>

      </View>
    </View>
  )
}

export default DetailsMovie

const styles = StyleSheet.create({
  imageText: {
    color: "white",
    fontSize: 30,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign:'center',
    backgroundColor: "#000000c0",
    textAlignVertical:'bottom'
  },
  text:{
    fontSize:20,
  }
})