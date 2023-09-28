import { sortByAssetClass, sortByNumber, sortByString } from "./helper"
describe("helper functions", () => {
  const items = [
    {
      "ticker": "ALPHA",
      "price": "3150.68",
      "assetClass": "Credit"
    },
    {
      "ticker": "BETA",
      "price": "3250.68",
      "assetClass": "Equities"
    },
    {
      "ticker": "GAMMA",
      "price": "2290.1",
      "assetClass": "Macro"
    }]

  describe("sortbyString", () => {
    test("sort by ascending order", () => {
      const result = sortByString(items, 'ticker', false)
      const expected = [
        { ticker: 'ALPHA', price: '3150.68', assetClass: 'Credit' },
        { ticker: 'BETA', price: '3250.68', assetClass: 'Equities' },
        { ticker: 'GAMMA', price: '2290.1', assetClass: 'Macro' }
      ]
      expect(result).toEqual(expected)
    })

    test("sort by descending order", () => {
      const result = sortByString(items, 'ticker', true)
      const expected = [
        { ticker: 'GAMMA', price: '2290.1', assetClass: 'Macro' },
        { ticker: 'BETA', price: '3250.68', assetClass: 'Equities' },
        { ticker: 'ALPHA', price: '3150.68', assetClass: 'Credit' }
      ]

      expect(result).toEqual(expected)
    })

    test("if equal key value found", () => {
      const items = [
        { ticker: 'ALPHA', price: '3150.68', assetClass: 'Credit' },
        { ticker: 'ALPHA', price: '3250.68', assetClass: 'Equities' },
      ]
      const result = sortByString(items, 'ticker')
      const expected = [
        { ticker: 'ALPHA', price: '3150.68', assetClass: 'Credit' },
        { ticker: 'ALPHA', price: '3250.68', assetClass: 'Equities' }
      ]
      expect(result).toEqual(expected)
    })
  })

  describe("sortbyNumber", () => {
    test("sort by ascending order", () => {
      const result = sortByNumber(items, 'price')
      const expected = [
        { ticker: 'GAMMA', price: '2290.1', assetClass: 'Macro' },
        { ticker: 'ALPHA', price: '3150.68', assetClass: 'Credit' },
        { ticker: 'BETA', price: '3250.68', assetClass: 'Equities' }
      ]
      expect(result).toEqual(expected)
    })

    test("sort by descending order", () => {
      const result = sortByNumber(items, 'price', true)
      const expected = [
        { ticker: 'BETA', price: '3250.68', assetClass: 'Equities' },
        { ticker: 'ALPHA', price: '3150.68', assetClass: 'Credit' },
        { ticker: 'GAMMA', price: '2290.1', assetClass: 'Macro' }
      ]
      expect(result).toEqual(expected)
    })
  })

  describe("sortbyAssetClass", () => {
    test("sort by ascending order", () => {
      const items = [
        { ticker: 'BETA', price: '3250.68', assetClass: 'Equities' },
        { ticker: 'ALPHA', price: '3150.68', assetClass: 'Credit' },
        { ticker: 'GAMMA', price: '2290.1', assetClass: 'Macro' },
        { ticker: 'DELTA', price: '2545.68', assetClass: 'Equities' },
      ]
      const result = sortByAssetClass(items, ['Equities', 'Credit', 'Macro'])
      const expected = [
        { ticker: 'BETA', price: '3250.68', assetClass: 'Equities' },
        { ticker: 'DELTA', price: '2545.68', assetClass: 'Equities' },
        { ticker: 'ALPHA', price: '3150.68', assetClass: 'Credit' },
        { ticker: 'GAMMA', price: '2290.1', assetClass: 'Macro' }
      ]
      expect(result).toEqual(expected)
    })
  })


})