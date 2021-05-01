import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import IconButton from './IconButton'

export default class RenderIcon extends Component {

    state = {
        img:[
            {imgurl: require('../assets/images/love.png')},
            {imgurl: require('../assets/images/angry.png')},
            {imgurl: require('../assets/images/care.png')},
            {imgurl: require('../assets/images/haha.png')},
            {imgurl: require('../assets/images/like.png')},
            {imgurl: require('../assets/images/sad.png')},
        ],

        selectedIcon: require('../assets/images/love.png'),
    }

    handleIcon = icon => {
        this.setState(icon)
    }

    showListIcon = () => {
        return this.state.img.map(item => {
            return (
                <TouchableOpacity 
                    style={styles.Button} 
                    onPress={() => {
                        this.setState({
                            selectedIcon: item.imgurl
                        })
                }}>
                    <Image style={styles.ButtonImage} source={item.imgurl} />
                </TouchableOpacity>
            )
        })
    }

    render() {
        return (
            <>
                <View style={styles.Container}>
                    <Image source={this.state.selectedIcon} />
                </View>

                <View style={styles.rowContainer}>
                    {this.showListIcon()}
                    
                </View>

                {/* <View>
                    <IconButton icon={'love'} />
                    <IconButton icon={'sad'} />
                    <IconButton icon={'haha'} />
                </View> */}
                
            </>
        )
    }
}

const styles = StyleSheet.create({
    Container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    rowContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    Button: {
        marginHorizontal: 10
    },

    ButtonImage: {
        width: 50,
        height: 50, 
    }
})

