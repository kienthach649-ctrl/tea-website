# 🎨 Chủ Đề Màu Sắc - Xanh Lá Pastel

## ✨ Chi Tiết Màu Sắc

### Bảng Màu Chính

| Tên | Màu Hex | RGB | Mô Tả |
|-----|---------|-----|-------|
| **Primary Green** | #7DBE6F | rgb(125, 190, 111) | Xanh lá pastel chính (Navbar, Buttons) |
| **Dark Green** | #5F9E56 | rgb(95, 158, 86) | Xanh lá tối hơn (Gradients, Hover) |
| **Light Green** | #A8D5BA | rgb(168, 213, 186) | Xanh lá nhạt (Accents, Highlights) |
| **Very Light Green** | #C8E6D7 | rgb(200, 230, 215) | Xanh lá rất nhạt (Secondary BG) |
| **Pale Green** | #E0F0E8 | rgb(224, 240, 232) | Xanh lá xước (Hover Effects) |
| **Light BG** | #f0f8f5 | rgb(240, 248, 245) | Nền nhạt (Cards, Sections) |
| **Border** | #d4e8e0 | rgb(212, 232, 224) | Đường viền (Separators) |

### Màu Chữ & Nền

| Tên | Giá Trị | Sử Dụng |
|-----|---------|--------|
| Dark Text | #1a1a1a | Chữ chính |
| Light Text | #ffffff | Chữ trắng (trên nền xanh) |
| Light BG | #f0f8f5 | Nền nhạt |

---

## 📍 Áp Dụng Theo Phần

### 1. **Navbar** (#7DBE6F)
- ✅ Background: Xanh lá pastel chính
- ✅ Logo + Links: Trắng
- ✅ Hover underline: Xanh lá nhạt (#A8D5BA)

### 2. **Buttons** (#7DBE6F)
- ✅ Primary Button: Gradient (Xanh lá nhạt → Xanh lá chính)
- ✅ Outline Button: Border xanh lá
- ✅ Hover Effect: Xánh lá tối hơn

### 3. **Badges** (Xanh lá variations)
- ✅ "Bán Chạy": Gradient xanh lá (tối → sáng)
- ✅ "Premium": Gradient xanh lá (nhạt → chính)
- ✅ "Yêu Thích": Gradient xanh lá (rất nhạt → nhạt)
- ✅ "Độc Quyền": Gradient xanh lá (chính → tối)

### 4. **Benefit Cards** (#E0F0E8)
- ✅ Background: Xanh lá rất nhạt
- ✅ Border: Xanh lá pastel nhẹ
- ✅ Text: Đen (#1a1a1a)

### 5. **FAQ Section** 
- ✅ Question BG: Xanh lá rất nhạt (#f0f8f5)
- ✅ Hover: Xanh lá xước (#e0f0e8)
- ✅ Answer BG: Trắng

### 6. **Loyalty Section** (#7DBE6F - #5F9E56)
- ✅ Background: Gradient xanh lá (sáng → tối)
- ✅ Text: Trắng
- ✅ Tier Badges: Border trắng, text xanh lá chính

### 7. **Stars** ⭐
- ✅ Màu sắc: Xanh lá pastel chính (#7DBE6F)

### 8. **Section Headers**
- ✅ Subtitle: Xanh lá pastel chính (#7DBE6F)
- ✅ Main Heading: Đen hoặc xanh lá tối

---

## 🎨 Gradient Combinations

| Từ | Đến | Sử Dụng |
|----|-----|--------|
| #C8E6D7 | #A8D5BA | Gradient text (Hero) |
| #7DBE6F | #5F9E56 | Buttons, Sections |
| #A8D5BA | #7DBE6F | Secondary gradients |
| #C8E6D7 | #7DBE6F | Quiz background |

---

## 🔄 CSS Variables (`:root`)

```css
:root {
    --primary-color: #7DBE6F;          /* Xanh lá chính */
    --primary-dark: #5F9E56;           /* Xanh lá tối */
    --primary-light: #A8D5BA;          /* Xanh lá nhạt */
    --secondary-color: #C8E6D7;        /* Xanh lá rất nhạt */
    --accent-color: #A8D5BA;           /* Accent = nhạt */
    --light-bg: #f0f8f5;               /* Nền nhạt */
    --border-color: #d4e8e0;           /* Border */
}
```

---

## 📝 Thay Đổi Từ Cũ Sang Mới

### Trước (Brown Theme)
- Primary: #8B4513 (Brown)
- Secondary: #D2B48C (Tan)
- Accent: #E74C3C (Red)

### Sau (Green Pastel Theme)
- Primary: #7DBE6F (Green Pastel)
- Secondary: #C8E6D7 (Very Light Green)
- Accent: #A8D5BA (Light Green)

---

## ✨ Hiệu Ứng Pastel

- **Nhẹ nhàng**: Sử dụng gradient mục mục
- **Ngoài trơn**: Không sử dụng màu quá đậm
- **Hài hòa**: Tất cả màu từ cùng một họ xanh
- **Sạch**: Nền nhạt tạo không gian hơi thở
- **Hiện đại**: Pastel phù hợp với xu hướng 2026

---

## 🎯 Tính Chất Thương Hiệu

✅ **Thân thiện**: Xanh lá pastel là màu tự nhiên, gần gũi  
✅ **Khỏe mạnh**: Tương ứng với sản phẩm trà wellness  
✅ **Bền vững**: Xanh lá = thiên nhiên, sâm Ngọc Linh  
✅ **Hiện đại**: Pastel là xu hướng thiết kế 2024-2026  
✅ **Nổi bật**: Khác biệt so với các website trà truyền thống  

---

## 📱 Hỗ Trợ Dark Mode (Tương Lai)

Nếu muốn thêm dark mode trong tương lai:
```css
@media (prefers-color-scheme: dark) {
    :root {
        --dark-text: #e0e0e0;
        --light-bg: #1a2a24;
        --border-color: #2a4a3c;
    }
}
```

---

**Cập nhật lần cuối:** 2026-11-10  
**File được sửa đổi:**
- ✅ styles.css (CSS variables)
- ✅ new-features.css (Gradients, backgrounds)
- ✅ index.html (Inline styles)
