import React from "react";
import "./Deserto.css";

import "react-multi-carousel/lib/styles.css";

function Deserto() {
  return (
    <>
      <div className="container">
        {" "}
        <div className="fileira">
          <div className="itens">
            <div className="item">
              <h3>John Ryder</h3>
            </div>
          </div>
          <br />
          <div className="itens">
            <div className="item">
              <h3>Lizard</h3>
            </div>
          </div>
          <br />
          <div className="itens">
            <div className="item">
              <h3>Pluto</h3>
            </div>
          </div>
          <br />
          <div className="itens">
            <div className="item">
              <h3>Goggle</h3>
            </div>
          </div>
        </div>
        <br />
        <div className="fileira">
          <div className="itens">
            <div className="item">
              <h3>Papa Hades</h3>
            </div>
          </div>
          <br />
          <div className="itens">
            <div className="item">
              <h3>Stabber</h3>
            </div>
          </div>
          <br />
          <div className="itens">
            <div className="item">
              <h3>Camaleon</h3>
            </div>
          </div>
          <br />
          <div className="itens">
            <div className="item">
              <h3>Lick</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Deserto;
