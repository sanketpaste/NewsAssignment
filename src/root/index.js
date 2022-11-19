import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import ColorThemeProvider from '../context/theme_context'
import { Provider } from 'react-redux'


import App from '../../moviesapp/App'
import Main from '../../classmovieapp/Main'
import store from '../store/configur_store'



const Start = () => {
    return (
        <Provider store={store}>
           <Main/>
        </Provider>
    )
}

export default Start

const styles = StyleSheet.create({})

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const Satrt = () => {
//   return (
//     <View>
//       <Text>Satrt</Text>
//     </View>
//   )
// }

// export default Satrt

// const styles = StyleSheet.create({})