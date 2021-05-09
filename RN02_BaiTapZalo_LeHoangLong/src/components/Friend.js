import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Friend extends Component {
  DATA = [
    {
      name: 'BlackWidow',
      img: require('../assets/images/blackwidow.jpeg'),
    },

    {
      name: 'Captain',
      img: require('../assets/images/captain.jpg'),
    },

    {
      name: 'Flash',
      img: require('../assets/images/flash.jpg'),
    },

    {
      name: 'Ironman',
      img: require('../assets/images/ironman.jpeg'),
    },
    {
      name: 'SpiderMan',
      img: require('../assets/images/spiderman.jpeg'),
    },
    {
      name: 'Strange',
      img: require('../assets/images/strange.jpg'),
    },
    {
      name: 'SupperGirl',
      img: require('../assets/images/suppergirl.jpg'),
    },
    {
      name: 'Wanda',
      img: require('../assets/images/wanda.jpg'),
    },
    {
      name: 'WonderWoman',
      img: require('../assets/images/wonderwoman.jpg'),
    },
    {
      name: 'Yasuo',
      img: require('../assets/images/yasuo.jpg'),
    },
  ];

  renderItemViewTop = item => {
    return (
      <View style={styles.viewTopItem}>
        <Image style={styles.images} source={item.img} />
        <Text style={styles.name}>{item.name}</Text>
      </View>
    );
  };

  renderItemViewBottom = item => {
    return (
      <View style={styles.viewBottomItem}>
        <Image style={styles.images} source={item.img} />
        <View style={styles.titleBotItem}>
          <Text style={styles.name}>{item.name}</Text>
          <Text>15 bạn chung</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text>Kết bạn</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.viewTop}>
          <Text style={styles.textHeader}>
            <Icon name="history" size={20} color="black" /> Danh Sách tìm kiếm
            gần đây
          </Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={this.DATA}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => this.renderItemViewTop(item)}
          />
        </View>

        <View style={styles.viewBottom}>
          <Text style={styles.textHeader}>
            <Icon name="user-friends" size={20} color="black" /> Gợi ý kết bạn
          </Text>

          <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={this.DATA}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => this.renderItemViewBottom(item)}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  viewTop: {
    flex: 1,
  },

  viewBottom: {
    flex: 3,
  },

  textHeader: {
      paddingStart: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },

  name: {
    fontWeight: 'bold',
  },

  viewTopItem: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },

  viewBottomItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '96%',
    margin: 8,
    height: 100,
    borderRadius: 10,
    backgroundColor: '#D3D3D3',
    padding: '2%',
  },

  images: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },

  button: {
    alignItems: 'center',
    backgroundColor: 'rgb(100,149,237)',
    padding: 10,
    borderRadius: 15,
  },

  titleBotItem: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '50%',
  },
});
