import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Side from './Side';
import Article from './Article';

const App = () => (
  <>
    <Header />
    <Nav />
    <main className="pa3 pt0" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gridGap: '1rem' }}>
      <section style={{ display: 'grid', gridGap: '1rem' }}>
        {['Article 1', 'Article 1', 'Article 1'].map((_, index) =>
          <Article key={index} />)}
      </section>
      <Side />
    </main>
  </>
);

export default App;