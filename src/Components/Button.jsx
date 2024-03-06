import React from "react";

export default function Button({label, color}) {
  return <button className={`button-${color}`}>{label}</button>;
}
