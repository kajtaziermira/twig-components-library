import React from "react";
import "./Button.scss";
import '../index'

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className="text-white text-5xl">{props.label}</button>;
};

export default Button;
