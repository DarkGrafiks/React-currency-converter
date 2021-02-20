import React, { useState } from 'react';

import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Footer from 'src/components/Footer';

import './styles.scss';

import fakeData from 'src/data/currencies';

const App = () => {
  const [currencies, setCurrencies] = useState(fakeData);
  const [filteredCurrencies, setFilteredCurrencies] = useState(currencies);
  const [baseAmount, setBaseAmount] = useState(1);
  const [selectedCurrency, setSelectedCurrency] = useState(fakeData[0]);
  const [exchangeAmount, setExchangeAmount] = useState(selectedCurrency.rate);
  const [searchValue, setSearchValue] = useState('');
  /**
   * Function who update the selected currency on click event on currencies list item's.
   * And update the exchange amount.
   * @param {string} name
   */
  const handleItemClick = (name) => {
    const findCurrency = currencies.find((el) => el.name === name);
    setSelectedCurrency(findCurrency);
    setExchangeAmount(findCurrency.rate * baseAmount);
  };

  /**
   * Function who update the base amount on change event on input.
   * And update also the exchange amount with this new value.
   * @param {string} name
   */
  const handleBaseAmountChange = (value) => {
    setBaseAmount(value);
    setExchangeAmount(selectedCurrency.rate * value);
  };

  /**
   * Function who update the search value and filtered currencies list.
   * @param {string} value
   */
  const handleChangeSearch = (value) => {
    const searchCurrencies = currencies.filter((el) => (
      el.name.toLowerCase().includes(value.toLowerCase())
    ));
    setSearchValue(value.toLowerCase());
    setFilteredCurrencies(searchCurrencies);
  };

  return (
    <section className="app">

      <Header
        baseAmount={Number(baseAmount)}
        handleBaseAmountChange={handleBaseAmountChange}
      />
      <Currencies
        selectedCurrency={selectedCurrency}
        currencies={filteredCurrencies}
        searchValue={searchValue}
        handleChangeSearch={handleChangeSearch}
        handleItemClick={handleItemClick}
      />
      <Footer exchangeData={selectedCurrency} exchangeAmount={exchangeAmount} />

    </section>
  );
};

export default App;
