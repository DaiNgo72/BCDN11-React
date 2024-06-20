import style from "./style.module.css";

console.log(style);

export function Module() {
  return (
    <>
      <p className={style.module + " " + style.sub}>Module</p>
    </>
  );
}
