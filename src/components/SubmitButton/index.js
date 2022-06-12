import React from "react";
import { Button } from "./styles";
import PropTypes from "prop-types";

export const SubmitButton = ({ children, disabled, onclick }) => {
    return <Button disabled={disabled} onclick={onclick}>{ children }</Button>
}

SubmitButton.protoTypes = {
    disabled: PropTypes.bool,
    onclick: PropTypes.func,
    children: PropTypes.node.isRequired
}