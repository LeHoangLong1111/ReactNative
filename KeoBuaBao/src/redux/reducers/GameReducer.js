import {Paper, Rock, Scissor} from '../../assets/images/index';
import {PLAY, PLAYER_SELECT, RESET, RESULT} from '../actions/gameActions';

const initialState = {
  arrayGame: [
    {id: 'scissor', image: Scissor, status: false},
    {id: 'rock', image: Rock, status: false},
    {id: 'paper', image: Paper, status: true},
  ],
  playerSelect: {id: 'paper', image: Paper, status: true},
  botSelect: {id: 'rock', image: Rock, status: false},
  score: 0,
  times: 9,
  disable: false,
};

const gameReducer = (state = {...initialState}, action) => {
  // console.log(state);
  switch (action.type) {
    case PLAYER_SELECT:
      let tempState = {...state};
      let newArrayGame = [...tempState.arrayGame];
      const selectItem = newArrayGame.find(
        item => item.id === action.payload.id,
      );
      if (!selectItem.status) {
        const previousSelect = newArrayGame.find(item => item.status);
        selectItem.status = true;
        previousSelect.status = false;
        tempState.arrayGame = newArrayGame;
      }
      tempState.playerSelect = selectItem;
      // console.log(selectItem);
      // console.log(tempState.arrayGame);
      // console.log(tempState.playerSelect);
      return tempState;

    case PLAY:
      let tempState2 = {...state};
      tempState2.botSelect = tempState2.arrayGame[action.payload];
      return tempState2;

    case RESULT:
      let tempState3 = {...state};
      switch (tempState3.playerSelect.id) {
        case 'paper':
          if (tempState3.botSelect.id === 'paper') {
            tempState3.times--;
          } else if (tempState3.botSelect.id === 'rock') {
            tempState3.score++;
          } else {
            if (tempState3.score > 0) {
              tempState3.score--;
            }
            tempState3.times--;
          }
          break;
        case 'rock':
          if (tempState3.botSelect.id === 'rock') {
            tempState3.times--;
          } else if (tempState3.botSelect.id === 'scissor') {
            tempState3.score++;
          } else {
            if (tempState3.score > 0) {
              tempState3.score--;
            }
            tempState3.times--;
          }
          break;
        case 'scissor':
          if (tempState3.botSelect.id === 'scissor') {
            tempState3.times--;
          } else if (tempState3.botSelect.id === 'paper') {
            tempState3.score++;
          } else {
            if (tempState3.score > 0) {
              tempState3.score--;
            }
            tempState3.times--;
          }
          break;
      }
      return tempState3;

    case RESET:
      // console.log(state);
      // const ob = {...initialState};
      // console.log(ob);
      const arrayGame = [
        {id: 'scissor', image: Scissor, status: false},
        {id: 'rock', image: Rock, status: false},
        {id: 'paper', image: Paper, status: true},
      ];
      return {...state, ...initialState, arrayGame};
    default:
      return {...state};
  }
};

export default gameReducer;
