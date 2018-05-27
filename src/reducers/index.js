import { combineReducers } from 'redux';

export default combineReducers ({
  linkReducers: () => {
    console.log('111')
    return[
      {id: '123', title: 'Title one', destination: 'http://title.com', shortUrl: 't1.co'},
      {id: '345', title: 'Title two', destination: 'http://title2.com', shortUrl: 't2.co'},
      {id: '567', title: 'Title three', destination: 'http://title3.com', shortUrl: 't3.co'}

    ]
  },
  selectReducers: (state = {}, action) => {
    console.log('222',action)
    if(action.type == 'SET_SELECTED_LINK'){
      return action.payload
    }
    else {
      return {}
    }

  }
})
