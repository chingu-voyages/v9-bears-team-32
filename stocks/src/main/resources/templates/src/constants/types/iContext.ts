import { iGlobalContextState } from ".";

export default interface iContext {
  state: iGlobalContextState;
  dispatch: ({type, payload}: {type:string, payload: any}) => void;
}