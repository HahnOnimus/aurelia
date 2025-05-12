const products = [
    {
        id: 1,
        name: "Premium Website Package",
        description: "This is your ultimate solution for creating a high-quality, professional online presence that you can use for a lifetime. With this one-time investment, you get a beautifully designed website tailored to your brand’s unique identity, fully responsive across all devices, and optimized for performance. Whether you’re launching a new business or revamping your existing website, this package delivers speed, SEO-friendly structure, and flawless user experience. You’ll receive up to 5 custom pages and a fully functional, secure site ready to capture leads and drive conversions.",
        price: 250000,
        old: 400000,
        discount: 38,
        images: [
            "products-images/website-1.jpeg",
            "products-images/website-2.jpeg",
            "products-images/website-3.jpeg"
        ],
        paymentLink: "https://paystack.com/pay/npt1p9k2ec"
    },
    {
        id: 2,
        name: "Lagos Business Leads Goldmine",
        description: "Unlock 1,000+ verified business leads in Lagos. Perfect for B2B sales teams aiming to expand rapidly, this exclusive list helps you connect faster, close smarter, and dominate your niche. Whether you're launching campaigns or nurturing pipelines, this data gives you the edge to reach top-level executives, pitch your offer, and grow your network in one of Africa’s most competitive business cities—no guesswork, just results. If you need more data up to 100,000 in Nigeria, contact us.",
        price: 25000,
        old: 70000,
        discount: 64,
        images: [
            "products-images/1kleads-1.png",
            "products-images/1kleads-2.png",
            "products-images/1kleads-3.png"
        ],
        paymentLink: "https://paystack.com/pay/h3yk3vbq9z"
        
    },
    {
        id: 3,
        name: "eCommerce Pro",
        description: "Unlock the ultimate eCommerce experience with a one-time purchase for life! This powerful platform is fully loaded — multi-language with RTL support, guest checkout, single-page checkout, unlimited products, categories, and variations. Whether you're selling simple items or complex bundles, it’s built to scale with color swatches, wishlists, built-in order tracking, and more. Integrated with top payment gateways like PayPal, Stripe, Paystack, and Mollie, plus multi-currency support. Fast, SEO-optimized, responsive, and beautifully themed with drag-and-drop components. Get free installation help, blazing speed, advanced permissions, and Amazon S3-ready media hosting—zero hassle, total control.",
        price: 400000,
        old: 750000,
        discount: 47,
        images: [
            "products-images/store-1.jpeg",
            "products-images/store-2.jpeg",
            "products-images/store-3.jpeg"
        ],
        paymentLink: "https://paystack.com/pay/t8a0i62u1v"
    },
    {
        id: 4,
        name: "USA Business Leads Database",
        description: "Access a network of over 10,000 vetted business contacts across the USA, ready for your outreach initiatives. This extensive database includes verified company information, key decision-maker details, and essential industry data, allowing you to focus your efforts on the right prospects. Perfect for sales teams, marketers, and business developers looking to drive growth, increase engagement, and achieve measurable results with precision and efficiency. If you need more data up to 100,000 in the USA, contact us.",
        price: 60000,
        old: 200000,
        discount: 70,
        images: [
            "products-images/100kleads-1.png",
            "products-images/100kleads-2.png",
            "products-images/100kleads-3.png"
        ],
        paymentLink: "https://paystack.com/pay/etcks0i4ls"
    },
    {
        id: 5,
        name: "FoodExpress Delivery System",
        description: "Run your entire online food or retail business from a single, intelligent dashboard designed for speed, scale, and simplicity. With powerful order and customer management, variant pricing, discount tools, multi-language support, and dynamic reservation modules, you’ll never miss a beat. Customize every inch—home sections, color themes, banners, and blog visibility—all without touching code. Enjoy bulletproof security, SEO tools, email templates, social sharing, and integrations with Google Analytics, Facebook Pixel, and SMTP. Manage admins, deliveries, custom pages, policies, testimonials, chefs, and more. Whether you’re selling meals or merchandise, this system is the backbone your business needs to grow.",
        price: 380000,
        old: 720000,
        discount: 47,
        images: [
            "products-images/food-1.jpeg",
            "products-images/food-2.jpeg",
            "products-images/food-3.jpeg"
        ],
        paymentLink: "https://paystack.com/pay/8n-ct4tse7"
    },
    {
        id: 6,
        name: "AI Automation Agent",
        description: "Unlock the power of AI automation, tailored specifically for your business needs. Whether you're aiming to streamline social media posts to increase sales, automate email campaigns, schedule meetings, or follow up with leads, this tool is built to do it all—customized just for you. Designed to save time and boost productivity, it enables you to focus on growth while automation handles the routine. Please note: the listed amount reflects the starting price for a fully custom-built solution. Expand your reach, grow your sales, and connect with a global audience through the smart use of AI-driven systems. Your growth begins with automation.",
        price: 600000,
        old: 1500000,
        discount: 60,
        images: [
            "products-images/agent-1.jpeg",
            "products-images/agent-2.jpeg",
            "products-images/agent-3.jpeg"
        ],
        paymentLink: "https://paystack.com/pay/pxcj0vh53i"
    },
    {
        id: 7,
        name: "RealEstate Pro Management Suite",
        description: "Revolutionize real estate management with a powerful platform built for speed, security, and success. Featuring robust user authentication and role-based access for Admins, Sub-Admins, and Owners, this system ensures your data stays protected. Easily list properties with rich descriptions, photo galleries, and advanced filtering by location, price, and purpose. The responsive design looks stunning on all devices, while integrated payment gateways like PayPal, Stripe, Paystack, and more handle transactions seamlessly. Stay informed with real-time email alerts, manage everything from a sleek admin dashboard, and boost visibility with built-in SEO and social sharing tools—effortless, scalable, unstoppable.",
        price: 350000,
        old: 850000,
        discount: 58,
        images: [
            "products-images/estate-1.jpeg",
            "products-images/estate-2.jpeg",
            "products-images/estate-3.jpeg"
        ],
        paymentLink: "https://paystack.com/pay/hmb14mc8s1"
    },
    {
        id: 8,
        name: "AutoDealer Sales & Rental System",
        description: "Rev up your auto marketplace with this cutting-edge platform designed to sell, manage, and monetize like never before. Featuring 3 stunning themes and full support for monthly, yearly, or lifetime subscriptions, it's the perfect engine for car listings and eCommerce. Showcase vehicles with detailed specs, advanced search tools, and PWA support for seamless mobile access. Sell digital or physical products with tax, coupons, and reports baked in. With 19 online payment gateways, vendor management, secret login, push notifications, and multilingual RTL support, this system runs at full throttle. Customize menus, popups, and pages effortlessly—total control, zero limits, all in one place.",
        price: 320000,
        old: 780000,
        discount: 59,
        images: [
            "products-images/cars-1.jpeg",
            "products-images/cars-2.jpeg",
            "products-images/cars-3.jpeg"
        ],
        paymentLink: "https://paystack.com/pay/3fhdx-lrbv"
    },
    {
        id: 9,
        name: "Leads Generator Desktop App",
        description: "Supercharge your lead generation with a powerful, standalone custom-built app that leverages Google Maps and top listing directories. Designed with a user-friendly interface, you simply input your search keyword and location—then let the automation do the work. Instantly gather valuable business data and export it in multiple formats including CSV and Excel. This tool is ideal for marketers, sales teams, and business owners seeking to expand reach and improve conversion rates. Experience up to 3x more visibility and engagement, fueling higher revenue. This is more than a tool—it’s your unfair advantage in today’s competitive market.",
        price: 450000,
        old: 800000,
        discount: 44,
        images: [
            "products-images/scrape-1.png",
            "products-images/scrape-2.png",
            "products-images/scrape-3.png"
        ],
        paymentLink: "https://paystack.com/pay/8jtp2my05g"
    },
    {
        id: 10,
        name: "Multi-Channel Outreach Platform",
        description: "Easily send mass emails, SMS, and WhatsApp messages with flexible support for CSV, Excel, and TXT files, or directly from a group stored in your panel. Effortlessly reach your audience in bulk with multiple channels. For WhatsApp messaging, leverage Node.js & Meta Cloud API to manage multiple accounts within your panel. SMS delivery is seamless through 7 supported third-party API gateways, while email delivery is handled via SMTP, PHP Mailer, or SendGrid API. Manage everything from a centralized platform for ultimate efficiency.",
        price: 350000,
        old: 800000,
        discount: 56,
        images: [
            "products-images/market-1.png",
            "products-images/market-2.png",
            "products-images/market-3.png"
        ],
        paymentLink: "https://paystack.com/pay/sz61fzc8oh"   
    },
    {
        id: 11,
        name: "ClientFlow CRM Elite",
        description: "Take control of your entire business with this all-in-one powerhouse CRM—designed to manage projects, automate invoicing, track expenses, and close more deals faster. From professional proposals to dynamic task assignment and time tracking, every tool is built to streamline your workflow. Convert leads from email, track goals, send surveys, and manage contracts all in one place. With multi-currency payments via PayPal and Stripe, staff-specific permissions, and fully brandable interface, it’s not just a CRM—it’s your business command center. Packed with smart features like auto ticket importing, drag-and-drop stages, and a beautiful calendar, productivity has never looked this good.",
        price: 380000,
        old: 750000,
        discount: 49,
        images: [
            "products-images/crm-1.png",
            "products-images/crm-2.png",
            "products-images/crm-3.png"
        ],
        paymentLink: "https://paystack.com/pay/7jbwb8t70d"
    },
    {
        id: 12,
        name: "StockMaster Inventory Software",
        description: "Set up in minutes and take full control of your inventory with a powerful, all-in-one management system built for speed and precision. Monitor sales, purchases, and returns in real time, track top-performing products, and manage stock transfers effortlessly between warehouses. Create beautiful invoices, apply discounts, taxes, and shipping fees, and streamline operations with barcode printing, product categorization, and low stock alerts. Export data, automate emails and SMS, and assign user roles with customizable permissions. With multilingual support, mobile access, and rich reporting tools, it's the ultimate solution for businesses seeking smart, scalable inventory and sales management.",
        price: 240000,
        old: 480000,
        discount: 50,
        images: [
            "products-images/inventory-1.jpeg",
            "products-images/inventory-2.jpeg",
            "products-images/inventory-3.jpeg"
        ],
        paymentLink: "https://paystack.com/pay/n2w8kicfmr"
    }  
];
