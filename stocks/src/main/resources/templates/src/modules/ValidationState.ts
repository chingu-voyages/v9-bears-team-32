
class ValidationState {
  stateName: string;
  invalid: boolean;
  dirty: boolean;
  validations: Array<any>;

  constructor(stateName: string, validations: Array<any>) {
    this.stateName = stateName;
    this.invalid = true;
    this.dirty = true;
    this.validations = [];
  }
}

export default ValidationState;