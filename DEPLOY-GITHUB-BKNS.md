# 🚀 Hướng Dẫn Deploy: GitHub → BKNS

**Status**: Git repository đã khởi tạo ✅

---

## 📋 Bước 1: Tạo Repository trên GitHub

### 1.1 Đăng nhập GitHub
- Truy cập: https://github.com
- Đăng nhập với tài khoản của bạn

### 1.2 Tạo Repository Mới
1. Click vào **+** (góc phải) → **New repository**
2. **Repository name**: `tea-website` (hoặc tên khác)
3. **Description**: `Trà Sâm Trường Nhân - Professional Tea E-commerce`
4. Chọn **Public** (để BKNS có thể kéo code)
5. ✅ Click **Create repository**

### 1.3 Lấy Repository URL
Sau khi tạo xong, bạn sẽ thấy URL dạng:
```
https://github.com/YOUR-USERNAME/tea-website.git
```

---

## 📍 Bước 2: Push Code lên GitHub

Chạy các lệnh sau trong **PowerShell** hoặc **Git Bash**:

```bash
cd f:\webkinhdoanhso

# Thêm remote GitHub (thay YOUR-USERNAME và repo-name)
git remote add origin https://github.com/YOUR-USERNAME/tea-website.git

# Đổi branch chính thành main (GitHub mặc định)
git branch -M main

# Push code lên GitHub
git push -u origin main
```

### ✅ Xác nhận thành công
- Truy cập https://github.com/YOUR-USERNAME/tea-website
- Bạn sẽ thấy tất cả files đã upload

---

## 🔄 Bước 3: Deploy từ GitHub → BKNS

### Cách 1: FTP Deploy (Thủ công)

Mỗi khi cập nhật code:
1. Commit và push lên GitHub
2. Tải file ZIP từ GitHub: **Code** → **Download ZIP**
3. Upload qua FTP/SFTP của BKNS

### Cách 2: GitHub Actions (Tự động)

Tôi sẽ tạo `.github/workflows/deploy.yml` để tự động đẩy code lên BKNS mỗi khi push.

**Yêu cầu chuẩn bị:**
- FTP Host của BKNS (vd: `ftp.kinhdoanhso.io.vn`)
- FTP Username
- FTP Password
- FTP Public HTML Path (vd: `/public_html`)

### Cách 3: Git Clone trực tiếp trên Server (Nếu Server có Git)

1. SSH vào BKNS server
2. Vào `/public_html` folder
3. Chạy:
```bash
git clone https://github.com/YOUR-USERNAME/tea-website.git
cd tea-website
# Files sẽ nằm trong /public_html/tea-website/
```

---

## 🎯 Giải Pháp Khuyến Nghị

### **Option A: GitHub Actions + FTP (RECOMMENDED)**
```
GitHub Push → Tự động trigger → FTP upload lên BKNS
```
✅ Tự động, không cần thủ công
⚠️ Cần cấu hình FTP credentials

### **Option B: Git Clone trực tiếp (Nếu server hỗ trợ SSH + Git)**
```
GitHub → SSH vào BKNS → git clone/pull → Done
```
✅ Sạch sẽ, dễ quản lý
⚠️ Cần SSH access

### **Option C: Tải ZIP thủ công**
```
GitHub → Download ZIP → Upload via FTP → Extract
```
✅ Đơn giản
⚠️ Thủ công, tốn thời gian

---

## ⚙️ Cấu Hình GitHub Actions (Tự động Deploy)

Tôi sẽ tạo file workflow tự động nếu bạn muốn. 

**Những thông tin cần có từ BKNS:**
1. FTP Host (server address)
2. FTP Username
3. FTP Password
4. FTP Remote Path (`/public_html` hoặc similar)

---

## 🔐 Bảo Mật Credentials

**KHÔNG bao giờ** commit FTP password vào Git!

Thay vào đó, dùng **GitHub Secrets**:
1. Repository Settings → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Thêm:
   - `FTP_HOST`
   - `FTP_USERNAME`
   - `FTP_PASSWORD`
   - `FTP_REMOTE_PATH`

Workflow sẽ sử dụng: `${{ secrets.FTP_PASSWORD }}`

---

## 📝 Commit History

```bash
# Xem lịch commit
git log --oneline

# Output:
# aeccc8e Initial commit: Professional tea e-commerce website with greeting card features
```

---

## 🚀 Lệnh Nhanh (Copy-Paste)

### Setup lần đầu:
```bash
cd f:\webkinhdoanhso
git remote add origin https://github.com/YOUR-USERNAME/tea-website.git
git branch -M main
git push -u origin main
```

### Update lần sau:
```bash
cd f:\webkinhdoanhso
git add .
git commit -m "Update: [thay đổi gì]"
git push origin main
```

---

## ❓ FAQ

**Q: Làm sao để xem code trên GitHub?**
A: Truy cập https://github.com/YOUR-USERNAME/tea-website

**Q: Muốn tạo GitHub Actions workflow?**
A: Chuẩn bị FTP credentials từ BKNS, tôi sẽ tạo file `.github/workflows/deploy.yml`

**Q: Phải push lên GitHub mỗi lần sửa code?**
A: Có, nhưng nó là best practice. Ngoài ra, GitHub cũng serve như backup.

**Q: Có thể deploy mà không cần GitHub?**
A: Có, dùng Git trực tiếp trên server (nếu server hỗ trợ SSH + Git)

---

## 📞 Next Steps

1. ✅ **Tạo GitHub repo** (link ở trên)
2. ✅ **Push code** (dùng lệnh Copy-Paste)
3. ✅ **Chọn deploy method** (Actions / SSH / Manual)
4. ✅ **Cấu hình BKNS** (nếu chọn automated)

---

**Git Status**:
```
Repository: f:\webkinhdoanhso
Branch: main
Files Tracked: 60
Ready to Push: ✅ YES
```

---

Hãy cho tôi biết:
- ✅ Bạn đã tạo GitHub repo chưa?
- ✅ URL repository là gì?
- ✅ Muốn dùng GitHub Actions không?
