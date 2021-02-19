import React, { useEffect, useState } from 'react';

import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Footer from 'src/components/Footer';

import './styles.scss';

import fakeData from 'src/data/currencies';

const App = () => {
  const [currencies, setCurrencies] = useState(fakeData);
  const [currencyBase, setCurrencyBase] = useState('euro');
  const [baseAmount, setBaseAmount] = useState(1);
  const [selectedCurrency, setSelectedCurrency] = useState(fakeData[0]);

  const handleItemClick = (name) => {
    const findCurrency = currencies.find((el) => el.name === name);
    setSelectedCurrency(findCurrency);
  };

  return (
    <section className="app">

      <Header currencyBase={currencyBase} baseAmount={baseAmount} />
      <Currencies
        currencies={currencies}
        handleItemClick={handleItemClick}
      />
      <Footer exchangeData={selectedCurrency} />

    </section>
  );
};

export default App;
