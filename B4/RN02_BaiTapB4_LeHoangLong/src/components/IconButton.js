import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native'
import images from '../assets/images/index' 
export default class IconButton extends Component {
    render() {
        //love
        console.log(this.props.icon);
        return (
            <TouchableOpacity 
                    style={styles.Button} >
                    <Image style={styles.ButtonImage} source={images[this.props.icon]} />
                </TouchableOpacity>
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