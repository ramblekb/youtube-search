import React from "react";

export function FormBtn(props) {
   return (
     <button {...props} style={{ float: "left"}} className="btn btn-success">
       {props.children}
     </button>
   );
 }