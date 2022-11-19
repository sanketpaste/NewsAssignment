import { ScrollView, StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Button } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { ColorThemeContext } from '../../context/theme_context';

import { useNavigation } from '@react-navigation/native';
import ListItem from '../../components/ListItem';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../store/actions/common_action';
import DataReducer from '../../store/reducers/Common';





const PoliticsScreen = ({ navigation }) => {

  const dispatch = useDispatch()

  const { data } = useSelector(
    state => state.DataReducer
  )

  useEffect(()=>{
    dispatch(getData())
  },[])

  const theme = useContext(ColorThemeContext)
  const renderItem = ({ item }) => {
    const pressHandler = () => {
      navigation.navigate('NewsDetail',{
        titleId:item.title
      })
    }
    console.log('item data',item); 
    return (
      <ListItem title={item.title}  onPress={pressHandler} />
    )
  };

console.log('updated data',data);

  return (
   
    <SafeAreaView style={[styles.container, { backgroundColor: theme.Colors.COLOR_BACKGROUND }]}>
      <View style={{ padding: 20 }}>

        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Breaking News</Text>


        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}

        />


      </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});


export default PoliticsScreen

