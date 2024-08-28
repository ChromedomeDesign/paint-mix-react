import { SET_OVERFLOW, OverflowActionTypes } from './overflowActions';

interface OverflowState {
  isOverflow: boolean;
}

const initialState: OverflowState = {
  isOverflow: false,
};

const overflowReducer = (state = initialState, action: OverflowActionTypes): OverflowState => {
  switch (action.type) {
    case SET_OVERFLOW:
      return {
        ...state,
        isOverflow: action.payload,
      };
    default:
      return state;
  }
};

export default overflowReducer;
