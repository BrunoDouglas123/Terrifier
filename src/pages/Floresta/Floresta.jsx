import React from "react";
import "./Floresta.css";

import "react-multi-carousel/lib/styles.css";

function Floresta() {
  return (
    <>
      <div className="container">
        <div className="fileira">
          <div className="itens">
            <div className="item">
              <h3>Jason Voorhees</h3>
            </div>
          </div>
          <br />
          <div className="itens">
            <div className="item">
              <h3>Three Fingers</h3>
            </div>
          </div>
          <br />
          <div className="itens">
            <div className="item">
              <h3>Saw Tooth</h3>
            </div>
          </div>
          <br />
          <div className="itens">
            <div className="item">
              <h3>One Eye</h3>
            </div>
          </div>
        </div>
        <br />
        <div className="fileira">
          <div className="itens">
            <div className="item">
              <h3>Pa</h3>
            </div>
          </div>
          <div className="itens">
            <div className="item">
              <h3>Brother</h3>
            </div>
          </div>
          <br />
          <div className="itens">
            <div className="item">
              <h3>Sister</h3>
            </div>
          </div>
          <br />
          <div className="itens">
            <div className="item">
              <h3>Three Toed</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Floresta;
