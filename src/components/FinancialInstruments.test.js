import { render, screen, fireEvent } from '@testing-library/react';
import FinancialInstruments from './FinancialInstruments';

describe("FinancialInstruments", () => {
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
    render(<FinancialInstruments data={data} />);
  })


  it("should have title", () => {
    const heading = screen.queryByText(/financial instruments/i);
    expect(heading).toBeInTheDocument();
  });

  it("should click Price option", () => {
    const priceRadio = screen.getByLabelText('Price');
    expect(priceRadio).not.toBeChecked();
    fireEvent.click(priceRadio);
    expect(priceRadio).toBeChecked();
  });

  it("should click Asset Class option", () => {
    const assetClass = screen.getByLabelText('Asset Class');
    expect(assetClass).not.toBeChecked();
    fireEvent.click(assetClass);
    expect(assetClass).toBeChecked();
  });

  it("should click Ticker option", () => {
    // first click on price then click ticker option
    const priceRadio = screen.getByLabelText('Price');
    expect(priceRadio).not.toBeChecked();
    fireEvent.click(priceRadio);
    expect(priceRadio).toBeChecked();

    const assetClass = screen.getByLabelText('Ticker');
    expect(assetClass).not.toBeChecked();
    fireEvent.click(assetClass);
    expect(assetClass).toBeChecked();
  });

  afterEach(() => jest.clearAllMocks())

})

