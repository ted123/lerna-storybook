import * as React from "react";
import styled from "styled-components";

export interface ButtonProps {
  compiler: string;
  framework: string;
  children: React.ReactNode
}

const Wrapper = styled.div`
  border: 1px solid blue;
  padding: 10px;
`;

const Button = (props: ButtonProps) => (
  <Wrapper>
    <h1>
      Hello World from {props.compiler} and {props.framework}!
    </h1>
    {props.children}
  </Wrapper>
);

export default Button;
