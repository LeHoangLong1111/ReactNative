import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import {getResult, play, reset} from '../redux/actions/gameActions';

class ResultContent extends Component {
  onPressPlayButton = () => {
    if (this.props.times > 0) {
      const random = setInterval(() => {
        const id = Math.floor(Math.random() * 3);
        this.props.onPressPlayButton(id);
      }, 200);

      setTimeout(() => {
        clearInterval(random);
        this.props.getResult();
      }, 1500);
    } else {
      Alert.alert('Lượt chơi đã hết', 'Bạn đã thua!! Ấn reset để chơi lại', [
        {text: 'OK', onPress: () => console.log('Okey Pressed')},
      ]);
    }
  };

  render() {
    return (
      <View>
        <View style={styles.infoContent}>
          <Text style={styles.infoTxt}>Score: {this.props.score}</Text>
          <Text style={styles.infoTxt}>Times: {this.props.times}</Text>
        </View>
        <View style={styles.buttonContent}>
          <TouchableOpacity
            disabled={this.props.disable}
            onPress={this.onPressPlayButton}
            style={[
              styles.buttonPlay,
              this.props.disable && {backgroundColor: '#bbb'},
            ]}>
            <Text style={styles.buttonTxt}>Play</Text>
          </TouchableOpacity>
          <LinearGradient
            style={styles.buttonReset}
            colors={['#daaa0c', '#ffce35']}>
            <TouchableOpacity onPress={this.props.onPressResetButton}>
              <Text style={styles.buttonTxt}>Reset</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  infoContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  infoTxt: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#00fecd',
  },

  buttonContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  buttonPlay: {
    height: 50,
    width: 150,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff9aff',
    marginRight: 10,
  },

  buttonReset: {
    height: 50,
    width: 150,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonTxt: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
});

const mapStateToProp = state => ({
  times: state.gameReducer.times,
  score: state.gameReducer.score,
});

const mapDispatchToProp = dispatch => ({
  onPressPlayButton: id => dispatch(play(id)),
  getResult: () => dispatch(getResult()),
  onPressResetButton: () => dispatch(reset()),
});

export default connect(mapStateToProp, mapDispatchToProp)(ResultContent);
