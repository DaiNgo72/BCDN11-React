export function Footer() {
  return (
    <footer className="py-5 bg-dark">
      <div onClick={() => {}} className="container">
        <p
          onClick={(e) => {
            e.stopPropagation();

            e.target;

            e.currentTarget;
          }}
          onClick2={()=>{}}
          className="m-0 text-center text-white"
        >
          Copyright © Your Website 2023
        </p>
      </div>

      <button
        onClick={() => {
          e.target.style.color = "blue";
        }}
      >
        fasdkfajs
        <icon />
      </button>
    </footer>
  );
}

const document = {
  getElementById: (id) => {},
  html: {
    head: {},
    body: {
      h1: {
        text: "hello",

        p: {
          text: "world",
          className: "text-danger",
          id: "para",
        },
      },

      footer: {
        p: {
          text: "CyberSoft",
        },
      },
    },
  },
};

