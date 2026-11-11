# 🎯 QUICK START: 3 Tính Năng Tùy Chỉnh Thiệp

## 3️⃣ Tính Năng Mới - Cách Sử Dụng Nhanh

### 1️⃣ 📸 Upload Ảnh
```
Bước 1: Nhấn nút "📸 Upload Ảnh"
Bước 2: Chọn ảnh từ máy tính
Bước 3: Ảnh hiển thị trên thiệp
Bước 4: Nhấn "💾 Lưu" hoặc "📤 Xuất"
```

### 2️⃣ 📄 Upload JSON
```
Bước 1: Nhấn nút "📄 Upload JSON"
Bước 2: Chọn file JSON (vd: template-example-tet.json)
Bước 3: Template tự động thay đổi
Bước 4: Nhấn "💾 Lưu" hoặc "📤 Xuất"
```

### 3️⃣ ✏️ Chỉnh Sửa
```
Bước 1: Nhấn nút "✏️ Chỉnh Sửa"
Bước 2: Điền thông tin (màu, emoji, tiêu đề)
Bước 3: Nhấn "👁️ Xem Trước"
Bước 4: Nhấn "💾 Lưu" hoặc "📤 Xuất"
```

---

## 📋 JSON Format (Nếu Cần Tạo File Riêng)

```json
{
  "title": "Tên Template",
  "bgColor": "#FF0000",
  "bgColor2": "#FFD700",
  "textColor": "#FFFFFF",
  "topEmoji": "🎉",
  "bottomEmoji": "🎂"
}
```

### Giải Thích Các Trường:
- **title** - Tên template (tối đa 20 ký tự)
- **bgColor** - Màu nền chính (format hex: #RRGGBB)
- **bgColor2** - Màu nền phụ cho gradient
- **textColor** - Màu chữ (format hex)
- **topEmoji** - 1-2 emoji ở trên
- **bottomEmoji** - 1-2 emoji ở dưới

---

## 🎨 Màu Hex Thường Dùng

### Tet
```
bgColor: #FF0000 (Đỏ)
bgColor2: #FFD700 (Vàng)
textColor: #FFFFFF (Trắng)
topEmoji: 🎆
bottomEmoji: 🧧
```

### Valentine
```
bgColor: #FF69B4 (Hồng)
bgColor2: #FFB6C1 (Hồng nhạt)
textColor: #FFFFFF (Trắng)
topEmoji: 💕
bottomEmoji: 💐
```

### Sinh Nhật
```
bgColor: #FF8A65 (Cam)
bgColor2: #FFB74D (Cam nhạt)
textColor: #FFFFFF (Trắng)
topEmoji: 🎉
bottomEmoji: 🎂
```

---

## ⚡ Tips & Tricks

✅ **Lưu template:** Nhấn "💾 Lưu" sẽ lưu vào LocalStorage máy bạn
✅ **Chia sẻ:** Nhấn "📤 Xuất" sẽ tải file JSON, gửi cho bạn bè
✅ **Import:** Bạn bè gửi file JSON → nhấn "📄 Upload JSON" → import
✅ **Xem trước:** Nhấn "👁️ Xem Trước" sau mỗi thay đổi

---

## ❌ Troubleshooting

### Nút không hoạt động?
→ Refresh lại trang (F5)
→ Kiểm tra file path và định dạng

### Ảnh/JSON không load?
→ Kiểm tra định dạng file
→ Thử file ví dụ trước: `template-example-tet.json`

### Template không thay đổi?
→ Nhấn "👁️ Xem Trước" sau khi chỉnh sửa
→ Kiểm tra xem nút template nào được highlight

---

## 📚 Tham Khảo

- **Hướng Dẫn Chi Tiết:** `/guide-3-features.html`
- **File Ví Dụ 1:** `template-example-tet.json`
- **File Ví Dụ 2:** `template-example-valentine.json`
- **Báo Cáo Sửa Chữa:** `REPAIR-3-FEATURES.md`

---

## 🚀 Bắt Đầu Ngay

👉 [Tới Phần Thiệp Tặng Quà](/#greeting-cards)

---

**Ngày cập nhật:** 2026-11-11  
**Status:** ✅ HOẠT ĐỘNG BÌNH THƯỜNG
