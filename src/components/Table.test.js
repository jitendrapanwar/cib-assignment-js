import { render, screen } from '@testing-library/react';
import Table from './Table';


describe("Table", () => {
  const cols = ['Ticker', 'Price', "Asset Class"]
  const data = [
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

  beforeEach(() => {
    render(<Table cols={cols} data={data} />);
  })


  it("should have Ticker, Price and Asset Class in the table headers", () => {
    const tableHeaders = screen.getAllByRole("columnheader", {
      name: /ticker|price|asset class/i,
    });
    expect(tableHeaders.length).toBe(3);
  });

  it("should have 4 rows including header row", () => {
    const tableRows = screen.getAllByRole("row");
    expect(tableRows.length).toBe(4);
  });

  describe("Row colour coded classes", () => {

    it("should have asset-class-credit (green colour) for Credit Asset Class", () => {
      const tableRows = screen.getAllByRole("row");
      expect(tableRows[1]).toHaveClass('asset-class-credit')

      // const classes = ['credit', 'equities', 'macro']
      // tableRows.forEach((row, i) => {

      //   screen.debug(row)
      // })

    });

    it("should have asset-class-equities (blue colour) for Equities Asset Class", () => {
      const tableRows = screen.getAllByRole("row");
      expect(tableRows[2]).toHaveClass('asset-class-equities')
    });

    it("should have asset-class-equities (blue colour) for Equities Asset Class", () => {
      const tableRows = screen.getAllByRole("row");
      expect(tableRows[3]).toHaveClass('asset-class-macro')
    });
  })


  afterEach(() => jest.clearAllMocks())

})

