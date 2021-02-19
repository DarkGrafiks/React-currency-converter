import React, { useState } from 'react';

import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Footer from 'src/components/Footer';

import './styles.scss';

import fakeData from 'src/data/currencies';

const App = () => {
  const [currencies, setCurrencies] = useState(fakeData);
  const [currencyBase, setCurrencyBase] = useState('euro');
  const selectedCurrency = 'United States Dollar';
  const exchangeRate = 1.259876;

  return (
    <section className="app">

      <Header currencyBase={currencyBase} />
      <Currencies currencies={currencies} />
      <Footer currency={selectedCurrency} exchangeRate={exchangeRate} />

    </section>
  );
};

export default App;
