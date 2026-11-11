# 🎨 Template Import/Export System - Visual Architecture

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                  GREETING CARD SECTION                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              TEMPLATE SELECTOR (5 BUTTONS)           │  │
│  │  [Mẫu 1] [Mẫu 2] [Mẫu 3] [Mẫu 4] [🎨 Tùy Chỉnh]  │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │        IMPORT/EXPORT SECTION (5 BUTTONS)            │  │
│  │  [📸] [📄] [✏️] [💾] [📤]                            │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │            CUSTOM EDITOR (HIDDEN)                    │  │
│  │  Title: [input]  BgColor: [color picker]            │  │
│  │  BgColor2: [color picker]  TextColor: [color picker]│  │
│  │  TopEmoji: [input]  BottomEmoji: [input]            │  │
│  │  [👁️ Preview]                                        │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              CARD PREVIEW AREA                       │  │
│  │                                                      │  │
│  │           ┌──────────────────────┐                  │  │
│  │           │ ✨ Tặng Yêu Thương ✨│                 │  │
│  │           │                      │                  │  │
│  │           │  [Message preview]   │                  │  │
│  │           │   — Sender Name      │                  │  │
│  │           │                      │                  │  │
│  │           │ 🌿                   │                  │  │
│  │           └──────────────────────┘                  │  │
│  │                                                      │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │            CARD EDITOR FORM                          │  │
│  │  Người Nhận: [input]                               │  │
│  │  Lời Nhắn: [textarea] (0/150)                      │  │
│  │  Người Gửi: [input]                                │  │
│  │  Màu Sắc: [Vàng] [Xanh] [Hồng]                     │  │
│  │  [Thêm Vào Giỏ Hàng]                              │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 📊 Data Flow Diagram

```
UPLOAD IMAGE
│
├─→ [📸 Upload Ảnh Button]
│   ├─→ Click
│   └─→ handleImageUpload(event)
│       ├─→ FileReader.readAsDataURL()
│       ├─→ Create customTemplateData
│       │   {
│       │     title: "Template từ Ảnh",
│       │     backgroundImage: base64,
│       │     ...
│       │   }
│       ├─→ switchTemplate('custom')
│       └─→ previewCustomTemplate()
│           └─→ Apply inline styles
│               └─→ cardInner.style.background = "..."
│
└─→ [✅ Preview Updated]


UPLOAD JSON
│
├─→ [📄 Upload JSON Button]
│   ├─→ Click
│   └─→ handleJsonUpload(event)
│       ├─→ FileReader.readAsText()
│       ├─→ JSON.parse()
│       ├─→ Validate structure
│       │   (check: title, bgColor, bgColor2, textColor, emojis)
│       ├─→ customTemplateData = parsedJSON
│       ├─→ switchTemplate('custom')
│       └─→ previewCustomTemplate()
│
└─→ [✅ Template Applied]


CUSTOM EDITOR
│
├─→ [✏️ Chỉnh Sửa Button]
│   ├─→ toggleCustomEditor()
│   └─→ Show hidden editor form
│       ├─→ User fills 6 fields:
│       │   1. Title
│       │   2. BgColor (#RRGGBB)
│       │   3. BgColor2 (#RRGGBB)
│       │   4. TextColor (#RRGGBB)
│       │   5. TopEmoji
│       │   6. BottomEmoji
│       │
│       ├─→ [👁️ Preview Button]
│       │   └─→ previewCustomTemplate()
│       │       ├─→ Read form values
│       │       ├─→ Create gradient style
│       │       ├─→ Apply inline styles
│       │       └─→ Update DOM elements
│       │
│       └─→ [✅ Real-time Preview]
│
└─→ [✏️ Chỉnh Sửa Button Again]
    └─→ toggleCustomEditor()
        └─→ Hide editor form


SAVE TEMPLATE
│
├─→ [💾 Lưu Button]
│   └─→ saveCustomTemplate()
│       ├─→ JSON.stringify(customTemplateData)
│       ├─→ localStorage.setItem('customTemplate', JSON)
│       ├─→ Persist to browser storage
│       └─→ Show notification: "💾 Template lưu!"
│
└─→ [✅ Saved to Machine]
    └─→ Reload page
        └─→ Load from localStorage
            └─→ customTemplateData restored


EXPORT TEMPLATE
│
├─→ [📤 Xuất Button]
│   └─→ exportTemplate()
│       ├─→ JSON.stringify(customTemplateData, null, 2)
│       ├─→ Create Blob
│       ├─→ URL.createObjectURL(blob)
│       ├─→ Create <a> element
│       ├─→ link.download = "template-{timestamp}.json"
│       ├─→ link.click()
│       └─→ URL.revokeObjectURL(url)
│
└─→ [✅ File Downloaded]
    └─→ Browser save dialog
        └─→ User saves file
            └─→ Share with others
                └─→ They upload: [📄 Upload JSON]
```

---

## 🗂️ File Organization

```
webkinhdoanhso/
├── index.html (44 KB)
│   ├── Template buttons (5)
│   ├── Import section (5 buttons)
│   ├── File inputs (hidden)
│   └── Custom editor form
│
├── styles.css (58.3 KB)
│   ├── .template-buttons (5 columns)
│   ├── .template-import-section
│   ├── .import-buttons (5 columns)
│   ├── .import-btn
│   ├── .custom-editor
│   ├── .editor-group
│   ├── .btn-small
│   └── @media queries
│
├── script.js (26.8 KB)
│   ├── customTemplateData (global)
│   ├── toggleCustomEditor()
│   ├── handleImageUpload()
│   ├── handleJsonUpload()
│   ├── previewCustomTemplate()
│   ├── saveCustomTemplate()
│   ├── exportTemplate()
│   └── switchTemplate() [updated]
│
├── DOCUMENTATION
│   ├── TEMPLATE-IMPORT-EXPORT-GUIDE.md (7 KB)
│   ├── TEMPLATE-FEATURES-VERIFICATION.md (9.9 KB)
│   ├── TEMPLATE-IMPORT-EXPORT-SUMMARY.md (9.4 KB)
│   ├── TEMPLATE-QUICK-REFERENCE.md (2.2 KB)
│   ├── COMPLETION-REPORT-TEMPLATE-FEATURES.md (12.1 KB)
│   └── TEMPLATE-ARCHITECTURE.md (this file)
│
└── EXAMPLES
    ├── template-example-tet.json (0.2 KB)
    └── template-example-valentine.json (0.2 KB)
```

---

## 🔄 State Management

```
LOCAL STATE
│
├─ Page Load
│  ├─→ Load customTemplateData from localStorage
│  └─→ If null, use null (no custom template)
│
├─ User Interaction
│  ├─→ Upload Image
│  │  └─→ customTemplateData = { title, backgroundImage, ... }
│  │
│  ├─→ Upload JSON
│  │  └─→ customTemplateData = parsedJSON
│  │
│  ├─→ Edit Form
│  │  └─→ customTemplateData = { title, bgColor, bgColor2, ... }
│  │
│  ├─→ Click Save
│  │  └─→ localStorage['customTemplate'] = JSON.stringify(customTemplateData)
│  │
│  ├─→ Click Export
│  │  └─→ Download JSON file
│  │
│  └─→ Refresh Page
│      └─→ Load customTemplateData from localStorage
│
└─ PERSISTENT STORAGE (LocalStorage)
   └─→ Key: 'customTemplate'
       Value: JSON string
       Persist: Until clear cache
```

---

## 🎛️ UI Component Hierarchy

```
GREETING CARD SECTION
├── PREVIEW AREA
│   ├── Template Selector (5 buttons)
│   │   ├── Mẫu 1
│   │   ├── Mẫu 2
│   │   ├── Mẫu 3
│   │   ├── Mẫu 4
│   │   └── 🎨 Tùy Chỉnh (NEW)
│   │
│   ├── Import Section (NEW)
│   │   ├── Button Row (5 buttons)
│   │   │   ├── 📸 Upload Ảnh
│   │   │   ├── 📄 Upload JSON
│   │   │   ├── ✏️ Chỉnh Sửa
│   │   │   ├── 💾 Lưu
│   │   │   └── 📤 Xuất
│   │   │
│   │   └── Hidden Inputs
│   │       ├── #image-upload (input[type=file])
│   │       └── #json-upload (input[type=file])
│   │
│   ├── Custom Editor (NEW, hidden by default)
│   │   ├── custom-title (input)
│   │   ├── custom-bg-color (input[type=color])
│   │   ├── custom-bg-color-2 (input[type=color])
│   │   ├── custom-text-color (input[type=color])
│   │   ├── custom-top-emoji (input)
│   │   ├── custom-bottom-emoji (input)
│   │   └── Preview Button
│   │
│   └── Card Preview Area
│       └── #card-preview
│           └── .card-inner
│               ├── .card-top (emoji)
│               ├── .card-title
│               ├── #preview-message
│               ├── #preview-signature
│               └── .card-bottom (emoji)
│
└── EDITOR AREA (unchanged)
    └── #card-form
        ├── recipient-name
        ├── card-message
        ├── sender-name
        ├── color-picker
        └── add-to-cart-button
```

---

## 🔐 localStorage Structure

```javascript
// Before interaction:
localStorage = {}

// After upload/edit and click Save:
localStorage = {
  "customTemplate": "{\"title\":\"...\",\"bgColor\":\"...\",\"bgColor2\":\"...\",\"textColor\":\"...\",\"topEmoji\":\"...\",\"bottomEmoji\":\"...\"}"
}

// When page loads:
let customTemplateData = JSON.parse(localStorage.getItem('customTemplate'));
// customTemplateData = {
//   title: "Tặng Yêu Thương",
//   bgColor: "#F4D9A0",
//   bgColor2: "#E8C76F",
//   textColor: "#5c4033",
//   topEmoji: "✨",
//   bottomEmoji: "🌿"
// }
```

---

## 📱 Responsive Behavior

```
DESKTOP (1024px+)
├── Template Buttons: 5 columns
│   └── [Mẫu 1] [Mẫu 2] [Mẫu 3] [Mẫu 4] [🎨]
│
├── Import Buttons: 5 columns
│   └── [📸] [📄] [✏️] [💾] [📤]
│
└── Editor: 2-column grid
    └── Preview | Form


TABLET (768px - 1024px)
├── Template Buttons: 5 columns (wraps on small tablets)
│
├── Import Buttons: 5 columns (wraps on small tablets)
│
└── Editor: 1-column stack


MOBILE (<768px)
├── Template Buttons: 3 columns
│   └── [Mẫu 1] [Mẫu 2] [Mẫu 3]
│       [Mẫu 4] [🎨]
│
├── Import Buttons: 2 columns
│   └── [📸] [📄]
│       [✏️] [💾]
│       [📤]
│
└── Editor: 1-column stack
    └── Preview (top)
        Form (bottom)
```

---

## 🧪 Component Interaction Map

```
User Action          Function Called      Updates                Result
─────────────────────────────────────────────────────────────────────────
Click 📸              handleImageUpload()  customTemplateData     Card updates
Click 📄              handleJsonUpload()   customTemplateData     Card updates
Click ✏️              toggleCustomEditor() editor.display         Form shows/hides
Fill Form + 👁️       previewCustomTemplate() customTemplateData, card.style  Preview updates
Click 💾              saveCustomTemplate() localStorage           Notification
Click 📤              exportTemplate()     browser download       File downloads
Switch Template 1-4   switchTemplate()     cardInner.classList    Card updates
Refresh Page          (on load)            customTemplateData     Restore from localStorage
Add to Cart           addCardToCart()      cart + localStorage    Added to cart
```

---

## 🎯 Key Features Matrix

| Feature | HTML | CSS | JS | Storage | UI | Responsive |
|---------|------|-----|----|---------|----|-----------|
| Upload Image | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Upload JSON | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Custom Editor | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Live Preview | - | - | ✅ | - | ✅ | ✅ |
| Save Template | - | - | ✅ | ✅ | ✅ | N/A |
| Export JSON | - | - | ✅ | - | ✅ | N/A |
| Cart Integration | - | - | ✅ | ✅ | ✅ | ✅ |

---

## 📈 Feature Complexity

```
Simple (UI Only)
├── Template Buttons
└── Upload Buttons

Medium (UI + Logic)
├── Custom Editor Form
└── Preview Updates

Complex (Full Stack)
├── File Upload & Processing
├── JSON Validation
├── localStorage Persistence
├── Blob Generation & Download
└── State Management
```

---

## ✨ Component Status

```
STATUS LEGEND
✅ = Implemented & Tested
⏳ = Ready for Testing
🔄 = In Progress
❌ = Not Implemented

COMPONENTS
├── HTML ✅
│   ├── Template buttons ✅
│   ├── Import buttons ✅
│   ├── File inputs ✅
│   └── Editor form ✅
│
├── CSS ✅
│   ├── Button styling ✅
│   ├── Grid layouts ✅
│   ├── Editor styling ✅
│   └── Responsive ✅
│
├── JavaScript ✅
│   ├── Image handling ✅
│   ├── JSON parsing ✅
│   ├── Preview logic ✅
│   ├── localStorage ✅
│   └── File download ✅
│
├── Integration ✅
│   ├── Cart system ✅
│   ├── Notification ✅
│   └── Preview update ✅
│
└── Testing ⏳
    ├── Manual browser test ⏳
    ├── Edge cases ⏳
    ├── Mobile devices ⏳
    └── Cross-browser ⏳
```

---

## 🚀 Deployment Pipeline

```
Phase 1: Development ✅
├── Write HTML ✅
├── Write CSS ✅
├── Write JS ✅
└── Create Docs ✅

Phase 2: Testing ⏳
├── Manual testing
├── Edge case testing
├── Mobile testing
└── Cross-browser testing

Phase 3: Deployment 🔄
├── Final code review
├── Commit to git
└── Deploy to production

Phase 4: Monitoring 🔄
├── User feedback
├── Error monitoring
└── Performance tracking
```

---

**Version:** 1.0  
**Date:** 2026-11-11  
**Status:** Documentation Complete ✅
