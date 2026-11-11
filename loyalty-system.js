// Enhanced Product Comparison
const productComparison = [
    {
        name: "Trà Sâm Trường Nhân",
        price: 150000,
        components: "Táo đỏ 25%, lá đinh lăng 17%, đẳng sâm 15%, cam thảo 15%, kỷ tử 15%, nhân sâm 10%, lá Sâm Ngọc Linh 3%",
        quantity: "30g (15 túi x 2g)",
        shelf_life: "24 tháng",
        origin: "Sâm Ngọc Linh - Tây Nguyên",
        brewing_time: "5-7 phút",
        taste: "Thanh mát, ngọt nhẹ tự nhiên",
        strength: ["✅ 100% tự nhiên", "✅ Tiện lợi túi lọc", "✅ Đa lợi ích", "✅ Thành phần công khai"]
    },
    {
        name: "Trà Sâm Thường (Đối Chiếu)",
        price: 120000,
        components: "Chưa công khai đầy đủ",
        quantity: "30g",
        shelf_life: "12 tháng",
        origin: "Không rõ",
        brewing_time: "5-7 phút",
        taste: "Chuẩn",
        strength: ["⚠️ Thành phần chưa rõ", "⚠️ Hạn sử dụng ngắn hơn", "⚠️ Nguồn gốc mơ hồ"]
    }
];

// Loyalty Program System
class LoyaltySystem {
    constructor() {
        this.userPoints = JSON.parse(localStorage.getItem('loyaltyPoints')) || 0;
        this.tier = this.calculateTier();
    }
    
    addPoints(amount) {
        this.userPoints += amount;
        localStorage.setItem('loyaltyPoints', this.userPoints);
        this.tier = this.calculateTier();
        return this.userPoints;
    }
    
    calculateTier() {
        if (this.userPoints < 500) return 'Bạc';
        if (this.userPoints < 1000) return 'Vàng';
        return 'Kim Cương';
    }
    
    getDiscountPercent() {
        const tier = this.calculateTier();
        if (tier === 'Bạc') return 5;
        if (tier === 'Vàng') return 10;
        return 15;
    }
}

// Newsletter System
class NewsletterSystem {
    subscribeEmail(email) {
        const subscribers = JSON.parse(localStorage.getItem('newsletter')) || [];
        if (!subscribers.includes(email)) {
            subscribers.push(email);
            localStorage.setItem('newsletter', JSON.stringify(subscribers));
            return { success: true, message: "Đăng ký thành công! Giảm 10% cho đơn hàng đầu tiên." };
        }
        return { success: false, message: "Email đã được đăng ký." };
    }
}

console.log("✅ Enhanced systems loaded!");
