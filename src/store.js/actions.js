export const CLEAR_CART = () => {
  return {
    type: 'CLEARCART'
  };
};

export const REMOVE_ITEM = id => {
  return {
    type: 'REMOVE_ITEM',
    payload: {
      id: id
    }
  };
};

export const INCREASE_ITEM = id => {
  return {
    type: 'INCREASE_ITEM',
    payload: {
      id: id
    }
  };
};
export const DECREASE_ITEM = id => {
  return {
    type: 'DECREASE_ITEM',
    payload: {
      id: id
    }
  };
};
