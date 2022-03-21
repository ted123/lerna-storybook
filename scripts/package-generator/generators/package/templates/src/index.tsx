import * as React from "react";
import { Wrapper } from "./style";

export interface <%= name %>Props {
  compiler: string;
  framework: string;
}

const <%= name %> = (props: <%= name %>Props) => (
  <Wrapper>
    <h1>
      Hello World from {props.compiler} and {props.framework}!
    </h1>
  </Wrapper>
);

export default <%= name %>;
