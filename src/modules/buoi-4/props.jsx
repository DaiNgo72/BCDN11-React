import { Count } from "../../components/count";

export function Props() {
  return (
    <>
      {/* {Count({ step: 2, default: 5, operator: "+" })} */}

      {/* <Count step={2} default={5} operator="+" /> */}
      <br />
      {/* {Count({ step: 1, default: 10, operator: "-" })} */}

      {/* <Count defaultValue={10} step={5} /> */}

      <Count defaultValue={10} />
    </>
  );
}
