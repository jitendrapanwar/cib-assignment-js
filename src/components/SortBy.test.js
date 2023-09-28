import { render, screen, fireEvent } from '@testing-library/react';
import SortBy from './SortBy';

describe("SortBy", () => {


  beforeEach(() => {
    render(<SortBy SortBy options={['Ticker', 'Price', 'Asset Class']} defaultSelected='Ticker' onChange={() => jest.fn()} />);

  })

  it("should have title sortBy", () => {
    const heading = screen.queryByText(/sort by/i);
    expect(heading).toBeInTheDocument();
  });

  it("should have three radio buttons", () => {
    const options = screen.getAllByRole("radio");
    expect(options.length).toBe(3);
  });

  it("should have Ticker as default selected", () => {
    //expect(getByLabelText('Label of Radio')).not.toBeChecked();
    //fireEvent.click(labelRadio);
    expect(screen.getByLabelText('Ticker')).toBeChecked();
    expect(screen.getByLabelText('Price')).not.toBeChecked();
    expect(screen.getByLabelText('Asset Class')).not.toBeChecked();
    expect(screen.getByLabelText('Ticker').value).toBe('Ticker')
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


  afterEach(() => jest.clearAllMocks())

})

