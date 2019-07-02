import { iStock } from ".";

export default interface iUser {
  cash: number,
  displayName: string,
  email: string,
  investedBalance: number,
  username: string,
  stocks?: Array<iStock>,
}
