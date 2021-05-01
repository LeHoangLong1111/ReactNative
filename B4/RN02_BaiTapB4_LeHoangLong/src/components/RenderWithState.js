import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default class RenderWithState extends Component {
    //c1: Sử dụng constructor để khai báo
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
        }
    }

    // C2: Khai báo rút gọn
    // state = {
    //     isLogin: false,
    // }    

    //this.setState là hàm bất đồng bộ
    handleLogin = () => {
        this.setState({
            isLogin: true,
        }, 
        () => {
            console.log(this.state.isLogin);
        });
        
    }

    handleLogout = () => {
        this.setState({
            isLogin: false
        }, () => {
            console.log(this.state.isLogin);
        })
    };

    renderLogin = () => {
        if (this.state.isLogin) {
            return (
                <>
                   <Text style={styles.TextStyle}>Hello React Native</Text>
                    <TouchableOpacity style={styles.Button} onPress={this.handleLogout}>
                        <Text style={styles.TextStyle}>Logout</Text>
                    </TouchableOpacity>
                </>
            )
        }
        return (
            <TouchableOpacity style={styles.Button} onPress={this.handleLogin}>
                <Text style={styles.TextStyle}>Login</Text>
            </TouchableOpacity>
        )
        
    }

    render() {
        console.log('render');
        return (
            <View style={styles.Container}>{this.renderLogin()}</View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    Button: {
        backgroundColor: 'green',
        paddingHorizontal:25,
        paddingVertical: 15,
        borderRadius: 8,
        marginVertical: 10
        
    },

    TextStyle: {
        fontSize:20,
        fontWeight: 'bold',

    }
})
