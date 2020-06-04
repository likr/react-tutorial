import React from "react";

const Hero = () => {
  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Section</h1>
          <h2 className="subtitle">hogehoge</h2>
        </div>
      </div>
    </section>
  );
};

const Body1 = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="content">
          <p>好きにおしゃれなサイトを作ってください</p>
        </div>
      </div>
    </section>
  );
};

const Form = () => {
  return (
    <section className="section">
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input className="input" />
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>&copy; 2020 Yosuke Onoue</p>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div>
      <Hero />
      <Body1 />
      <Form />
      <Footer />
    </div>
  );
};

export default App;
