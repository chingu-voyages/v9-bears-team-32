import iGlobalContextState from "../../constants/types/iGlobalContextState";
import iAction from "../../constants/types/iAction";

export const ACTION_TYPES = {
  UPDATE_USERNAME: 'UPDATE_USERNAME',
}

const actions = {
  [ACTION_TYPES.UPDATE_USERNAME]: (state: iGlobalContextState, action: iAction) =>{
    return {...state, username: action.payload};
  }
}

export default actions;