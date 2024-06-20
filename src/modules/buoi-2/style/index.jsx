import { GlobalStyle } from "./global-style";
import { InlineStyle } from "./inline-style";
import { Module } from "./module";

export function Style() {
  return (
    <>
      <InlineStyle />

      <br />

      <GlobalStyle />

      <br />

      <Module />
    </>
  );
}
