import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return (
    <>
      <h1>Hello world</h1>
      <p>お元気ですか</p>
    </>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
