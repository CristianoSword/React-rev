import React from "react";
// import { ReactDOM } from "react";

function Caps(props) {
  const txtInsert = props.children;
  const txtEmCaps = txtInsert.toUpperCase();
  return <div>{txtEmCaps}</div>
}

function pag() {
  return <Caps> object json text</Caps>
}

 export default pag;