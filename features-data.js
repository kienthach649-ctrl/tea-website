// Data for new features

// Blog Posts
const blogPosts = [
    {
        id: 1,
        title: "Nghệ Thuật Thưởng Trà: Từ Cổ Đại Đến Hiện Đại",
        category: "Kiến Thức",
        date: "2026-11-10",
        image: "https://images.pexels.com/photos/2775860/pexels-photo-2775860.jpeg?w=400&h=300&fit=crop",
        excerpt: "Khám phá hành trình của trà qua các thế kỷ và cách nó trở thành phần không thể thiếu của văn hóa Việt.",
        content: "Trà không chỉ là thức uống, mà còn là cầu nối nối liền lạc quan của con người. Từ những năm xa xưa, thưởng trà đã trở thành nghi lễ độc đáo, mang theo bao nhiêu ý nghĩa sâu xa..."
    },
    {
        id: 2,
        title: "Lợi Ích Sâm Ngọc Linh: Bí Quyết Của Thiên Nhiên",
        category: "Sức Khỏe",
        date: "2026-11-08",
        image: "https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?w=400&h=300&fit=crop",
        excerpt: "Sâm Ngọc Linh - một trong những vị thuốc quý nhất của Đông y Việt Nam. Hãy cùng tìm hiểu những tác dụng tuyệt vời này.",
        content: "Sâm Ngọc Linh từ vùng đất thiêng liêng Tây Nguyên đã được sử dụng trong hàng trăm năm để tăng cường sức khỏe..."
    },
    {
        id: 3,
        title: "Cách Pha Trà Đúng Cách: Hướng Dẫn Toàn Diện",
        category: "Hướng Dẫn",
        date: "2026-11-05",
        image: "https://images.pexels.com/photos/887656/pexels-photo-887656.jpeg?w=400&h=300&fit=crop",
        excerpt: "Để thưởng trà đúng cách, không chỉ cần trà ngon mà còn cần kỹ thuật pha chế phù hợp.",
        content: "Pha trà là một nghệ thuật. Nhiệt độ nước, thời gian ủ, tỷ lệ lá trà - tất cả đều ảnh hưởng đến hương vị của chén trà cuối cùng..."
    }
];

// FAQ
const faqs = [
    { question: "Trà Sâm Trường Nhân có an toàn cho trẻ em không?", answer: "Tư vấn với bác sĩ trước khi cho trẻ em uống do chứa sâm và các thành phần khác." },
    { question: "Mỗi ngày uống bao nhiêu túi trà là thích hợp?", answer: "Nên uống 1-2 túi mỗi ngày tùy thuộc vào thể chất cá nhân." },
    { question: "Trà này có chứa caffeine không?", answer: "Không, hoàn toàn không chứa caffeine, an toàn uống vào buổi tối." },
    { question: "Bảo quản trà như thế nào?", answer: "Bảo quản ở nơi mát mẻ, khô ráo, tránh ánh nắng trực tiếp." },
    { question: "Bao lâu thì hết hạn?", answer: "Hạn sử dụng 24 tháng kể từ ngày sản xuất." }
];

// Quiz Questions
const quizQuestions = [
    { question: "Nước pha trà nên ở nhiệt độ bao nhiêu?", options: ["50-70°C", "70-85°C", "85-100°C", ">100°C"], correct: 1, explanation: "70-85°C là lý tưởng nhất." },
    { question: "Sâm Ngọc Linh nổi tiếng bởi vì điều gì?", options: ["Giá rẻ", "Chứng chỉ quốc tế", "Chất lượng cao và hiếm có", "Sản xuất hàng loạt"], correct: 2, explanation: "Chất lượng vượt trội và hiếm có." },
    { question: "Thời gian ủ tối ưu là bao lâu?", options: ["2-3 phút", "5-7 phút", "10-15 phút", "15-20 phút"], correct: 1, explanation: "5-7 phút là thời gian tối ưu." }
];

// Testimonials
const testimonials = [
    { name: "Chị Loan, 45 tuổi", role: "Giáo viên", avatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?w=150", rating: 5, text: "Rất thích Trà Sâm Trường Nhân. Hương vị thanh mát và không quá đắng." },
    { name: "Anh Minh, 52 tuổi", role: "Doanh nhân", avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=150", rating: 5, text: "Sản phẩm chất lượng, giá cả hợp lý. Túi lọc rất tiện." },
    { name: "Cô Hương, 38 tuổi", role: "Nhân viên văn phòng", avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=150", rating: 4, text: "Rất ưng ý với chất lượng trà. Xứng đáng với giá tiền." },
    { name: "Ông Tuấn, 60 tuổi", role: "Về hưu", avatar: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?w=150", rating: 5, text: "Thành phần rõ ràng, công khai, làm tôi yên tâm." }
];

// Personas
const personas = [
    { name: "Cô Minh", age: 42, occupation: "Giáo viên", avatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?w=200", goal: "Tìm trà chất lượng cho gia đình", concern: "Lo về chất lượng và giá cả" },
    { name: "Anh Nam", age: 35, occupation: "Nhân viên công ty", avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=200", goal: "Quà tặng cho cha mẹ", concern: "Bận rộn, cần tiện lợi" }
];

console.log("✅ Features data loaded!");
