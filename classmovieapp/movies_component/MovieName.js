import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

const MovieName = ({ Item, navigation }) => {

    

    const [movienames, setMovienames] = useState([])

    const MOVIE_URL = `https://api.themoviedb.org/3/genre/${Item.id}/movies?api_key=68e82445c8842ba8616d0f6bf0e97a41`

    const getmovieData = async () => {

        const result = await fetch(MOVIE_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const list = await result.json();
        const movienames = list.results
        setMovienames(movienames)
        console.log('moviename', movienames);
    }

    useEffect(() => {
        getmovieData()
    },[])

    const MovetoDetails = (about_movies) => {
        navigation.navigate('MoviesDetail', {
            about_movies: about_movies
        })
    }


    return (
        <View style={{ flex: 1 }} >
           <Text>{Item.name}</Text>

            <FlatList
                style={{ width: '100%' }}
                data={movienames}
                keyExtractor={(item, index) => index.toString()}
                horizontal={true}
                renderItem={({ item }) => (
                    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress={() => MovetoDetails(item)} >
                        <Image
                            style={{ height: 350, width: 300 }}
                            source={{
                                uri: `https://image.tmdb.org/t/p/original/${item?.poster_path}`
                            }} />
                        <Text>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />

        </View>
    )
}

export default MovieName

const styles = StyleSheet.create({})




