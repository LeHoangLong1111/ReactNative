import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';

export default class Demo extends Component {
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  renderItem = () => {
    return this.array.map((item, index) => {
      return (
        <View style={[styles.item,{backgroundColor:`#${Math.floor(Math.random()*16777215+index*10,).toString(16)}`}]} key={index}>
          <Text> Item {index+1} </Text>
        </View>
      );
    });
  };

  render() {
    return (
    <View style={styles.screenContainer}>
        <ScrollView>
            {this.renderItem()}
        </ScrollView>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 20,
  },

  item: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fbf',
    marginBottom: 20,
    backgroundColor: `#${Math.floor(Math.random()*16777215,).toString(16)}`
  },
});
