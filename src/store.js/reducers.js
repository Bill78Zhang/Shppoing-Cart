import {initStore} from './configureStore';

const reducer = (state = initStore, action) => {
  const {type, payload} = action;
  switch (type) {
    case 'CLEARCART':
      return {
        ...state,
        items: []
      };
    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => {
        if (item.id !== payload.id) {
          return item;
        }
      });

      return {
        ...state,
        items: newItems
      };
    }
    case 'INCREASE_ITEM': {
      const newItems = state.items.map(item => {
        if (item.id === payload.id) {
          item.amount++;
        }
        return item;
      });
      return {
        ...state,
        items: newItems
      };
    }
    case 'DECREASE_ITEM': {
      const newItems = state.items.map(item => {
        if (item.id === payload.id && item.amount > 0) {
          item.amount--;
        }
        return item;
      });
      return {
        ...state,
        items: newItems
      };
    }
    default:
      return state;
  }
};

export default reducer;
