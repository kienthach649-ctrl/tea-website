# 🚀 HƯỚNG DẪN ĐẨY WEBSITE LÊN kinhdoanhso.id.vn
## (Từng bước cụ thể - Dành cho người mới)

---

## ✅ BƯỚC 1: CHUẨN BỊ TRƯỚC KHI UPLOAD

### 1.1 Kiểm tra bạn có những gì:
- ✅ Domain: `kinhdoanhso.id.vn`
- ✅ Hosting: BKNS.vn (Shared Hosting + cPanel)
- ✅ Tài khoản hosting (username + password)
- ✅ Tất cả files website tại: `F:\webkinhdoanhso\`

### 1.2 Chuẩn bị files upload:
Files cần upload (chỉ những files này, không cần .md):
```
1. index.html ⭐ (file chính)
2. styles.css
3. new-features.css
4. sam-ngoc-linh.png
5. dong-trung-ha-thao.png
6. hong-sam.png
7. linh-chi.png
8. nam-lim-xanh.png
9. thien-nien-tu.png
10. ginseng-hoang-ky.png
11. set-qua-tang.png
12. tra-sam-tui-loc.png
13. vu-thi-thanh-hien.png
14. sam-ngoc-linh-story.png
```

**TỔNG CỘNG: 14 files (3 file code + 11 file ảnh)**

---

## 🔧 BƯỚC 2: TRUY CẬP cPanel (Cách Dễ Nhất)

### 2.1 Mở Trình Duyệt & Đăng Nhập

**Cách 1: Thông qua trang BKNS**
1. Mở trình duyệt (Chrome, Firefox, Edge)
2. Truy cập: `https://bkns.vn`
3. Tìm nút **"Quản lý tài khoản"** hoặc **"Login"**
4. Đăng nhập bằng:
   - Email: (email đăng ký BKNS)
   - Password: (mật khẩu BKNS)
5. Tìm **cPanel** hoặc **File Manager** > Click vào

**Cách 2: Trực tiếp vào cPanel**
1. Mở trình duyệt
2. Truy cập: `https://kinhdoanhso.id.vn:2083`
   - Hoặc: `http://ip.server.bkns:2083` (IP của BKNS)
3. Đăng nhập:
   - Username: (tên đăng nhập hosting)
   - Password: (mật khẩu hosting)

**⚠️ Ghi nhớ:**
- Có thể cần chấp nhận cảnh báo SSL
- Click "Tiếp tục" hoặc "Proceed"

---

## 📁 BƯỚC 3: TRỎ ĐẾN THƯ MỤC PUBLIC_HTML

### 3.1 Khi đã vào cPanel:
1. Nhìn bên trái, tìm mục **"Files"** hoặc **"File Manager"**
2. Click vào nó
3. Sẽ thấy các thư mục:
   ```
   📁 public_html          ← ĐÂY LÀ THƯ MỤC CHÍNH
   📁 public_ftp
   📁 www
   📁 tmp
   ```

### 3.2 Click vào `public_html`
- Đây là thư mục chứa website công khai
- Khi truy cập `kinhdoanhso.id.vn`, hệ thống sẽ lấy files từ đây

---

## 📤 BƯỚC 4: UPLOAD FILES

### 4.1 Click Nút Upload
Trong thư mục `public_html`, bạn sẽ thấy:
- Nút **"Upload"** (dạng mũi tên lên ⬆️)
- Hoặc có thể **Kéo-thả files trực tiếp**

### 4.2 Chọn Files
**Cách 1: Click "Upload"**
1. Click nút Upload
2. Cửa sổ "Chọn tệp" hiện lên
3. Duyệt đến: `F:\webkinhdoanhso\`
4. Chọn tất cả 14 files:
   - Giữ phím **Ctrl** + Click chọn từng file
   - Hoặc Ctrl+A để chọn tất cả rồi bỏ chọn .md files
5. Click **"Mở"** hoặc **"Upload"**

**Cách 2: Kéo-Thả (Dễ nhất)**
1. Mở thư mục `F:\webkinhdoanhso\` trên máy tính
2. Chọn tất cả 14 files
3. Kéo vào cửa sổ cPanel
4. Thả files vào thư mục `public_html`

### 4.3 Chờ Upload Hoàn Tất
- Sẽ thấy thanh tiến độ
- Cực kỳ quan trọng: **Không đóng cửa sổ** trong khi upload
- Chờ tất cả files chuyển xanh ✅

### 4.4 Xác Nhận Upload Thành Công
Sau khi upload, bạn sẽ thấy tất cả files hiển thị trong `public_html`:
```
✅ index.html
✅ styles.css
✅ new-features.css
✅ sam-ngoc-linh.png
✅ ... (tất cả ảnh còn lại)
```

---

## 🌐 BƯỚC 5: KIỂM TRA WEBSITE

### 5.1 Truy Cập Domain
1. Mở trình duyệt
2. Nhập: `kinhdoanhso.id.vn` vào thanh địa chỉ
3. Nhấn **Enter**

### 5.2 Chờ Website Load
- Lần đầu có thể chờ 5-10 giây
- Website sẽ hiển thị với:
  - ✅ Tên "Trà Sâm Trường Nhân"
  - ✅ Logo 🍵
  - ✅ Hero section xanh
  - ✅ Menu: Sản Phẩm, Lợi Ích, Câu Chuyện, Blog, FAQ, v.v.
  - ✅ Tất cả ảnh sản phẩm

### 5.3 Nếu Chưa Hiển Thị?
**Trường hợp 1: Chỉ thấy trang trắng hoặc lỗi**
- Chờ thêm 5-10 phút để DNS cập nhật
- Thử refresh trang (Ctrl+F5)
- Xóa cache: Ctrl+Shift+Delete

**Trường hợp 2: 404 Not Found**
- Files chưa upload đúng
- Quay lại BƯỚC 4 để kiểm tra files

**Trường hợp 3: Ảnh không hiển thị**
- Kiểm tra tên file trong HTML có đúng không (chữ hoa/thường)
- Ảnh phải có đuôi `.png` chính xác

---

## 🔍 BƯỚC 6: KIỂM TRA CHI TIẾT

### 6.1 Kiểm Tra Bằng F12 (Developer Tools)
1. Mở website `kinhdoanhso.id.vn`
2. Bấm **F12** hoặc **Ctrl+Shift+I**
3. Tab **"Console"** - xem có lỗi nào không
4. Tìm kiếm "404" - nếu không có = OK

### 6.2 Kiểm Tra Chức Năng
- ✅ Click vào **"Sản Phẩm"** - có 9 sản phẩm với ảnh không?
- ✅ Click vào **"Câu Chuyện"** - có ảnh cây nhân sâm không?
- ✅ Click vào **"FAQ"** - có các câu hỏi không?
- ✅ Click vào **"Hướng Dẫn"** - có 6 bước không?
- ✅ Scroll đến cuối - có Team không?
- ✅ Thử trên **điện thoại** - responsive không?

### 6.3 Kiểm Tra Tốc Độ Load
1. Bấm F12
2. Tab **"Network"**
3. Refresh trang
4. Xem files load được không
5. Nếu files có ❌ đỏ = upload lại

---

## 🆘 GIẢI QUYẾT VẤN ĐỀ THƯỜNG GẶP

### ❌ Vấn đề: Website không load, chỉ thấy trang trắng

**Giải pháp:**
1. Chờ DNS cập nhật (1-24 giờ)
2. Thử xóa cache: Ctrl+Shift+Delete
3. Thử trên trình duyệt khác
4. Thử trên điện thoại (nếu không dùng WiFi quốc tế)

### ❌ Vấn đề: Ảnh sản phẩm không hiển thị (chỉ thấy icon ảnh hỏng)

**Giải pháp:**
1. Kiểm tra tên file có chính xác không (phải chữ thường)
2. Kiểm tra file có upload lên public_html không
3. Xóa cache browser và refresh (Ctrl+Shift+Delete)
4. Nếu vẫn không được, upload lại file ảnh đó

### ❌ Vấn đề: Menu hoặc nội dung không hoạt động

**Giải pháp:**
1. Bấm F12 > Console để xem lỗi
2. Kiểm tra file `index.html` có upload không
3. Kiểm tra file CSS có upload không
4. Refresh trang (Ctrl+Shift+Delete)

### ❌ Vấn đề: Domain chưa hoạt động, hiển thị "Domain Parking"

**Giải pháp:**
1. Vào cPanel > Zone Editor
2. Đảm bảo DNS records trỏ đúng
3. Vào cPanel > Addon Domains
4. Kiểm tra domain `kinhdoanhso.id.vn` đã add chưa
5. Nếu chưa, click **"Add Domain"** và thêm vào public_html

---

## ✨ BƯỚC 7: TỐI ƯU (TUỲ CHỌN)

### 7.1 Bật HTTPS (Bảo mật)
1. Vào cPanel
2. Tìm **"AutoSSL"** hoặc **"Let's Encrypt"**
3. Click **"Bật AutoSSL"**
4. Chọn domain `kinhdoanhso.id.vn`
5. Click **"Activate"**
6. Sau 5-10 phút, website sẽ dùng HTTPS

### 7.2 Bật Gzip Compression (Tăng tốc độ)
1. Vào cPanel
2. Tìm **"Optimize Website"** hoặc **"Gzip Compression"**
3. Bật nó
4. Website sẽ load nhanh hơn 50%

### 7.3 Cấu Hình Caching
1. Vào cPanel
2. Tìm **"Browser Cache"** hoặc **"Caching"**
3. Đặt thời gian cache = 1 năm
4. Lần truy cập tiếp theo sẽ nhanh hơn

---

## 📞 LIÊN HỆ HỖ TRỢ

Nếu gặp vấn đề:

**1. Liên hệ BKNS Support:**
- Hotline: 0247.109.1000 (hoặc xem trên bkns.vn)
- Email: support@bkns.vn
- Chat trực tiếp trên website BKNS
- Nói: "Tôi không thể truy cập cPanel hoặc upload files"

**2. Kiểm tra thông tin:**
- Có tài khoản hosting active không?
- Domain đã trỏ DNS đúng không?
- Thư mục public_html tồn tại không?

**3. Video hướng dẫn:**
- Tìm trên YouTube: "BKNS upload website cPanel"
- Hoặc: "cPanel File Manager upload"

---

## ✅ DANH SÁCH KIỂM TRA HOÀN TẤT

- [ ] Tất cả 14 files đã upload vào public_html
- [ ] Có thể truy cập kinhdoanhso.id.vn
- [ ] Website hiển thị đầy đủ (tiêu đề, hero, menu)
- [ ] Tất cả ảnh sản phẩm hiển thị
- [ ] Ảnh team CEO hiển thị
- [ ] Menu hoạt động (click vào các mục)
- [ ] Responsive trên điện thoại (test trên điện thoại)
- [ ] F12 Console không có lỗi 404

---

## 🎉 HOÀN THÀNH!

Khi tất cả kiểm tra ✅, website của bạn đã **LIVE** trên internet!

**Website của bạn:** `kinhdoanhso.id.vn`
**Quản lý:** `https://kinhdoanhso.id.vn:2083` (cPanel)

Mọi người trên thế giới giờ có thể truy cập website Trà Sâm Trường Nhân của bạn! 🌍

---

**Cần giúp gì nữa? Hãy mô tả lỗi cụ thể để tôi hỗ trợ!**
