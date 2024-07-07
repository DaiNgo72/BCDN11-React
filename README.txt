# Package.json
- Nơi lưu trữ thông tin dự án của các bạn.
- Tên dự án.
- Dự án sử dụng những thư viện.
- ^18.2.0: 18.2.0, 18.2.1, 18.3.5, 18.4.5, 18.5.0.
- ~18.2.0: 18.2.0, 18.2.1, 18.2.3, 18.2.4, 18.2.5.
- *: Chấp nhận mọi version.

## dependencies: những thư viện để dự án có thể chạy. (nếu không có thư viện này thì không thể chạy).
## devDependencies: những thư viện chỉ dành phục vụ cho quá trình phát triển thuận tiện hơn. (nếu không có thư viện này thì vẫn chạy bình thường).

# Install thư viện devDependencies:
- npm i <ten_thu_vien> --save-dev 
- npm i <ten_thu_vien> -D

# Package-lock.json
- Liệt kê chính xác version của thư viện.

# node_modules:
- Nơi lưu trữ source_code của thư viện chúng ta.
- Nặng (>2gb)
- Không cho phép folder này được commit vào git.

# npm install:
- Nhìn vào file package.json và file package-lock.json (nếu có). Để download thư viện về dự án.


# jsx: html + js

# Trong React:
- Không được return về 2 thẻ cùng cấp với nhau. Cần thẻ cha bao bọc ngoài cùng.

# npm: 
- Quản lý các thư viện (package)

# npx:
- Giúp chúng ta chạy lệnh của thư viện
## TH1: Đã cài thư viện
- Đi vào node_modules/bin tìm đến thư viện
## TH2: Chưa cài thư viện
- Lên [npm](https://www.npmjs.com/) tìm và tải thư viện về và thực thi câu lệnh của thư viện. Không tạo ra folder node_modules


# Life Cycle
- Mounting: Khi component render lần đầu tiên trên giao diện.
- Un-Mounting: Khi component bị xóa khỏi cây DOM. 
    + nếu component chỉ ẩn trên giao diện vì css thì không phải là un-mounting.
- Updating: (re-render)
    + Khi state thay đổi.
    + Khi props thay đổi.
    + Khi component cha re-render -> component con re-render.

# Can thiệp vào từng vòng đời (life cycle). Sử dụng useEffect.
- truyền vào 2 tham số.
Tham số 1: (bắt buộc - require) callback function
Tham số 2: (không bắt buộc truyền - optional) truyền vào một mảng các giá trị phụ thuộc, dependencies.

useEffect(()=>{}, [])

* useEffect: luôn chạy sau, khi component được render lên trên giao diện. (can thiệp quá trình mounting).

TH1: Không có dependencies = undefined. (0.00000000000000000000000001%)
- useEffect(()=>{})
- Callback: Luôn gọi lại callback khi component re-render.

TH2: Có dependencies = []. (50%).
- useEffect(()=>{}, [])
- Callback: Chỉ gọi lại callback 1 lần duy nhất, sau khi được render lên giao diện. Trong suốt vòng đời chỉ chạy callback 1 lần duy nhất. (mounting)
- Clean-up: sẽ chạy khi component un-mounting. (un-mounting)

TH3: Có dependencies và dependencies có giá trị. (50%)
- useEffect(()=>{}, [count, listSanPham])
- Callback: 
    + Chạy sau khi component render lên trên giao diện. (mounting)
    + Chạy sau khi nhận thấy bất kỳ 1 giá trị nào trong dependencies thay đổi. So sánh giá trị dependencies lần render trước đó là bao nhiêu và lần render hiện tại là bao nhiêu, nếu khác nhau thì mới gọi callback. (updating)
- Clean-up: 
    + sẽ chạy khi component un-mounting. (un-mounting)
    + Sau khi dependencies thay đổi, thì nó sẽ gọi clean up function trước khi gọi callback function.
    
Observer pattern

# Nâng cao:
- memo: cache cả component, khi giá trị props truyền vào component thay đổi thì nó mới re-render component. ( Icon, )
- useCallback: Ghi nhớ địa chỉ function. ( kết hợp với component có memo )
- useMemo: Ghi nhớ giá trị của biến. ( tính toán quá phức tạp, 5% dev fe sẽ gặp )

Điểm yếu: tốn bộ nhớ.