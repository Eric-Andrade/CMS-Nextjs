import React from "react";

function SvgComponent(props) {
  return (
    <svg width={props.size} height={props.size} viewBox="0 0 24 24" {...props}>
      <path fill={props.color} d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
    </svg>
  );
}

export default SvgComponent;

