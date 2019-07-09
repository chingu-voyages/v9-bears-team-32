import iStockInfo from "./iStockInfo";

export default interface iBuyModal {
  setShowBuyModal: (show: boolean) => void,
  setStockSymbol: (symbol: string) => void,
  searchStockInfo: () => void,
  sendPurchaseRequest: () => void,
  setQuantity: (quantity: number) => void,
  stockInfo: iStockInfo,
  quantity: number,
  totalCost: number,
}