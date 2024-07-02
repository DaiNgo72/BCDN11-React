import { Fragment, useState } from "react";
import { mockData } from "./__mock-data__";
import { Card } from "./components/card";
import { XemChiTiet } from "./components/xem-chi-tiet";
import { GioHang } from "./components/gio-hang";
import { transformSanPham } from "./utils";

export function PhoneShop() {
  const [listSanPham, setListSanPham] = useState([]);

  const [phoneDetail, setPhoneDetail] = useState(mockData[0]);

  const onChangePhoneDetail = (phone) => {
    setPhoneDetail(phone);
  };

  const onAddSanPham = (sanPham) => {
    sanPham = transformSanPham(sanPham);

    // 1. Đã tồn tại hay chưa
    const item = listSanPham.find((i) => i.id === sanPham.id);

    // True: Tăng số lượng
    if (item) {
      item.amount += 1;
    }
    // False: Thêm vào
    else {
      listSanPham.push(sanPham);
    }

    setListSanPham([...listSanPham]);

    // setListSanPham((c) => [...c, sanPham]);
  };

  const onDelete = (id) => {
    if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này hay không?")) {
      const newListSanPham = listSanPham.filter((i) => i.id !== id);

      setListSanPham(newListSanPham);
    }
  };

  const onTang = (id) => {
    const sanPham = listSanPham.find((i) => i.id === id);
    if (sanPham) {
      sanPham.amount += 1;
    }

    setListSanPham([...listSanPham]);
  };

  const onGiam = (id) => {
    const sanPham = listSanPham.find((i) => i.id === id);

    if (sanPham) {
      if (sanPham.amount === 1) {
        onDelete(id);

        return;
      }

      sanPham.amount -= 1;
    }

    setListSanPham([...listSanPham]);
  };

  return (
    <>
      <div className="container">
        <GioHang
          onTang={onTang}
          onGiam={onGiam}
          listSanPham={listSanPham}
          onDelete={onDelete}
        />
      </div>

      <div
        style={{
          display: "flex",
          gap: 30,
          justifyContent: "center",
        }}
      >
        {mockData.map((item) => {
          return (
            <Fragment key={item.maSP}>
              <Card
                name={item.tenSP}
                price={item.giaBan}
                image={item.hinhAnh}
                onChangePhoneDetail={() => onChangePhoneDetail(item)}
                onAddSanPham={() => {
                  onAddSanPham(item);
                }}
              />
            </Fragment>
          );
        })}
      </div>

      <div>
        <XemChiTiet
          name={phoneDetail.tenSP}
          img={phoneDetail.hinhAnh}
          manHinh={phoneDetail.manHinh}
          cameraSau={phoneDetail.cameraSau}
          cameraTruoc={phoneDetail.cameraTruoc}
          heDieuHanh={phoneDetail.heDieuHanh}
          ram={phoneDetail.ram}
          rom={phoneDetail.rom}
        />
      </div>
    </>
  );
}
