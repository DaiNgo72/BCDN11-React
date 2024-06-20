export function InlineStyle() {
  const bgc = "green";

  const style = {
    color: "blue",
    fontSize: 40,
    backgroundColor: bgc, // {bgc} `${bgc}`
  };

  return (
    <>
      <p
        style={{
          color: "blue",
          fontSize: 40,
          backgroundColor: bgc, // {bgc} `${bgc}`
        }}
      >
        InlineStyle
      </p>


      <p className="title">P inline</p>
    </>
  );
}
