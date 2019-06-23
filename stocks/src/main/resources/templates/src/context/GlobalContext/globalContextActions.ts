import iGlobalContextState from "../../constants/types/iGlobalContextState";
import iAction from "../../constants/types/iAction";

export const ACTION_TYPES = {
  UPDATE_USER_DETAILS: 'UPDATE_USER_DETAILS',
}

const actions = {
  [ACTION_TYPES.UPDATE_USER_DETAILS]: (state: iGlobalContextState, action: iAction) =>{
    return {...state, user: action.payload};
  }
}

export default actions;