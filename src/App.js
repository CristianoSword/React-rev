import React from "react";
import { useState } from "react"; //hooks

function Caps(props) {
  const txtInsert = props.children;
  const txtEmCaps = txtInsert.toUpperCase();
  return <div>{txtEmCaps}</div>
}

function Pag() {
  return <Caps> object json page</Caps>
}

function Cont() {
    const [cont, setCont] = useState(1);

    function addCont() {
        console.log(cont);
        setCont(cont + 1);
    }
       
        
    
    return ( 
    <div>
        <div>{cont}</div>
        <button onClick={addCont} title="butao"> add </button>
        <br/><br/>
        <Caps> object json caps</Caps>
        <Pag/>
        <p>A expressão em latim <i class="latin">Veni, vidi, vici</i> é frequentemente
        mencionada na música, na arte e na literatura.</p>
    </div>
    )
}

 export default Cont;