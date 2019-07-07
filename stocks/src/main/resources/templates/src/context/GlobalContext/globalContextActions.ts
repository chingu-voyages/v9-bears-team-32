import iGlobalContextState from "../../constants/types/iGlobalContextState";
import iAction from "../../constants/types/iAction";

export const ACTION_TYPES = {
  UPDATE_USER_DETAILS: 'UPDATE_USER_DETAILS',
  UPDATE_STOCKS: 'UPDATE_STOCKS',
}

const actions = {
  [ACTION_TYPES.UPDATE_USER_DETAILS]: (state: iGlobalContextState, action: iAction): iGlobalContextState =>{
    return {...state, user: action.payload};
  },
  [ACTION_TYPES.UPDATE_STOCKS]: (state: iGlobalContextState, action: iAction): iGlobalContextState =>  {
    return {...state, user: {...state.user, stocks: action.payload}};
  }
}

export default actions;