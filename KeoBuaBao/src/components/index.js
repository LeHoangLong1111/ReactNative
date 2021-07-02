import React, {Component} from 'react';
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  View,
  SafeAreaView,
} from 'react-native';
import {BackgroundImage, Player, Bot} from '../assets/images/index';
import PlayerItem from './PlayerItem';
import ResultContent from './ResultContent';
import SelectContent from './SelectContent';
import {connect} from 'react-redux';

class Index extends Component {
  render() {
    const {playerSelect, botSelect} = this.props;
    // console.log('abc: ', this.props);
    return (
      <ImageBackground
        style={styles.backgroundContent}
        source={BackgroundImage}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.overplay}>
          <SafeAreaView style={styles.container}>
            <View style={styles.playerContent}>
              <PlayerItem imageGame={playerSelect.image} imagePlayer={Player} />
              <PlayerItem imageGame={botSelect.image} imagePlayer={Bot} />
            </View>

            <View style={styles.selectContent}>
              <SelectContent
              // arrayGame={this.state.arrayGame}
              />
            </View>
            <View style={styles.infoContent}>
              <ResultContent
              // score={this.state.score}
              // times={this.state.times}
              />
            </View>
          </SafeAreaView>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContent: {
    flex: 1,
  },

  overplay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  container: {
    flex: 1,
  },

  playerContent: {
    flex: 1.5,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    // backgroundColor: 'gray',
  },

  selectContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    paddingTop: 60,
    // alignContent: 'center',
    // backgroundColor: 'blue',
  },

  infoContent: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'pink',
  },
});

const mapStateToProp = state => {
  return {
    playerSelect: state.gameReducer.playerSelect,
    botSelect: state.gameReducer.botSelect,
  };
};

export default connect(mapStateToProp)(Index);
