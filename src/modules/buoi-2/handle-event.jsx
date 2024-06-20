export function HandleEvent() {
  const handleClickMe2 = () => {
    console.log("Click Me 2");
  };

  const handleName = (name) => {
    console.log("my name is " + name);
  };

  const handleName2 = (name) => {
    return () => {
      console.log("my name is " + name);
    };
  };

  return (
    <>
      {/* onclick */}
      {/* onSuKien */}
      <button
        onClick={() => {
          console.log("Click me 1");
        }}
      >
        Click me 1
      </button>

      <button onClick={handleClickMe2}>Click me 2</button>

      {/* ------------------------- */}

      <button
        onClick={() => {
          handleName("Cyber");
        }}
      >
        Click me 3
      </button>

      <button onClick={handleName2("Soft")}>Click me 4</button>
    </>
  );
}
