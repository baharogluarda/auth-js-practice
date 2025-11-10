import React from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";

const TextInput = (props) => {
  const { label, error, classname = "mb-3", ...rest } = props;

  return (
    <FormGroup className={classname} controlId={rest.name}>
      <FormLabel className="text-white">{label}</FormLabel>
      <FormControl isInvalid={!!error} size="lg" {...rest} />
      <FormControl.Feedback type="invalid">{error}</FormControl.Feedback>
    </FormGroup>
  );
};

export default TextInput;
