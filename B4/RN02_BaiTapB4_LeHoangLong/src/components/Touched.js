import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from 'react-native'

export default class Touched extends Component {

    handleOnPress = param => {
        console.log((param));
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> textInComponent </Text>

                {/* Không truyền param
                onPress= {this.handleOnPress}
                sử dụng callback function để truyền param */}
                <TouchableOpacity 
                    activeOpacity={0.5} 
                    style={styles.Button}
                    onPress={() => {
                        this.handleOnPress('Hello')
                    }}
                >
                    <Text style={styles.txtButton}>Button</Text>
                </TouchableOpacity>

                {/* <TouchableHighlight style={styles.Button} onPress={this.handleOnPress} underlayColor="blue">
                    <Text style={styles.txtButton}> Button Highlight</Text>
                </TouchableHighlight>

                <TouchableWithoutFeedback style={styles.Button} onPress={this.handleOnPress}>
                    <Text style={styles.txtButton}> Button Withouth Feedback </Text>
                </TouchableWithoutFeedback> */}
            </View>
        )
    }
}

//rns: cú pháp tạo nhanh styles

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    Button: {
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10
    },

    txtButton: {
        fontSize: 20,
        color: 'black'
    }
})

