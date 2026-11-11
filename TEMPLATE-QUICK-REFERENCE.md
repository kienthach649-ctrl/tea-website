# 🎨 Thiệp Tặng Quà - Template Import/Export
## Hướng Dẫn Nhanh

---

## 🎯 5 Nút Chính

| Nút | Dùng Để | Cách |
|-----|---------|------|
| 📸 | Upload ảnh | Click → Chọn ảnh từ máy |
| 📄 | Upload JSON | Click → Chọn file `.json` |
| ✏️ | Chỉnh sửa | Click → Thay màu, emoji |
| 💾 | Lưu template | Click → Lưu vào máy |
| 📤 | Xuất JSON | Click → Tải file `.json` |

---

## 🎨 Chỉnh Sửa Template

**6 Trường:**
1. **Tiêu Đề** - Tên template (max 20 ký tự)
2. **Màu Nền 1** - Color picker
3. **Màu Nền 2** - Color picker (gradient)
4. **Màu Chữ** - Color picker
5. **Emoji Trên** - 1-2 ký tự
6. **Emoji Dưới** - 1-2 ký tự

**Sau khi fill:** Click **👁️ Xem Trước** → Check kết quả

---

## 💾 Lưu & Xuất

### Lưu
- Dữ liệu lưu trên **máy của bạn**
- Không lên server
- Persist khi reload trang
- Mất khi clear cache

### Xuất
- Download file `.json`
- Chia sẻ với bạn bè
- Hoặc backup template

---

## 📝 JSON Format

```json
{
  "title": "Tên Template",
  "bgColor": "#RRGGBB",
  "bgColor2": "#RRGGBB",
  "textColor": "#RRGGBB",
  "topEmoji": "😊",
  "bottomEmoji": "💝"
}
```

---

## 🚀 Quick Start

### Tạo Template Mới
1. Click **✏️ Chỉnh Sửa**
2. Fill 6 fields
3. Click **👁️ Xem Trước**
4. Click **💾 Lưu**

### Import Template Từ Người Khác
1. Nhận file `.json`
2. Click **📄 Upload JSON**
3. Chọn file
4. Done! ✅

### Chia Sẻ Template
1. Click **📤 Xuất**
2. File tự động download
3. Gửi file cho người khác

---

## ✅ Kiểm Tra

- [ ] Có 5 nút: Upload Ảnh, Upload JSON, Chỉnh Sửa, Lưu, Xuất
- [ ] Editor form hiển thị 6 fields
- [ ] Preview cập nhật khi thay đổi
- [ ] File JSON download được
- [ ] Template lưu và tải lại được

---

## 💡 Tips

- 🎨 Dùng color picker thay vì gõ hex
- 😊 Chọn emoji từ emoji keyboard
- 📱 Hoạt động trên mobile
- 🔄 Có thể import lại template cũ
- 🎯 Template free khi mua sản phẩm

---

**v1.0 - 2026-11-11**
