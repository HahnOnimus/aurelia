// products.js
const products = [
    {
        id: 1,
        name: "Premium Business Package",
        description: "This is your ultimate solution for creating a high-quality, professional online presence that you can use for a lifetime.",
        fullDescription: "Our Premium Website Package is a comprehensive solution for businesses and individuals looking to establish a strong online presence. It includes everything you need to launch a professional website that stands out from competitors and effectively represents your brand. We handle the design, development, and optimization so you can focus on your business.",
        uses: [
            "Business websites for small to medium enterprises",
            "Professional portfolio sites for creatives",
            "Service provider websites (consultants, agencies)",
            "Small business online presence and credibility",
            "Personal branding websites for professionals"
        ],
        howItWorks: [
            "We design and develop your website based on your specific requirements",
            "You provide content, branding assets, and any special requests",
            "We implement responsive design that works perfectly on all devices",
            "Search Engine Optimization (SEO) is included to help with search engine visibility",
            "One-time setup with lifetime usage - no recurring fees"
        ],
        advantages: [
            "Professional design that builds trust with your visitors",
            "Faster loading times than DIY website builders",
            "Mobile-optimized out of the box (no extra charges)",
            "No monthly fees - own your website forever",
            "Dedicated technical support during setup period"
        ],
        consequences: [
            "Continuing to use outdated or unprofessional website designs",
            "Losing potential customers to competitors with better online presence",
            "Wasting time trying to DIY with limited technical skills",
            "Paying monthly for website builders that you don't actually own",
            "Missing out on mobile traffic with non-responsive designs"
        ],
        price: 250000,
        old: 400000,
        discount: 37,
        rating: 4.7,
        ratingCount: 142,
        downloads: 1280,
        likes: 356,
        featured: true,
        tags: ["web", "design", "business"],
        images: [
            "products-images/website-1.jpeg",
            "products-images/website-2.jpeg",
            "products-images/website-3.jpeg"
        ],
        paymentLink: "https://paystack.com/pay/npt1p9k2ec",
        testimonials: [
            {
                name: "Emmanuel T.",
                role: "Business Owner",
                text: "The Premium Website Package saved my business! Our online bookings tripled in a month. 10/10!",
                rating: 5,
                avatar: "images/test-1.png"
            },
            {
                name: "Sarah K.",
                role: "Freelance Designer",
                text: "Beautiful design and excellent support. My portfolio has never looked better!",
                rating: 4,
                avatar: "images/test-2.jpeg"
            }
        ],
        faqs: [
            {
                question: "How long does website setup take?",
                answer: "Typically 3-5 business days after receiving all required materials from you."
            },
            {
                question: "Can I update the content myself?",
                answer: "Yes, we provide training on how to update your content through an easy-to-use interface."
            }
        ]
    },
    {
        id: 2,
        name: "SalesPro Package",
        description: "Unlock the ultimate eCommerce experience with a one-time purchase for life!",
        fullDescription: "eCommerce Pro is a complete online store solution that gives you everything you need to sell products online. Unlike monthly subscription platforms, this is a one-time purchase that you own forever. It includes advanced features like inventory management, multiple payment gateways, and marketing tools to help your store succeed.",
        uses: [
            "Online retail stores for physical products",
            "Digital product sales (ebooks, software, courses)",
            "Dropshipping business platforms",
            "Wholesale and B2B eCommerce",
            "Multi-vendor marketplaces"
        ],
        howItWorks: [
            "We install and configure your eCommerce platform",
            "You customize the design with our easy-to-use tools",
            "Add your products with our guided setup process",
            "Connect your preferred payment methods",
            "Launch and start selling immediately"
        ],
        advantages: [
            "No transaction fees beyond payment processor charges",
            "Full ownership of your store and data",
            "Unlimited products with no restrictions",
            "Advanced features included (no premium upgrades needed)",
            "Scalable solution that grows with your business"
        ],
        consequences: [
            "Paying high monthly fees to eCommerce platforms",
            "Losing control of your business data to third parties",
            "Being limited by platform restrictions and rules",
            "Missing sales due to limited functionality",
            "Difficulty migrating to another platform later"
        ],
        price: 400000,
        old: 750000,
        discount: 47,
        rating: 4.9,
        ratingCount: 89,
        downloads: 920,
        likes: 412,
        featured: true,
        tags: ["ecommerce", "store", "business"],
        images: [
            "products-images/store-1.jpeg",
            "products-images/store-2.jpeg",
            "products-images/store-3.jpeg"
        ],
        paymentLink: "https://paystack.com/pay/t8a0i62u1v",
        testimonials: [
            {
                name: "Bryan Philips",
                role: "eCommerce Entrepreneur",
                text: "I run 3 stores with eCommerce Pro. The automated inventory system alone saved me $8K in lost sales last quarter!",
                rating: 5,
                avatar: "images/test-3.jpeg"
            }
        ],
        faqs: [
            {
                question: "What payment gateways are supported?",
                answer: "We support Paystack, Flutterwave, Stripe, and PayPal integration."
            },
            {
                question: "Can I migrate my existing store?",
                answer: "Yes, we offer migration services for most popular platforms."
            }
        ]
    },
    {
        id: 3,
        name: "MealRush Express",
        description: "Run your entire online food or retail business from a single, intelligent dashboard.",
        fullDescription: "The FoodExpress Delivery System is a comprehensive solution for restaurants, caterers, and food businesses looking to streamline their online ordering and delivery operations. It combines ordering, payment processing, delivery management, and customer communication into one powerful platform.",
        uses: [
            "Restaurants offering online ordering",
            "Food delivery services",
            "Meal prep and catering businesses",
            "Cloud kitchens and virtual restaurants",
            "Grocery and specialty food delivery"
        ],
        howItWorks: [
            "We set up your customized ordering platform",
            "You add your menu items and pricing",
            "Configure delivery zones and pricing",
            "Connect to your preferred payment processors",
            "Start accepting orders through web and mobile"
        ],
        advantages: [
            "Reduce order errors with automated processing",
            "Manage deliveries efficiently with driver tracking",
            "Increase sales with upsell and promotion tools",
            "Build customer loyalty with integrated marketing",
            "All data remains under your control"
        ],
        consequences: [
            "Losing customers to competitors with better ordering systems",
            "Wasting time managing orders manually",
            "Paying high commissions to third-party delivery apps",
            "Difficulty scaling your delivery operations",
            "Lack of customer data for marketing and retention"
        ],
        price: 380000,
        old: 720000,
        discount: 47,
        rating: 4.6,
        ratingCount: 76,
        downloads: 680,
        likes: 289,
        featured: false,
        tags: ["food", "delivery", "restaurant"],
        images: [
            "products-images/food-1.jpeg",
            "products-images/food-2.jpeg",
            "products-images/food-3.jpeg"
        ],
        paymentLink: "https://paystack.com/pay/8n-ct4tse7",
        testimonials: [
            {
                name: "Chef Adeola",
                role: "Restaurant Owner",
                text: "FoodExpress cut our order errors by 80% and increased our delivery radius profitably!",
                rating: 5,
                avatar: "images/test-4.jpg"
            }
        ]
    },
    {
        id: 4,
        name: "EstateLux Suite",
        description: "Revolutionize real estate management with a powerful platform built for speed, security, and success.",
        fullDescription: "The RealEstate Pro Management Suite is a complete solution for property managers, real estate agents, and developers. It handles property listings, tenant management, lease tracking, maintenance requests, and financial reporting in one integrated platform.",
        uses: [
            "Property management companies",
            "Real estate agencies",
            "Vacation rental managers",
            "Commercial property managers",
            "Real estate developers"
        ],
        howItWorks: [
            "We set up your customized property management portal",
            "Import or create your property listings",
            "Configure user roles and permissions",
            "Set up payment processing for rent collection",
            "Launch and start managing properties efficiently"
        ],
        advantages: [
            "Centralized management of all properties",
            "Automated rent collection and reminders",
            "Streamlined maintenance request handling",
            "Comprehensive reporting and analytics",
            "Mobile access for on-the-go management"
        ],
        consequences: [
            "Difficulty tracking multiple properties manually",
            "Late or missed rent payments due to poor tracking",
            "Disorganized maintenance request handling",
            "Lack of insights from property performance data",
            "Inefficient communication with tenants and owners"
        ],
        price: 350000,
        old: 850000,
        discount: 58,
        rating: 4.5,
        ratingCount: 67,
        downloads: 510,
        likes: 231,
        featured: false,
        tags: ["realestate", "property", "management"],
        images: [
            "products-images/estate-1.jpeg",
            "products-images/estate-2.jpeg",
            "products-images/estate-3.jpeg"
        ],
        paymentLink: "https://paystack.com/pay/hmb14mc8s1",
        testimonials: [
            {
                name: "Leila K.",
                role: "Property Manager",
                text: "RealEstate Pro cut my paperwork by 80%. Tenant onboarding now takes 10 minutes instead of 2 days!",
                rating: 4,
                avatar: "images/test-3.jpeg"
            }
        ]
    },
    {
        id: 5,
        name: "AutoHub System",
        description: "Rev up your auto marketplace with this cutting-edge platform designed to sell, manage, and monetize like never before.",
        fullDescription: "The AutoDealer Sales & Rental System is a complete solution for car dealerships, rental agencies, and auto marketplaces. It includes vehicle listings, inventory management, customer CRM, and integrated payment processing specifically designed for the automotive industry.",
        uses: [
            "Car dealership management",
            "Vehicle rental agencies",
            "Used car marketplaces",
            "Fleet management companies",
            "Auto auction platforms"
        ],
        howItWorks: [
            "We set up your customized auto sales platform",
            "Import or create your vehicle inventory",
            "Configure pricing, features, and rental options",
            "Set up financing and payment processing",
            "Launch and start selling or renting vehicles"
        ],
        advantages: [
            "Professional vehicle showcase with high-quality displays",
            "Integrated financing and payment processing",
            "Inventory management across multiple locations",
            "Customer relationship management tools",
            "Marketing automation for follow-ups and promotions"
        ],
        consequences: [
            "Difficulty managing inventory across locations",
            "Poor online presentation of vehicles",
            "Manual processing of financing applications",
            "Lack of customer follow-up systems",
            "Difficulty tracking sales performance"
        ],
        price: 320000,
        old: 780000,
        discount: 59,
        rating: 4.7,
        ratingCount: 42,
        downloads: 380,
        likes: 175,
        featured: false,
        tags: ["automotive", "cars", "dealership"],
        images: [
            "products-images/cars-1.jpeg",
            "products-images/cars-2.jpeg",
            "products-images/cars-3.jpeg"
        ],
        paymentLink: "https://paystack.com/pay/3fhdx-lrbv",
        testimonials: [
            {
                name: "Franklin A.",
                role: "Dealership Owner",
                text: "Our online sales increased by 65% after implementing AutoDealer. The vehicle showcase is stunning!",
                rating: 5,
                avatar: "images/test-4.jpg"
            }
        ]
    },
    {
        id: 6,
        name: "Unity Management System",
        description: "Comprehensive cooperative society management solution for member administration, fee collection, and financial tracking.",
        fullDescription: "Unity Management System is a specialized web-based platform designed specifically for cooperative societies. It streamlines member registration, contribution tracking, loan management, and financial reporting. The system provides transparency and efficiency in managing all aspects of cooperative society operations while maintaining complete member records and financial history.",
        uses: [
            "Cooperative society administration",
            "Member registration and management",
            "Contribution and fee collection",
            "Loan and credit management",
            "Financial reporting and analytics"
        ],
        howItWorks: [
            "We set up your cooperative management portal",
            "Register your society's information and bylaws",
            "Import existing member data or register new members",
            "Configure contribution plans and loan policies",
            "Start managing all society operations digitally"
        ],
        advantages: [
            "Centralized member database with complete histories",
            "Automated contribution tracking and reminders",
            "Transparent loan application and approval process",
            "Comprehensive financial reports and statements",
            "Secure access for members to view their accounts"
        ],
        consequences: [
            "Disorganized manual record keeping",
            "Difficulty tracking member contributions",
            "Lack of transparency in loan management",
            "Time-consuming financial reporting",
            "Member dissatisfaction due to poor record keeping"
        ],
        price: 360000,
        old: 800000,
        discount: 55,
        rating: 4.6,
        ratingCount: 47,
        downloads: 490,
        likes: 203,
        featured: false,
        tags: ["cooperative", "management", "finance"],
        images: [
            "products-images/micro-1.jpeg",
            "products-images/micro-2.jpeg",
            "products-images/micro-3.jpeg"
        ],
        paymentLink: "https://paystack.com/pay/sz61fzc8oh",
        testimonials: [
            {
                name: "Grace L.",
                role: "Society Secretary",
                text: "Unity Management System transformed our cooperative operations. Member satisfaction has never been higher!",
                rating: 5,
                avatar: "images/test-1.png"
            }
        ]
    },
    {
        id: 7,
        name: "Elite Lifeline Package",
        description: "Complete pharmacy management solution with inventory control and online ordering capabilities.",
        fullDescription: "Elite Lifeline Package is a comprehensive pharmacy management system that combines backend inventory and prescription management with a customer-facing online ordering platform. It helps pharmacies streamline operations, manage drug inventory, process prescriptions, and accept online orders while maintaining compliance with pharmaceutical regulations.",
        uses: [
            "Pharmacy inventory and stock management",
            "Prescription processing and tracking",
            "Online drug ordering platform",
            "Patient records and history management",
            "Pharmacy financial reporting"
        ],
        howItWorks: [
            "We set up your pharmacy management system",
            "Configure your drug inventory and categories",
            "Set up prescription processing workflows",
            "Launch your customer ordering portal",
            "Train staff on using the system"
        ],
        advantages: [
            "Real-time drug inventory tracking",
            "Integrated prescription management",
            "Online ordering for customer convenience",
            "Expiry date tracking and alerts",
            "Compliance with pharmaceutical regulations"
        ],
        consequences: [
            "Manual inventory tracking leading to errors",
            "Difficulty managing prescription records",
            "Lack of online ordering capabilities",
            "Risk of stocking expired medications",
            "Inefficient pharmacy operations"
        ],
        price: 380000,
        old: 750000,
        discount: 49,
        rating: 4.8,
        ratingCount: 71,
        downloads: 580,
        likes: 312,
        featured: true,
        tags: ["pharmacy", "healthcare", "inventory"],
        images: [
            "products-images/drug-1.jpeg",
            "products-images/drug-2.jpeg",
            "products-images/drug-3.jpeg"
        ],
        paymentLink: "https://paystack.com/pay/7jbwb8t70d",
        testimonials: [
            {
                name: "David M.",
                role: "Pharmacy Owner",
                text: "Elite Lifeline reduced our medication errors by 75% and increased sales through online orders!",
                rating: 5,
                avatar: "images/test-2.jpeg"
            }
        ]
    },
    {
        id: 8,
        name: "StockMaster Management System",
        description: "Set up in minutes and take full control of your inventory with a powerful, all-in-one management system.",
        fullDescription: "StockMaster Inventory Software is a complete solution for businesses that need to track and manage inventory across multiple locations. It includes barcode scanning, low stock alerts, purchase order management, and comprehensive reporting to help you optimize your inventory levels and reduce costs.",
        uses: [
            "Retail inventory management",
            "Warehouse and distribution centers",
            "Manufacturing inventory control",
            "Hospital and medical supply management",
            "Restaurant and bar inventory"
        ],
        howItWorks: [
            "We install and configure your inventory system",
            "Set up your product catalog and locations",
            "Configure barcode scanning (optional)",
            "Train your staff on using the system",
            "Start tracking inventory in real-time"
        ],
        advantages: [
            "Real-time visibility of stock levels",
            "Automated reordering and low stock alerts",
            "Reduced inventory shrinkage and losses",
            "Improved inventory turnover ratios",
            "Integration with accounting and POS systems"
        ],
        consequences: [
            "Stockouts leading to lost sales",
            "Overstocking tying up capital",
            "Difficulty locating inventory items",
            "Manual counting errors and discrepancies",
            "Lack of data for inventory optimization"
        ],
        price: 240000,
        old: 480000,
        discount: 50,
        rating: 4.5,
        ratingCount: 63,
        downloads: 510,
        likes: 198,
        featured: false,
        tags: ["inventory", "retail", "management"],
        images: [
            "products-images/inventory-1.jpeg",
            "products-images/inventory-2.jpeg",
            "products-images/inventory-3.jpeg"
        ],
        paymentLink: "https://paystack.com/pay/pumd5-und-",
        testimonials: [
            {
                name: "Ajoke Biola",
                role: "Store Manager",
                text: "StockMaster reduced our inventory discrepancies by 90% and saved us countless hours of manual counting!",
                rating: 4,
                avatar: "images/test-4.jpg"
            }
        ]
    },
    {
        id: 9,
        name: "EduCore Package",
        description: "Complete school management solution for administrators, teachers, students, and parents.",
        fullDescription: "EduCore Package is a comprehensive school management system that handles all aspects of educational institution administration. It includes student information management, teacher and staff records, attendance tracking, fee collection, gradebook functionality, and parent portals. The system streamlines school operations and improves communication between all stakeholders.",
        uses: [
            "Student registration and records management",
            "Teacher and staff administration",
            "Attendance and timetable management",
            "Fee collection and financial reporting",
            "Parent communication and portals"
        ],
        howItWorks: [
            "We set up your school management system",
            "Configure your academic structure and terms",
            "Import or register students and staff",
            "Set up fee structures and payment methods",
            "Launch and train users on the system"
        ],
        advantages: [
            "Centralized student and staff records",
            "Automated attendance tracking",
            "Online fee payment options",
            "Parent access to student progress",
            "Comprehensive academic reporting"
        ],
        consequences: [
            "Disorganized manual record keeping",
            "Difficulty tracking student attendance",
            "Inefficient fee collection processes",
            "Poor communication with parents",
            "Time-consuming report generation"
        ],
        price: 230000,
        old: 480000,
        discount: 52,
        rating: 4.5,
        ratingCount: 63,
        downloads: 510,
        likes: 198,
        featured: false,
        tags: ["education", "school", "management"],
        images: [
            "products-images/edu-1.jpeg",
            "products-images/edu-2.jpeg",
            "products-images/edu-3.jpeg"
        ],
        paymentLink: "https://paystack.com/pay/n2w8kicfmr",
        testimonials: [
            {
                name: "Principal Adebayo",
                role: "School Administrator",
                text: "EduCore streamlined our operations and improved parent engagement significantly!",
                rating: 4,
                avatar: "images/test-4.jpg"
            }
        ]
    },
    {
        id: 10,
        name: "SwiftFlow Network Package",
        description: "Comprehensive haulage and logistics management system for nationwide merchandise delivery.",
        fullDescription: "SwiftFlow Network Package is a robust logistics management system designed for haulage companies and delivery services. It manages the entire delivery lifecycle from order dispatch to final delivery confirmation, including route optimization, driver management, shipment tracking, and customer notifications. The system helps logistics companies improve efficiency and provide better service to their clients.",
        uses: [
            "Nationwide merchandise delivery",
            "Fleet management and tracking",
            "Route optimization and planning",
            "Delivery status notifications",
            "Logistics financial reporting"
        ],
        howItWorks: [
            "We set up your logistics management system",
            "Configure your fleet and driver information",
            "Set up delivery zones and pricing structures",
            "Integrate with your ordering systems",
            "Train staff and launch operations"
        ],
        advantages: [
            "Real-time shipment tracking",
            "Optimized delivery routes",
            "Driver performance monitoring",
            "Automated customer notifications",
            "Comprehensive delivery analytics"
        ],
        consequences: [
            "Inefficient route planning",
            "Difficulty tracking shipments",
            "Poor communication with customers",
            "Lack of driver performance data",
            "Ineffective fleet utilization"
        ],
        price: 450000,
        old: 850000,
        discount: 47,
        rating: 4.5,
        ratingCount: 63,
        downloads: 510,
        likes: 198,
        featured: false,
        tags: ["logistics", "haulage", "delivery"],
        images: [
            "products-images/log-1.jpeg",
            "products-images/log-2.jpeg",
            "products-images/log-3.jpeg"
        ],
        paymentLink: "https://paystack.com/pay/ienyfednpr",
        testimonials: [
            {
                name: "Oluwaseun K.",
                role: "Logistics Manager",
                text: "SwiftFlow reduced our delivery times by 30% and improved customer satisfaction dramatically!",
                rating: 4,
                avatar: "images/test-4.jpg"
            }
        ]
    }
];