import React, { useEffect, useState } from "react";

const Image = ({ url }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img alt="cute dog!" src={url} />
        </figure>
      </div>
    </div>
  );
};

const Content = ({ data }) => {
  if (data == null) {
    return (
      <div className="content">
        <p>loading...</p>
      </div>
    );
  }
  return (
    <div className="columns is-vcentered is-multiline">
      {data.message.map((url, i) => {
        return (
          <div className="column is-3">
            <Image key={i} url={url} />
          </div>
        );
      })}
    </div>
  );
};

const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/12")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div>
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Cute Dog Images from{" "}
              <a href="https://dog.ceo/dog-api/">Dog API</a>
            </h1>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Content data={data} />
        </div>
      </section>
    </div>
  );
};

export default App;
