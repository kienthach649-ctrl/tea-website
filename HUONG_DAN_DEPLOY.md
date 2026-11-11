# 📋 HƯỚNG DẪN ĐẨY WEBSITE LÊN kinhdoanhso.id.vn

## ✅ Bước 1: Chuẩn Bị Files Trên Máy Tính

Tất cả files website của bạn đã sẵn sàng tại: `F:\webkinhdoanhso\`

**Danh sách files cần upload:**
```
📁 webkinhdoanhso/
  ├── index.html (file chính)
  ├── styles.css (CSS styling)
  ├── new-features.css (CSS cho features)
  ├── sam-ngoc-linh.png (Product 1)
  ├── dong-trung-ha-thao.png (Product 2)
  ├── hong-sam.png (Product 3)
  ├── linh-chi.png (Product 4)
  ├── nam-lim-xanh.png (Product 5)
  ├── thien-nien-tu.png (Product 6)
  ├── ginseng-hoang-ky.png (Product 7)
  ├── set-qua-tang.png (Product 8)
  ├── tra-sam-tui-loc.png (Product 9)
  ├── vu-thi-thanh-hien.png (Team CEO photo)
  └── sam-ngoc-linh-story.png (Story section image)
```

**Tổng cộng: 15 files**
- 1 file HTML chính
- 2 file CSS
- 12 file ảnh

---

## 🔧 Bước 2: Upload Qua cPanel File Manager (PHƯƠNG PHÁP ĐƠN GIẢN)

### 2.1 Truy cập cPanel
1. Mở trình duyệt, nhập: `https://kinhdoanhso.id.vn:2083` hoặc `https://bkns.vn/cpanel`
2. Đăng nhập với:
   - **Username**: (tài khoản hosting của bạn)
   - **Password**: (mật khẩu hosting của bạn)

### 2.2 Vào File Manager
1. Tìm mục **"File Manager"** trong cPanel
2. Click vào nó
3. Chọn **"public_html"** - đây là thư mục chứa website công cộng

### 2.3 Upload Files
1. Click nút **"Upload"** hoặc kéo-thả files
2. Chọn tất cả 15 files từ `F:\webkinhdoanhso\` 
3. Chờ upload hoàn tất (có thể mất vài phút do có ảnh)

### 2.4 Kiểm Tra
Truy cập `http://kinhdoanhso.id.vn` để xem website

---

## 🖥️ Bước 3: Upload Qua FTP (PHƯƠNG PHÁP TỐC ĐỘ CAO)

Nếu bạn có FTP credentials từ BKNS:

### 3.1 Tải phần mềm FTP
- **FileZilla** (miễn phí): https://filezilla-project.org/
- Hoặc dùng bất kỳ FTP client nào

### 3.2 Cấu hình FTP
1. Mở FileZilla
2. File > Site Manager > New Site
3. Nhập thông tin:
   - **Host**: ftp.kinhdoanhso.id.vn (hoặc IP từ BKNS)
   - **Username**: (FTP username)
   - **Password**: (FTP password)
   - **Port**: 21 (hoặc 22 nếu SFTP)
4. Connect

### 3.3 Upload Files
1. Trên bên trái: Mở `F:\webkinhdoanhso\`
2. Trên bên phải: Chọn thư mục `public_html`
3. Kéo-thả tất cả 15 files từ trái sang phải

---

## 🔐 Bước 4: Cấu Hình Domain (Nếu Cần)

Nếu website chưa hiển thị, kiểm tra:

### 4.1 Kiểm Tra DNS
1. Vào cPanel > Zone Editor / DNS
2. Đảm bảo domain **kinhdoanhso.id.vn** trỏ đến IP của server BKNS
3. Chờ DNS cập nhật (1-24 giờ)

### 4.2 Cấu Hình Addon Domain
1. Vào cPanel > Addon Domains
2. Nếu chưa thêm, click "Add Domain"
3. Nhập: **kinhdoanhso.id.vn**
4. Directory: **public_html** (hoặc thư mục mới nếu muốn)
5. Click Add Domain

---

## ✨ Bước 5: Tối Ưu (Tuỳ Chọn)

### 5.1 Bật Gzip Compression
- cPanel > EasyApache > PHP Optimization
- Bật tính năng gzip để tăng tốc độ load

### 5.2 Set Up SSL Certificate
- cPanel > AutoSSL / Let's Encrypt
- Bật HTTPS cho domain (miễn phí)

### 5.3 Cấu Hình Caching
- cPanel > Optimize Website
- Bật browser caching để trang tải nhanh hơn

---

## 🚀 Bước 6: Kiểm Tra Sau Upload

1. **Truy cập website**: Nhập `kinhdoanhso.id.vn` vào trình duyệt
2. **Kiểm tra ảnh**: Đảm bảo tất cả ảnh sản phẩm, team photo hiển thị
3. **Kiểm tra chức năng**:
   - ✅ Menu hoạt động (click vào Sản Phẩm, Câu Chuyện, FAQ, etc.)
   - ✅ Ảnh load đầy đủ
   - ✅ Responsive trên mobile (mở trên điện thoại)
4. **Kiểm tra Console**: Bấm F12 > Console để xem có lỗi gì không

---

## 📞 Thông Tin Hỗ Trợ

**Nếu gặp vấn đề:**

1. **Files không load**: 
   - Kiểm tra tên file (phải chính xác chữ cái hoa/thường)
   - Kiểm tra đường dẫn trong HTML

2. **Domain chưa hoạt động**:
   - Liên hệ BKNS support
   - Yêu cầu kiểm tra DNS records

3. **Ảnh không hiển thị**:
   - Kiểm tra file permissions (phải là 644)
   - Đảm bảo tên file giống trong HTML

4. **Website chậm**:
   - Bật gzip compression
   - Tối ưu ảnh (giảm kích thước PNG)
   - Dùng CDN cho ảnh

---

## ✅ Danh Sách Kiểm Tra Trước Upload

- [ ] Tất cả 15 files đã chuẩn bị tại `F:\webkinhdoanhso\`
- [ ] Có FTP/cPanel credentials từ BKNS
- [ ] Đã chuẩn bị tài khoản FTP client (nếu dùng FTP)
- [ ] Domain kinhdoanhso.id.vn đã trỏ đến server
- [ ] Có thể truy cập cPanel hoặc File Manager

---

**Chúc bạn upload thành công! 🎉**
Nếu cần trợ giúp thêm, liên hệ BKNS hoặc để tôi biết lỗi gì xảy ra.
