import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={style.container}>
      <View style={style.top}>
        <View style={style.topBox}></View>
        <View style={style.topBox}></View>
      </View>
      <View style={ style.bottom}>
        <View style={style.bottomBox}>
          <View style={style.bottomBoxSmal}></View>
          <View style={style.bottomBoxSmal}></View>
        </View>

        <View style={style.bottomBox}>
          <View style={style.bottomBoxSmal}></View>
          <View style={style.bottomBoxSmal}></View>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex:1,
  },

  top: {
    flex: 1,
    backgroundColor: '#A1c99A',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  bottom: {
    flex: 1,
    backgroundColor: '#c8c8fA',
    marginTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },

  topBox: {
    flex: 1,
    backgroundColor: '#ffffc2',
    borderRadius: 10,
    marginHorizontal: '5%',
    marginVertical: '6%'
  },

  bottomBox: {
    flex: 1,
    flexDirection: 'row',
  },

  bottomBoxSmal: {
    flex: 1,
    backgroundColor: '#4f82c0',
    borderRadius: 20,
    margin: '5%',
  }

})

export default App;