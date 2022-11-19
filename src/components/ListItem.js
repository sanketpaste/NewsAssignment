import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { ColorThemeContext } from '../context/theme_context'

const ListItem = ({ title, onPress }) => {
  const theme = useContext(ColorThemeContext)
  return (
    <TouchableOpacity style={[styles.item]} onPress={onPress}>
     
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      

        <View style={{ flex: 1, marginLeft: -30, paddingVertical: 20, paddingLeft: 33, paddingRight: 10, borderRadius: 6, backgroundColor: theme.Colors.COLOR_CARD }}>
          <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
            <Text style={[styles.title, { color: theme.Colors.COLOR_FONT }]}>{title}</Text>

          </View>

          <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-start' }}>
            <Text style={[styles.sub_title, { color: theme.Colors.COLOR_FONT }]}>Mob :6362t </Text>
            <Text style={[styles.sub_title, { color: theme.Colors.COLOR_FONT }]}>  Addre :jjd</Text>
          </View>
        </View>

      </View>
    </TouchableOpacity>
  )
}

export default ListItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    // marginLeft:-46,
    paddingVertical: 5, paddingHorizontal: 10, borderRadius: 6
  },
  title: {
    fontSize: 16, fontFamily: 'Montserrat-Medium'
  },
  sub_title: {
    fontSize: 13, fontFamily: 'Montserrat-Regular'
  },
  count: {
    fontSize: 14, fontWeight: '400', fontFamily: 'Montserrat-Regular'
  },
})