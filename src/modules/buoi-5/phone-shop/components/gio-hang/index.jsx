export function GioHang({ listSanPham, onDelete, onTang, onGiam }) {
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Tên Sản Phẩm</th>
            <th scope="col">Giá</th>
            <th scope="col">Số Lượng</th>
            <th scope="col">Tổng Tiền</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {listSanPham.map((i) => {
            return (
              <tr key={i.id}>
                <th scope="row">{i.id}</th>
                <td>{i.name}</td>
                <td>{i.price}</td>
                <td>
                  <button
                    onClick={() => {
                      onGiam(i.id);
                    }}
                    className="btn btn-success"
                  >
                    -
                  </button>
                  <span>{i.amount}</span>
                  <button
                    onClick={() => {
                      onTang(i.id);
                    }}
                    className="btn btn-success"
                  >
                    +
                  </button>
                </td>
                <td>{i.amount * i.price}</td>
                <td>
                  <button
                    onClick={() => {
                      onDelete(i.id);
                    }}
                    className="btn btn-danger"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
