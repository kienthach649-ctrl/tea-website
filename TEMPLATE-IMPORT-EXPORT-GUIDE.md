# Hướng Dẫn: Nhập/Xuất Template Tùy Chỉnh

## 📋 Tổng Quan

Phần trang trí thiệp giờ hỗ trợ các tính năng nâng cao:
- ✅ **Upload hình ảnh** làm template background
- ✅ **Upload file JSON** với thiết kế template
- ✅ **Chỉnh sửa style** (màu, gradient, emoji)
- ✅ **Lưu template** tùy chỉnh vào máy
- ✅ **Xuất template** để chia sẻ với người khác

---

## 🎨 5 Nút Chức Năng Import/Export

| Nút | Chức Năng | Cách Dùng |
|-----|----------|----------|
| 📸 Upload Ảnh | Tải hình ảnh làm template | Chọn file ảnh từ máy |
| 📄 Upload JSON | Import template từ file JSON | Chọn file `.json` |
| ✏️ Chỉnh Sửa | Mở editor để tùy chỉnh template | Thay đổi màu, emoji, tiêu đề |
| 💾 Lưu | Lưu template hiện tại vào máy | Template lưu ở LocalStorage |
| 📤 Xuất | Tải template dưới dạng JSON | Download file `.json` |

---

## 🚀 Hướng Dẫn Chi Tiết

### 1️⃣ Upload Hình Ảnh

**Cách làm:**
1. Nhấn nút **📸 Upload Ảnh**
2. Chọn hình ảnh từ máy tính
3. Hình ảnh sẽ được sử dụng làm template tùy chỉnh
4. Tiêu đề tự động thành "Template từ Ảnh"
5. Emoji mặc định: 📸 (trên) và ✨ (dưới)

**Ví dụ:**
- Tải ảnh nền gradient đẹp
- Tải ảnh họa tiết Tết
- Tải logo công ty làm nền

---

### 2️⃣ Upload File JSON

**Format file JSON:**
```json
{
  "title": "Tặng Yêu Thương",
  "bgColor": "#F4D9A0",
  "bgColor2": "#E8C76F",
  "textColor": "#5c4033",
  "topEmoji": "✨",
  "bottomEmoji": "🌿"
}
```

**Cách làm:**
1. Chuẩn bị file `.json` với format trên
2. Nhấn nút **📄 Upload JSON**
3. Chọn file từ máy
4. Template sẽ được áp dụng ngay lập tức

**Bắt buộc có các trường:**
- `title` (string): Tiêu đề template
- `bgColor` (hex color): Màu nền thứ 1
- `bgColor2` (hex color): Màu nền thứ 2 (gradient)
- `textColor` (hex color): Màu chữ
- `topEmoji` (emoji): Emoji trên cùng
- `bottomEmoji` (emoji): Emoji dưới cùng

---

### 3️⃣ Chỉnh Sửa Template

**Cách làm:**
1. Nhấn nút **✏️ Chỉnh Sửa** để mở editor
2. Điền các trường:
   - **Tiêu Đề**: Tên template (VD: "Mừng Sinh Nhật")
   - **Màu Nền**: Màu gradient bắt đầu (click để chọn)
   - **Màu Nền 2**: Màu gradient kết thúc
   - **Màu Chữ**: Màu của text
   - **Emoji Trên**: Ký tự emoji trên cùng
   - **Emoji Dưới**: Ký tự emoji dưới cùng
3. Nhấn **👁️ Xem Trước** để xem kết quả
4. Thiệp preview sẽ cập nhật ngay tức khắc

**Lưu ý:**
- Emoji chỉ nhập 1-2 ký tự
- Màu nhập dưới dạng hex (#RRGGBB) hoặc chọn từ picker

---

### 4️⃣ Lưu Template

**Cách làm:**
1. Sau khi chỉnh sửa, nhấn nút **💾 Lưu**
2. Template được lưu vào `localStorage` của trình duyệt
3. Khi quay lại trang, template sẽ được tải tự động
4. Không mất template khi refresh trang (chỉ mất khi xóa cache)

**Dữ liệu được lưu:**
```javascript
{
  title: "...",
  bgColor: "#...",
  bgColor2: "#...",
  textColor: "#...",
  topEmoji: "...",
  bottomEmoji: "..."
}
```

---

### 5️⃣ Xuất Template

**Cách làm:**
1. Nhấn nút **📤 Xuất**
2. File `.json` sẽ tự động tải về máy
3. Tên file: `template-{timestamp}.json`
4. Chia sẻ file này với người khác

**Lợi ích:**
- ✅ Chia sẻ template yêu thích với bạn bè
- ✅ Backup template của riêng bạn
- ✅ Sử dụng lại template sau này

---

## 🎯 Ví Dụ Thực Tế

### Ví Dụ 1: Tạo Template Tết

**Bước 1:** Nhấn **✏️ Chỉnh Sửa**

**Bước 2:** Điền thông tin:
- Tiêu Đề: "Tết 2026"
- Màu Nền: #FF0000 (đỏ)
- Màu Nền 2: #FFD700 (vàng)
- Màu Chữ: #FFFFFF (trắng)
- Emoji Trên: 🎆
- Emoji Dưới: 🧧

**Bước 3:** Nhấn **👁️ Xem Trước** → Xem kết quả

**Bước 4:** Nhấn **💾 Lưu** → Lưu template

**Bước 5:** Nhấn **📤 Xuất** → Chia sẻ JSON file

---

### Ví Dụ 2: Upload Template từ Ảnh

**Bước 1:** Nhấn **📸 Upload Ảnh**

**Bước 2:** Chọn ảnh nền (VD: ảnh gradient, ảnh hoa)

**Bước 3:** Nút **🎨 Tùy Chỉnh** sẽ active

**Bước 4:** Nhấn **✏️ Chỉnh Sửa** để tinh chỉnh màu chữ, emoji

**Bước 5:** Nhấn **💾 Lưu** → Lưu template

---

### Ví Dụ 3: Import Template từ Người Khác

**Bước 1:** Bạn bè gửi file `.json`

**Bước 2:** Nhấn **📄 Upload JSON**

**Bước 3:** Chọn file `.json` từ bạn bè

**Bước 4:** Template được apply ngay lập tức ✅

**Bước 5:** Nhấn **💾 Lưu** nếu muốn lưu lại

---

## 📊 Dữ Liệu Được Lưu

### LocalStorage
- **Key**: `customTemplate`
- **Value**: JSON string với template data
- **Vị trí**: Máy người dùng (không lên server)
- **Bảo mật**: Chỉ bạn có thể truy cập

### Nó được lưu khi:
- ✅ Nhấn nút **💾 Lưu**
- ✅ Upload hình ảnh
- ✅ Upload file JSON
- ✅ Chỉnh sửa và nhấn **👁️ Xem Trước**

### Nó bị xóa khi:
- ❌ Xóa cache trình duyệt
- ❌ Xóa cookies/site data
- ❌ Browser chuyển sang Private Mode

---

## 🔧 Tính Năng Bổ Sung

### Template Button Grid
- Hiển thị 5 nút: **Mẫu 1, 2, 3, 4, Tùy Chỉnh**
- Nút **🎨 Tùy Chỉnh** cho phép dùng template riêng

### Import Section
- Hiển thị 5 nút chức năng: Upload Ảnh, Upload JSON, Chỉnh Sửa, Lưu, Xuất
- Responsive: Giảm từ 5 cột → 3 cột → 2 cột trên mobile

### Custom Editor
- Ẩn/hiện bằng nút **✏️ Chỉnh Sửa**
- Cho phép tùy chỉnh 6 tham số
- Xem trước ngay tức khắc

---

## ⚠️ Lưu Ý Quan Trọng

1. **JSON Format**: File phải đúng format, nếu không sẽ báo lỗi
2. **Emoji**: Chỉ nhập tối đa 2 ký tự, nên dùng emoji đơn
3. **Màu**: Nhập dạng hex (#RRGGBB) hoặc chọn từ color picker
4. **LocalStorage**: Tính năng lưu chỉ hoạt động trên cùng một browser
5. **Backup**: Hãy xuất template quan trọng để backup

---

## 🎁 Tích Hợp Giỏ Hàng

- Template tùy chỉnh có thể được thêm vào giỏ hàng
- Đi kèm sản phẩm khi checkout
- Miễn phí (giá 0) khi mua sản phẩm

---

## ✅ Kiểm Tra Chức Năng

- [ ] Upload ảnh thành công
- [ ] Upload JSON thành công
- [ ] Chỉnh sửa template hoạt động
- [ ] Lưu template vào LocalStorage
- [ ] Xuất template dưới dạng JSON
- [ ] Template xuất hiện trong giỏ hàng
- [ ] Thêm template vào giỏ không lỗi

---

**Tải ngày:** 2026-11-11  
**Version:** 1.0  
**Author:** Copilot
