import { Fragment } from "react";
/**
 * ** React cho phép chúng ta render trực tiếp một mảng lên giao diện.
 *
 * Khi render mỗi phần tử của array, phải có prop key và là duy nhất trong mảng đó.
 * Prop key phải đặt ở thẻ bao bọc lớn nhất ngoài cùng.
 */
export function RenderArray() {
  const products = [
    {
      id: 1,
      name: "Black car",
      price: "Black car",
      img: "/images/black-car.jpg",
    },
    {
      id: 2,
      name: "Red car",
      price: "Red car",
      img: "/images/red-car.jpg",
    },
    {
      id: 3,
      name: "Silver car",
      price: "Silver car",
      img: "/images/silver-car.jpg",
    },
    {
      id: 4,
      name: "Steel car",
      price: "Steel car",
      img: "/images/steel-car.jpg",
    },
  ];

  const renderProduct = () => {
    return products.map((product) => {
      return (
        <tr>
          <th scope="row">{product.id}</th>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>
            <img
              src={product.img}
              style={{
                width: 200,
              }}
            />
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Image</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <Fragment key={product.id}>
                <tr>
                  <th scope="row">{product.id}</th>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>
                    <img
                      src={product.img}
                      style={{
                        width: 200,
                      }}
                    />
                  </td>
                </tr>
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
