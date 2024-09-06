export const SET_OVERFLOW = 'SET_OVERFLOW';

interface SetOverflowAction {
  type: typeof SET_OVERFLOW;
  payload: boolean;
}

export type OverflowActionTypes = SetOverflowAction;


export const setOverflow = (isOverflow: boolean) => {
  return {
    type: 'SET_OVERFLOW',
    payload: isOverflow,
  };
};
