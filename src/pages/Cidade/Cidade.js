import React from "react";
import "./Cidade.css";

import "react-multi-carousel/lib/styles.css";

function Cidade() {
  return (
    <>
      <div className="container">
        <div className="fileira">
          <div className="itens">
            <div className="item">
              <h3>Michael Myers</h3>
            </div>
          </div>
          <br />
          <div className="itens">
            <div className="item">
              <h3>Freddy Kruegger</h3>
            </div>
          </div>
          <br />
          <div className="itens">
            <div className="item">
              <h3>GhostFace</h3>
            </div>
          </div>
          <br />
          <div className="itens">
            <div className="item">
              <h3>Chucky</h3>
            </div>
          </div>
        </div>
        <br />
        <div className="fileira">
          <div className="itens">
            <div className="item"></div>
          </div>
          <div className="itens">
            <div className="item"></div>
          </div>
          <br />
          <div className="itens">
            <div className="item"></div>
          </div>
          <br />
          <div className="itens">
            <div className="item"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cidade;
