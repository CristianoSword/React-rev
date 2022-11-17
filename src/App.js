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

function Cont() {
    function addCont() {
        console.log("add");
    }
    return <div>
        <div>1</div>
        <button onClick={addCont}>add</button>
        <br/><br/>
        <Caps> object json text</Caps>
    </div>
}

 export default Cont;