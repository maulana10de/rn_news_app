const INITIAL_STATE = {
  news: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_NEWS':
      // console.log('CHECK REDUCER :', action.payload);
      return {...state, news: action.payload};

    default:
      return state;
  }
};
