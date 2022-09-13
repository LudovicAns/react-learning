import "./Modal.css";
import { useState } from "react";

export default function Modal() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <button onClick={() => setToggle(!toggle)} className="btn-modal-open">
        Ouvrir
      </button>
      {toggle && (
        <div className="overlay">
          <div className="modal">
            <div className="modal-container">
              <h1>Modal</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
                dicta animi beatae, vitae dolorum sunt voluptates corrupti alias
                minima amet atque, dignissimos quaerat ipsa sed voluptatem
                delectus vel fuga, pariatur esse est! Dolorem magnam
                consequuntur expedita pariatur?
              </p>
              <button onClick={() => setToggle(!toggle)}>X</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
