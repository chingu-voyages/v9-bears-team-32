export default interface iSellModal {
  setShowSellModal: (show: boolean) => void,
  sellStock: (quantity: number) => void,
  symbol: string,
  price: number,
}