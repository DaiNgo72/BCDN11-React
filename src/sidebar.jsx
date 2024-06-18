export function Sidebar() {
  console.log(<h1 />);

  // return [<h1>haha</h1>, <h2>hihi</h2>];

  return (
    <>
      <h1
        style={{
          color: "blue",
          backgroundColor: "green",
          fontSize: 30,// 30px
          lineHeight: '3rem', 
        }}
      >
        haha
      </h1>
      <h2>hihi</h2>
    </>
  );
}
