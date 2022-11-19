import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'



const FlatListItem = ({ Item, onPress, navigation }) => {

  const [movies_list, set_movies_list] = useState([])

  const MOVIESLIST1_URL = `https://api.themoviedb.org/3/genre/${Item.id}/movies?api_key=68e82445c8842ba8616d0f6bf0e97a41`

  const getData = async () => {
    console.log(Item.name, Item.id);
    console.log(Item.name, MOVIESLIST1_URL);


    const result = await fetch(MOVIESLIST1_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const list = await result.json();
    const moviesList = list.results
    set_movies_list(moviesList)
    console.log('check data', Item.name, moviesList);

  }
  useEffect(() => {
    getData()
  }, [])

  const onMoviesItemClick = (movies_item_) => {
   
    navigation.navigate('Detail', {
      movies_item: movies_item_
    })
  }
  return (
    <View style={{ flex: 1 }}>
      <Text style={{fontWeight:'bold',fontSize:24}}>{Item.name}</Text>
      {(movies_list && movies_list.length > 0) &&
        <FlatList
          style={{ width: '100%' }}
          data={movies_list}
          horizontal={true}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (

            <TouchableOpacity onPress={() => onMoviesItemClick(item)}>
              <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Image
                  style={{ height: 200, width: 200 }}
                  source={{
                    uri: `https://image.tmdb.org/t/p/original/${item?.poster_path}`
                  }} />
                  
              </View>
             
              <Text style={{textAlign:'center',fontWeight:'bold'}}>{item.title}</Text>
            </TouchableOpacity>


          )}
        />}
    </View>
  )
}

export default FlatListItem

const styles = StyleSheet.create({})