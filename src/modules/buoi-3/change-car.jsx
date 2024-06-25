import { useState } from "react";

export function ChangeCar() {
  // 1. Gán với biến static
  //   const car = {
  //     name: "Silver Car",
  //     image: "/images/silver-car.jpg",
  //   };

  // 2. Xác định kiểu dữ liệu của state.

  const [car, setCar] = useState({
    name: "Silver Car",
    image: "/images/silver-car.jpg",
  });
  // 3. logic

  const getUrl = (name) => {
    return `/images/${name}-car.jpg`;
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const handleChangeCar = (name) => {
    setCar({
      name: `${capitalizeFirstLetter(name)} Car`,
      image: getUrl(name),
    });
  };

  return (
    <>
      <div>
        <h2>{car.name}</h2>
        <img
          src={car.image}
          style={{
            width: 500,
          }}
        />

        <div>
          <button
            onClick={() => {
              handleChangeCar("black");
            }}
          >
            Black Car
          </button>
          <button
            onClick={() => {
              handleChangeCar("red");
            }}
          >
            Red Car
          </button>
          <button
            onClick={() => {
              handleChangeCar("silver");
            }}
          >
            Silver Car
          </button>
          <button
            onClick={() => {
              handleChangeCar("steel");
            }}
          >
            Steel Car
          </button>
        </div>
      </div>
    </>
  );
}
