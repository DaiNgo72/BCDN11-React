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


