import { FlatList, Text, View } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { moviesList } from '../../src/store/actions/common_action'
import MovieName from '../movies_component/MovieName'

 class MoviesHome extends Component {

    componentDidMount() {
        this.props.MOVIELIST()
    }

    renderItem = (itemData) =>  
        <View>
            <MovieName  Item={itemData.item}  navigation={this.props.navigation}/>
            
        </View>
    

     render() {

        console.log('moviedata', this.props.data);
        return (
            <View>
                <FlatList
                    data={this.props.data}
                    renderItem={this.renderItem}
                />
                
            </View>
        )
    }
}

const mapStateToProps = state => {
    let data = state.MoviesListReducer.list
    return {
        data,
    }
}
const mapDispatchToProps = {
    MOVIELIST: moviesList
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesHome) 