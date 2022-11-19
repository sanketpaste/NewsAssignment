import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MoviesListReducer from '../../src/store/reducers/MoviesListReducer'
import { moviesList, moviesListHorizontal } from '../../src/store/actions/common_action'
import FlatListItem from '../Components/FlatListItem'

const MoviesListScreen = ({ navigation }) => {
  const dispatch = useDispatch()

  const { list } = useSelector(
    state => state.MoviesListReducer
  )
  
  useEffect(() => {
    dispatch(moviesList())
  }, [])

  return (
    <View style={{flex:1}}>
            <FlatList
             data={list} 
             renderItem={({item})=>(
              <FlatListItem Item={item} navigation={navigation}/>
             )}
            />
    </View>
  )
}

export default MoviesListScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  }
})