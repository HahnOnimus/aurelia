// products.js
const products = [
    {
        id: 1,
        name: "Premium Website Package",
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
        discount: 38,
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
        id: 3,
        name: "eCommerce Pro",
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
        id: 5,
        name: "FoodExpress Delivery System",
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
        id: 6,
        name: "AI Automation Agent",
        description: "Unlock the power of AI automation, tailored specifically for your business needs.",
        fullDescription: "Our AI Automation Agent is a custom-built solution that automates repetitive tasks in your business, saving you time and increasing efficiency. Whether it's customer service, data processing, or marketing automation, we create a solution tailored to your specific workflow needs.",
        uses: [
            "Automating customer service inquiries",
            "Processing and organizing business data",
            "Automating social media posting and engagement",
            "Lead qualification and follow-up",
            "Internal process automation"
        ],
        howItWorks: [
            "We analyze your business processes for automation potential",
            "Develop custom AI models for your specific needs",
            "Train the system with your business data and rules",
            "Implement and test the automation in your workflow",
            "Provide ongoing support and adjustments"
        ],
        advantages: [
            "Reduce operational costs by automating repetitive tasks",
            "Improve response times to customer inquiries",
            "Eliminate human error in data processing",
            "Scale your operations without proportional staff increases",
            "24/7 availability for automated processes"
        ],
        consequences: [
            "Wasting employee time on repetitive, low-value tasks",
            "Slower response times to customer inquiries",
            "Inconsistent data processing with human errors",
            "Difficulty scaling operations efficiently",
            "Falling behind competitors using automation"
        ],
        price: 600000,
        old: 1500000,
        discount: 60,
        rating: 4.8,
        ratingCount: 53,
        downloads: 420,
        likes: 198,
        featured: true,
        tags: ["ai", "automation", "productivity"],
        images: [
            "products-images/agent-1.jpeg",
            "products-images/agent-2.jpeg",
            "products-images/agent-3.jpeg"
        ],
        paymentLink: "https://paystack.com/pay/pxcj0vh53i",
        testimonials: [
            {
                name: "Tunde O.",
                role: "Operations Manager",
                text: "The AI agent handles 80% of our customer inquiries, freeing our team for complex issues!",
                rating: 5,
                avatar: "images/test-5.jpeg"
            }
        ]
    },
    {
        id: 7,
        name: "RealEstate Pro Management Suite",
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
        id: 8,
        name: "AutoDealer Sales & Rental System",
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
        id: 9,
        name: "Leads Generator Desktop App",
        description: "Supercharge your lead generation with a powerful, standalone custom-built app.",
        fullDescription: "The Leads Generator Desktop App is a powerful tool that helps businesses find and qualify leads automatically. It scrapes data from multiple sources, qualifies leads based on your criteria, and organizes them for easy follow-up. Perfect for sales teams, marketers, and business owners looking to grow their customer base.",
        uses: [
            "B2B sales lead generation",
            "Local business marketing",
            "Real estate prospecting",
            "Recruitment and headhunting",
            "Market research and analysis"
        ],
        howItWorks: [
            "Install the application on your Windows or Mac computer",
            "Configure your search parameters and criteria",
            "Run automated searches across multiple data sources",
            "Review and qualify the generated leads",
            "Export to your CRM or contact management system"
        ],
        advantages: [
            "Save hours of manual research time",
            "Access to multiple data sources in one place",
            "Customizable filters for targeted lead generation",
            "No monthly fees - one-time purchase",
            "Works offline after initial setup"
        ],
        consequences: [
            "Wasting time on manual lead research",
            "Missing potential customers you can't find manually",
            "Relying on expensive lead generation services",
            "Working with outdated or incomplete contact data",
            "Difficulty scaling your lead generation efforts"
        ],
        price: 450000,
        old: 800000,
        discount: 44,
        rating: 4.4,
        ratingCount: 58,
        downloads: 620,
        likes: 287,
        featured: true,
        tags: ["leads", "marketing", "sales"],
        images: [
            "products-images/scrape-1.png",
            "products-images/scrape-2.png",
            "products-images/scrape-3.png"
        ],
        paymentLink: "https://paystack.com/pay/8jtp2my05g",
        testimonials: [
            {
                name: "Mitchell Rose",
                role: "Sales Director",
                text: "The Leads Generator helped us filter 100K leads by industry and hit a 22% conversion rate!",
                rating: 4,
                avatar: "images/test-5.jpeg"
            }
        ]
    },
    {
        id: 10,
        name: "Multi-Channel Outreach Platform",
        description: "Easily send mass emails, SMS, and WhatsApp messages with flexible support for multiple file formats.",
        fullDescription: "Our Multi-Channel Outreach Platform allows you to manage all your customer communication channels from one dashboard. Send personalized messages via email, SMS, and WhatsApp with advanced segmentation and automation features. Perfect for marketing campaigns, customer notifications, and business communications.",
        uses: [
            "Marketing campaign management",
            "Customer notification systems",
            "Appointment reminders",
            "Newsletter distribution",
            "Customer support follow-ups"
        ],
        howItWorks: [
            "We set up your multi-channel communication platform",
            "Import your contact lists or connect to your CRM",
            "Create message templates for different purposes",
            "Schedule or trigger automated message sequences",
            "Track opens, clicks, and responses"
        ],
        advantages: [
            "Reach customers on their preferred channels",
            "Save time with automated message sequences",
            "Improve response rates with multi-channel approach",
            "Detailed analytics on campaign performance",
            "Compliance with communication regulations"
        ],
        consequences: [
            "Managing multiple communication tools separately",
            "Lower response rates from single-channel outreach",
            "Difficulty tracking communication history",
            "Manual follow-ups wasting staff time",
            "Risk of non-compliance with communication laws"
        ],
        price: 350000,
        old: 800000,
        discount: 56,
        rating: 4.6,
        ratingCount: 47,
        downloads: 490,
        likes: 203,
        featured: false,
        tags: ["marketing", "communication", "automation"],
        images: [
            "products-images/market-1.png",
            "products-images/market-2.png",
            "products-images/market-3.png"
        ],
        paymentLink: "https://paystack.com/pay/sz61fzc8oh",
        testimonials: [
            {
                name: "Grace L.",
                role: "Marketing Manager",
                text: "Our campaign response rates doubled after switching to this multi-channel platform!",
                rating: 5,
                avatar: "images/test-1.png"
            }
        ]
    },
    {
        id: 11,
        name: "ClientFlow CRM Elite",
        description: "Take control of your entire business with this all-in-one powerhouse CRM.",
        fullDescription: "ClientFlow CRM Elite is a comprehensive customer relationship management system designed to help you manage all aspects of your client interactions. From lead capture to project management, invoicing, and support tickets, it's everything you need to streamline your business operations and improve customer relationships.",
        uses: [
            "Sales pipeline management",
            "Customer support ticketing",
            "Project and task management",
            "Marketing automation",
            "Client communication tracking"
        ],
        howItWorks: [
            "We set up your customized CRM instance",
            "Import your existing client data",
            "Configure your sales pipelines and workflows",
            "Train your team on using the system",
            "Start managing all client interactions in one place"
        ],
        advantages: [
            "360-degree view of all client interactions",
            "Automated follow-ups and reminders",
            "Integrated project and task management",
            "Customizable to your specific workflow",
            "Detailed reporting and analytics"
        ],
        consequences: [
            "Losing track of client communications",
            "Missed follow-up opportunities",
            "Inefficient project management",
            "Lack of visibility into sales pipeline",
            "Difficulty analyzing customer data"
        ],
        price: 380000,
        old: 750000,
        discount: 49,
        rating: 4.8,
        ratingCount: 71,
        downloads: 580,
        likes: 312,
        featured: true,
        tags: ["crm", "business", "management"],
        images: [
            "products-images/crm-1.png",
            "products-images/crm-2.png",
            "products-images/crm-3.png"
        ],
        paymentLink: "https://paystack.com/pay/7jbwb8t70d",
        testimonials: [
            {
                name: "David M.",
                role: "Sales Director",
                text: "ClientFlow gave us complete visibility into our sales pipeline. Conversion rates improved by 35%!",
                rating: 5,
                avatar: "images/test-2.jpeg"
            }
        ]
    },
    {
        id: 12,
        name: "StockMaster Inventory Software",
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
        paymentLink: "https://paystack.com/pay/n2w8kicfmr",
        testimonials: [
            {
                name: "Ajoke Biola",
                role: "Store Manager",
                text: "StockMaster reduced our inventory discrepancies by 90% and saved us countless hours of manual counting!",
                rating: 4,
                avatar: "images/test-4.jpg"
            }
        ]
    }
];