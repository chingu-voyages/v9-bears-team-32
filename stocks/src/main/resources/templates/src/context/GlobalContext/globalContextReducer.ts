import iGlobalContextState from "../../constants/types/iGlobalContextState";
import iAction from "../../constants/types/iAction";
import actions from './globalContextActions';

function globalContextReducer(state: iGlobalContextState, action: iAction) {
  return actions[action.type](state, action);
}

export default globalContextReducer;
