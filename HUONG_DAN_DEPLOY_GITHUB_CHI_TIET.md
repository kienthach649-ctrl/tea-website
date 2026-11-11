# 📖 Hướng Dẫn Chi Tiết: Đẩy GitHub → BKNS

## ✅ Phần 1: Chuẩn Bị (Bạn phải làm những bước này)

---

### 🔑 Bước 1: Chuẩn bị thông tin BKNS

Trước khi bắt đầu, bạn cần lấy **FTP credentials** từ BKNS. Đăng nhập vào BKNS Dashboard:

1. **Truy cập**: https://my.bkns.net (hoặc link cPanel của bạn)
2. **Tìm "File Manager"** hoặc **"FTP Accounts"**
3. **Ghi lại những thông tin sau**:

```
FTP_HOST:          [VD: ftp.kinhdoanhso.io.vn hoặc 123.45.67.89]
FTP_USERNAME:      [VD: kinhdoanhso hoặc root]
FTP_PASSWORD:      [Mật khẩu FTP của bạn]
FTP_REMOTE_PATH:   [VD: /public_html]
```

> 💡 **Lưu ý**: Thường `FTP_REMOTE_PATH` là `/public_html`. Nếu bạn không chắc, hỏi support BKNS.

---

### 🐱 Bước 2: Tạo GitHub Repository

#### 2.1 Đăng nhập GitHub
- Truy cập: https://github.com
- Đăng nhập (hoặc tạo tài khoản nếu chưa có)

#### 2.2 Tạo Repository Mới
1. Click **+** (góc trên phải) → **New repository**
2. Điền thông tin:
   - **Repository name**: `tea-website` (hoặc tên bạn muốn)
   - **Description**: `Trà Sâm Trường Nhân - E-commerce Website`
   - **Public**: ✅ (chọn Public để BKNS có thể access)
3. ❌ **Không chọn**: Add README, .gitignore, License (vì chúng ta đã có .gitignore)
4. Click **Create repository**

#### 2.3 Lấy Repository URL
Sau khi tạo xong, GitHub sẽ cho bạn URL:
```
https://github.com/YOUR-USERNAME/tea-website.git
```

> 💾 **Ghi nhớ URL này** - bạn sẽ dùng nó ở bước tiếp theo

---

### 🔑 Bước 3: Push Code lên GitHub

Mở **PowerShell** và chạy các lệnh sau:

#### 3.1 Điều hướng vào project folder
```powershell
cd f:\webkinhdoanhso
```

#### 3.2 Thêm GitHub repository
```powershell
# Thay YOUR-USERNAME bằng username GitHub của bạn
git remote add origin https://github.com/YOUR-USERNAME/tea-website.git
```

#### 3.3 Đổi tên branch sang main
```powershell
git branch -M main
```

#### 3.4 Push code lên GitHub
```powershell
git push -u origin main
```

**Lần đầu tiên**, GitHub sẽ yêu cầu xác thực. Làm theo hướng dẫn:
- Chọn "Authorize with GitHub.com"
- Hoặc nhập username + GitHub token (nếu có)

#### ✅ Xác nhận thành công
```
# Output sẽ hiển thị tương tự:
Enumerating objects: 60, done.
Counting objects: 100% (60/60), done.
...
To https://github.com/YOUR-USERNAME/tea-website.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

---

## 🚀 Phần 2: Cấu Hình Tự động Deploy (GitHub Actions)

---

### 🔐 Bước 4: Thêm FTP Secrets vào GitHub

**Mục đích**: Giữ bí mật FTP password (không commit vào Git)

#### 4.1 Truy cập Repository Settings
1. GitHub → Repository bạn vừa tạo
2. Click **Settings** (tab trên cùng)
3. Bên trái → **Secrets and variables** → **Actions**

#### 4.2 Tạo FTP Secrets
Click **New repository secret** và tạo 4 secret sau:

| Secret Name | Giá trị | Ví dụ |
|------------|--------|-------|
| `FTP_HOST` | Host FTP từ BKNS | `ftp.kinhdoanhso.io.vn` |
| `FTP_USERNAME` | Username FTP | `kinhdoanhso` |
| `FTP_PASSWORD` | Password FTP | `your-ftp-password` |
| `FTP_REMOTE_PATH` | Đường dẫn public_html | `/public_html` |

#### ⚠️ Bảo mật:
- **KHÔNG** bao giờ chia sẻ FTP password
- GitHub sẽ mã hóa tất cả secrets
- Chỉ GitHub Actions workflow mới có thể đọc

---

### ✅ Bước 5: Kích Hoạt GitHub Actions

#### 5.1 Commit workflow file
Workflow file (`.github/workflows/deploy.yml`) đã được tạo trong project.

Push nó lên GitHub:
```powershell
cd f:\webkinhdoanhso
git add .github/
git commit -m "Add GitHub Actions deploy workflow"
git push origin main
```

#### 5.2 Xác nhận workflow đã active
1. GitHub Repository → **Actions** tab
2. Bạn sẽ thấy workflow "Deploy to BKNS"
3. Nó sẽ **tự động chạy** khi push lên `main` branch

---

### 🎯 Bước 6: Test Deploy Lần Đầu

#### 6.1 Thực hiện một commit nhỏ để test
```powershell
cd f:\webkinhdoanhso

# Tạo một file test
echo "✅ Website deployed!" > test-deploy.txt

# Commit
git add test-deploy.txt
git commit -m "Test: GitHub Actions deploy workflow"
git push origin main
```

#### 6.2 Theo dõi GitHub Actions
1. GitHub → Repository → **Actions** tab
2. Bạn sẽ thấy workflow đang chạy (vàng 🟨)
3. Chờ nó hoàn thành (xanh ✅ hoặc đỏ ❌)

#### 6.3 Nếu thành công (✅)
```
✅ Deployment to BKNS successful!
```
Website của bạn sẽ được cập nhật tại: https://kinhdoanhso.io.vn

#### 6.4 Nếu thất bại (❌)
- Kiểm tra FTP credentials có đúng không
- Xem workflow logs: Actions → [workflow name] → Logs
- Thường là lỗi password hoặc FTP host

---

## 🔄 Phần 3: Quy Trình Update Hàng Ngày

---

### Mỗi khi bạn muốn update website:

#### Cách 1: Qua Git (RECOMMENDED)
```powershell
cd f:\webkinhdoanhso

# Sửa files (HTML, CSS, JS, etc.)
# ...

# Commit changes
git add .
git commit -m "Update: [Mô tả thay đổi]"
git push origin main

# GitHub Actions sẽ tự động deploy!
```

#### Cách 2: Thủ công (nếu GitHub Actions gặp lỗi)
1. Download ZIP từ GitHub: Code → Download ZIP
2. Upload qua FTP/SFTP của BKNS
3. Extract files

---

## 🎯 Kiểm Tra Kết Quả

### Xác nhận website đã cập nhật:
1. Truy cập: https://kinhdoanhso.io.vn
2. F12 → Network → Reload
3. Xem files được load từ server
4. Nếu thấy thay đổi → ✅ Success!

---

## ⚙️ Troubleshooting

| Vấn đề | Nguyên nhân | Giải pháp |
|--------|-----------|----------|
| ❌ Workflow fail | FTP credentials sai | Kiểm tra lại secrets trên GitHub |
| ❌ Workflow fail | FTP host không đúng | Xác nhận host từ BKNS dashboard |
| ⏳ Workflow chạy lâu | Upload nhiều files | Chờ hoặc kiểm tra network |
| 🔄 Không tự động deploy | Không thêm workflow | Đảm bảo `.github/workflows/deploy.yml` đã push |

---

## 📋 Checklist Hoàn Thành

Bạn đã hoàn thành khi:

- [ ] ✅ Git repository khởi tạo (`git init`)
- [ ] ✅ Code đã commit (`git commit`)
- [ ] ✅ GitHub repository tạo
- [ ] ✅ Code push lên GitHub (`git push`)
- [ ] ✅ FTP secrets thêm vào GitHub
- [ ] ✅ GitHub Actions workflow đã kích hoạt
- [ ] ✅ Test deploy thành công
- [ ] ✅ Website cập nhật trên kinhdoanhso.io.vn

---

## 🎉 Kết quả cuối cùng

```
Local (F:\webkinhdoanhso)
         ↓ git push
GitHub (https://github.com/your-username/tea-website)
         ↓ GitHub Actions (tự động)
BKNS Server (https://kinhdoanhso.io.vn)
```

**Mỗi lần bạn `git push`, website sẽ tự động cập nhật!** 🚀

---

## 📞 Cần Giúp?

Nếu bạn gặp lỗi:
1. Kiểm tra workflow logs: GitHub → Actions → [workflow name]
2. Xác nhận FTP credentials
3. Kiểm tra kết nối BKNS

---

**Created**: 11/11/2026
**Status**: Ready to Deploy ✅
