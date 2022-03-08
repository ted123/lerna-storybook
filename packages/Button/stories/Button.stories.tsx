import * as React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../src/index";

storiesOf("Button", module).add("Button", () => (
  <div>
    {'I am a story'}
    <Button compiler="TypeScript" framework="React" />
  </div>
));
