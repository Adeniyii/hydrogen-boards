import React from "react";
import { Button } from "reactstrap";

export default function ButtonComponent(props) {
  return (
    <Button {...props} disabled={props.disabled || props.loading}>
      {!props.loading ? props.text : "Loading..."}
    </Button>
  );
}
