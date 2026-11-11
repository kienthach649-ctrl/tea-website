# 🍵 Trà Sâm Trường Nhân - Tính Năng Website

## ✨ Tính Năng Chính

### 1. 🛒 Giỏ Hàng Thông Minh
- Thêm/xóa sản phẩm dễ dàng
- Tính tổng tiền tự động
- Lưu giỏ hàng trong localStorage
- Icon hiển thị số lượng sản phẩm

### 2. 🌿 Sản Phẩm
- **7 loại trà cao cấp từ Ngọc Linh**
  - Sâm Ngọc Linh Nguyên Lá (280,000đ)
  - Sâm Tâm Lá (250,000đ)
  - Sâm Lá Nhỏ (220,000đ)
  - Sâm Tuổi 5 (350,000đ)
  - Sâm Tuổi 10 (480,000đ)
  - Sâm Ngọc Linh Kỳ Tuyệt (600,000đ)
  - Sâm Thần Tài (520,000đ)
- Hình ảnh chuyên nghiệp từ Pexels
- Đánh giá ⭐⭐⭐⭐⭐ cho tất cả sản phẩm
- Badge: "Bán Chạy", "Premium", "Yêu Thích"

### 3. 📖 Câu Chuyện Thương Hiệu
- Thông tin về Sâm Ngọc Linh (99% tự nhiên, 1% hương xoa)
- **7 Thành Phần Quý Hiếm:**
  - Đông Trùng Hạ Thảo
  - Nhân Sâm Ngọc Linh
  - Thìa Canh
  - Dâu Tằm
  - Hầu Quả
  - Hoa Nhài
  - Cam Thảo

### 4. 📰 Blog
- Placeholder cho bài viết hữu ích
- Dữ liệu sẵn sàng trong features-data.js
- Button để theo dõi blog mới nhất

### 5. ❓ FAQ - Câu Hỏi Thường Gặp
- **4 câu hỏi thường gặp:**
  1. Mỗi ngày nên uống bao nhiêu túi trà?
  2. Trà có chứa caffeine không?
  3. Bảo quản trà như thế nào?
  4. Trà có an toàn cho trẻ em không?
- Mở rộng/thu gọn động (toggle animation)

### 6. ⭐ Testimonials - Đánh Giá Khách Hàng
- **4 đánh giá 5 sao:**
  - Chị Loan (45 tuổi) - Giáo viên
  - Anh Minh (52 tuổi) - Doanh nhân
  - Chị Hương (38 tuổi) - Nhân viên Văn phòng
  - Anh Tuấn (60 tuổi) - Người Hưu Trí
- Hiển thị ở dạng grid responsive

### 7. 🎁 Chương Trình Loyalty
- **Tự động nhận 50 điểm khi lần đầu**
- **3 Tier Membership:**
  - **Bạc:** 0-499 điểm
  - **Vàng:** 500-999 điểm
  - **Kim Cương:** 1000+ điểm
- **Lợi Ích:**
  - Bạc: Giảm giá 5%
  - Vàng: Giảm giá 10%
  - Kim Cương: Hỗ trợ ưu tiên + quà tặng

### 8. 📧 Newsletter
- Modal popup để đăng ký email
- Validation email kiểm tra
- Lưu email trong localStorage
- Khuyến khích: "Giảm 10% cho đơn hàng tiếp theo"

### 9. 👥 Đội Nhóm
- **5 thành viên chuyên nghiệp:**
  - Ngô Tuấn Anh (CEO & Founder)
  - Lê Thị Hồng Hạnh (Marketing Manager)
  - Trần Minh Tuấn (Product Manager)
  - Phạm Thị Linh (Community Manager)
  - Võ Hoàng Thiên Ân (Customer Support Lead)
- Ảnh chuyên nghiệp và thông tin liên hệ

### 10. 📊 Analytics Dashboard
- Hiển thị metrics:
  - 125,000+ Lượt xem
  - 8,500+ Tương tác
  - 450+ Đơn hàng
  - 6.8% Tỷ lệ chuyển đổi
- Biểu đồ hiệu suất 8 tuần

---

## 🎨 Thiết Kế

### Color Scheme
- **Primary:** #8B4513 (Brown - Trà)
- **Secondary:** #D2B48C (Tan - Tự nhiên)
- **Accent:** #E74C3C (Red - Nổi bật)

### Responsive Design
- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)
- Tất cả sections có grid layouts adaptive

### Animations
- Hover effects trên sản phẩm
- FAQ toggle với max-height transition
- Newsletter modal fade in/out
- Button hover animations

---

## 📁 Cấu Trúc File

```
F:\webkinhdoanhso\
├── index.html              - HTML chính (806 dòng)
├── styles.css              - CSS (26.75 KB)
├── script.js               - JavaScript (13.38 KB)
├── features-data.js        - Dữ liệu features (4.92 KB)
├── loyalty-system.js       - Hệ thống loyalty (2.33 KB)
├── new-features.css        - CSS cho features mới (9.69 KB)
├── README.md               - Hướng dẫn sử dụng
├── FEATURES.md             - File này
└── .../
```

---

## 🚀 Cách Sử Dụng

### Phương Pháp 1: Mở Trực Tiếp
```
1. Vào thư mục: F:\webkinhdoanhso\
2. Double-click: index.html
3. Website sẽ mở trong trình duyệt
```

### Phương Pháp 2: Chạy Local Server
```bash
cd F:\webkinhdoanhso
python -m http.server 8000

# Truy cập: http://localhost:8000
```

---

## 💾 Lưu Trữ Dữ Liệu

### localStorage Keys
- `cart`: Giỏ hàng (JSON array)
- `loyaltyPoints`: Điểm loyalty (number)
- `loyaltyInitialized`: Cờ khởi tạo (true/false)
- `newsletterEmails`: Email newsletter (JSON array)

---

## ✅ Tính Năng Hoàn Thành

- [x] Giao diện professional & chuyên nghiệp
- [x] 7 sản phẩm với giá cả rõ ràng
- [x] Giỏ hàng thông minh
- [x] Blog section
- [x] FAQ tương tác
- [x] Testimonials / Đánh giá
- [x] Loyalty Program
- [x] Newsletter signup
- [x] Đội nhóm (5 thành viên)
- [x] Analytics dashboard
- [x] Responsive design
- [x] Ảnh professional từ Pexels

---

## 📝 Nội Dung Được Tích Hợp

Từ document DBC_ND2_INFINITY.docx:
- ✅ Thông tin sản phẩm (7 loại trà)
- ✅ Thành phần quý hiếm (7 loại)
- ✅ Lợi ích sức khỏe
- ✅ Hướng dẫn sử dụng
- ✅ Câu chuyện thương hiệu
- ✅ Thông tin đội nhóm
- ✅ FAQ & Testimonials

---

## 🎯 Khác Biệt So Với Các Website Thương Mại Khác

1. **Premium Design** - Màu sắc ấm áp, layout hiện đại
2. **Story-Focused** - Tập trung vào câu chuyện thương hiệu
3. **Community-Driven** - Loyalty program & testimonials
4. **Data Persistence** - Giỏ hàng & loyalty lưu tự động
5. **Mobile-First** - Responsive trên tất cả thiết bị

---

**Chiến dịch: Trà Sâm Trường Nhân 2026** 🌿☕
