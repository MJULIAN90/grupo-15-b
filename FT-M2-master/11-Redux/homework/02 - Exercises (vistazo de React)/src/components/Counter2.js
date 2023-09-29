import React from "react";
import { connect } from "react-redux";
import { incrementCounter2 } from "../actions";

const Counter2 = (props) => {
  console.log("props sumar", props);
  return (
    <div>
      <h1>sumar en nuestro componente</h1>
      <h2>{props.counter2}</h2>

      <button
        onClick={() => {
          props.incrementCounter2();
        }}
      >
        incrementar counter 2
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter2: state.counter2,
  };
};

// export default sumar
export default connect(mapStateToProps, { incrementCounter2 })(Counter2);
