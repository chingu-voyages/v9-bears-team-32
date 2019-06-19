import iValidationState from '../constants/types/iValidationStates';
import ValidationState from './ValidationState';

// can pass plugin styled validations
// can pass error info (dirty, invalid, etc.)

// state settings => stateName. validations,

class Validator {
  validationStates: Array<iValidationState>;

  constructor(state: object, stateSettings: object) {
    this.validationStates = this.prepareValidationStates(state, stateSettings);
  }

  private prepareValidationStates(state: any, stateSettings: any): Array<iValidationState> {
    const validationObjects = Object.keys(state).map((state: string) => {
      //@todo parse stateSettings validations
      return new ValidationState(state, stateSettings);
    });

    return validationObjects;
  }

  public required(value: any) {
    if(value === undefined || value === null || value === '' || !value.length) {
      return false;
    }
    return true;
  }

  public checkValidations() {

  }
}

export default Validator;
