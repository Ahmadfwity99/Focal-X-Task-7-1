// Project data containing various sections and their data
const projectData = {
    // Data for the home hero section
    homeHeroData: {
        // Hero text and image data
        heroTextImg: [
            {
                topText: "Everything You Need To Create A Website.",
                header: "Business Innovation With IT Services Expertise",
                img: '/public/heroThumb1_1.webp',
                listData: [
                    { text: "Deployment and Support" },
                    { text: "Flexibility and Adaptability" },
                    { text: "Discovery and Analysis" },
                    { text: "Competitive Advantage" }
                ]
            }
        ],
        // Trends card data
        trensCardData: [
            { title: "Trustpilot", logo: true, row: true },
            { title: "Google", logo: false, row: false }
        ]
    },
    HeroData: [
        {
            page: "about",
            title: "About us",
            des: "Home > About Us"
        },
        {
            page: "contact",
            title: "Contact Us",
            des: "Home > Contact Us"
        }
    ],
    // URLs for brand images
    brandImgs: [
        { url: "/public/brandLogo1_1.svg" },
        { url: "/public/brandLogo1_2.svg" },
        { url: "/public/brandLogo1_3.svg" },
        { url: "/public/brandLogo1_4.svg" },
        { url: "/public/brandLogo1_5.svg" }
    ],
    aboutBrands: [
        {
            title: "Cyber Security"
        },
        {
            title: "IT Solution"
        },
        {
            title: "Technology"
        },
        {
            title: "Data Science"
        }
    ],
    // Section titles data for various sections
    sectionTitles: [
        {
            arrows: true,
            section: "services",
            title: "OUR SERVICES",
            header: "Elevating Businesses With IT Ingenuity",
            color: "blue",
            position: "left"
        },
        {
            arrows: false,
            section: "pricing",
            title: "OUR PRICING",
            header: "Our Awesome Pricing Plans",
            color: "blue",
            position: "center"
        },
        {
            arrows: false,
            section: "contact",
            title: "CONTACT US",
            header: "24/7 Expert Hosting Support Our Customers Love",
            color: "white",
            position: "center"
        },
        {
            arrows: false,
            section: "testimonials",
            title: "TESTIMONIALS",
            header: "Our Latest Client Feedback",
            color: "blue",
            position: "center"
        },
        {
            arrows: true,
            section: "blogs",
            title: "BLOG & NEWS",
            header: "Featured News And Insights",
            color: "blue",
            position: "left"
        },
        {
            arrows: false,
            section: "members",
            title: "Team Members",
            header: "Our Dedicated Team Members",
            color: "blue",
            position: "left"
        }
    ],
    // Data for services cards
    servicesCards: [
        {
            id: 1,
            img: "/public/serviceIcon1_2.svg",
            title: "Woo Commerce",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, eligendi!"
        },
        {
            id: 2,
            img: "/public/serviceIcon1_3.svg",
            title: "CRM Solutions",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, eligendi!"
        },
        {
            id: 3,
            img: "/public/serviceIcon1_4.svg",
            title: "Web Design",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, eligendi!"
        },
        {
            id: 4,
            img: "/public/serviceIcon1_1.svg",
            title: "Data Guard Sentinel",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, eligendi!"
        }
    ],
    // Data for services footer
    servicesFooterData: [
        {
            id: "01",
            title: "Requirement",
            des: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
        },
        {
            id: "02",
            title: "UI/UX Design",
            des: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
        },
        {
            id: "03",
            title: "Prototype",
            des: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
        },
        {
            id: "04",
            title: "Development",
            des: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
        }
    ],
    pricingCardsData: [
        {
            id: 1,
            title: "Regular Plan",
            price: "$49",
            offerList: [
                {
                    check: true,
                    des: "100 GB SSD Storage"
                },
                {
                    check: true,
                    des: "Weekly Backups"
                },
                {
                    check: true,
                    des: "Unlimited FREE SSL"
                },
                {
                    check: true,
                    des: "24/7 System Monitoring"
                },
                {
                    check: true,
                    des: "Free Domain ($9.99Value)"
                },
                {
                    check: false,
                    des: "Frame 16426"
                },
                {
                    check: false,
                    des: "20 +Payment Methods"
                }
            ]
        },
        {
            id: 2,
            title: "Regular Plan",
            price: "$49",
            offerList: [
                {
                    check: true,
                    des: "100 GB SSD Storage"
                },
                {
                    check: true,
                    des: "Weekly Backups"
                },
                {
                    check: true,
                    des: "Unlimited FREE SSL"
                },
                {
                    check: true,
                    des: "24/7 System Monitoring"
                },
                {
                    check: true,
                    des: "Free Domain ($9.99Value)"
                },
                {
                    check: false,
                    des: "Frame 16426"
                },
                {
                    check: false,
                    des: "20 +Payment Methods"
                }
            ]
        },
        {
            id: 3,
            title: "Regular Plan",
            price: "$49",
            offerList: [
                {
                    check: true,
                    des: "100 GB SSD Storage"
                },
                {
                    check: true,
                    des: "Weekly Backups"
                },
                {
                    check: true,
                    des: "Unlimited FREE SSL"
                },
                {
                    check: true,
                    des: "24/7 System Monitoring"
                },
                {
                    check: true,
                    des: "Free Domain ($9.99Value)"
                },
                {
                    check: false,
                    des: "Frame 16426"
                },
                {
                    check: false,
                    des: "20 +Payment Methods"
                }
            ]
        }
    ],
    testimonialsCardData: [
        {
            id: 1,
            name: "Kristin Watson",
            job: "Web Designer",
            img: "/public/testiThumb3_1.webp",
            color: "white",
            des: `"Extech has completely transformed our process.The user-friendly interface and powerful features maintaining our website. Highly recommended for all!"`
        },
        {
            id: 2,
            name: "Theresa Webb",
            job: "Tech enthusiost",
            img: "/public/testiThumb3_2.webp",
            color: "blue",
            des: `"I've been using Extech for several months now, and I'm extremely impressed with ease of customization it offers. The wide range of templates."`
        },
        {
            id: 3,
            name: "Ronald Richards",
            job: "Web Entrepreneur",
            img: "/public/testiThumb3_3.webp",
            color: "white",
            des: `"Extech offers exceptional value for money. The comprehensive suite of tools and seamless intergration with various plugins and services make it a for all."`
        }
    ],
    blogsCardData: [
        {
            img: "/public/blogThumb1_2.webp",
            name: "Admin",
            topic: "Uncategorized",
            title: "Best And Fastest Data Server Ever",
            profileImg: "/public/blogProfile1_2.webp",
            job: "Co,Founder",
            date: "MARCH,14 2024"
        },
        {
            img: "/public/blogThumb1_1.webp",
            name: "Admin",
            topic: "Technology",
            title: "Life Won't One Beast Air Over Above All",
            profileImg: "/public/blogProfile1_1.webp",
            job: "Co,Founder",
            date: "MARCH,29 2024"
        },
        {
            img: "/public/blogThumb1_3.webp",
            name: "Admin",
            topic: "Shared Hosting",
            title: "Attentive Was Born In 2015 Help Sales Teams",
            profileImg: "/public/blogProfile1_3.webp",
            job: "Co,Founder",
            date: "MARCH,24 2024"
        }
    ],
    quickLinksData: [
        {
            des: "Extech about"
        },
        {
            des: "Our Services"
        },
        {
            des: "Our Blogs"
        },
        {
            des: "FAQ'S"
        },
        {
            des: "Contact Us"
        }
    ],
    recentPostCardData: [
        {
            img: "/public/footerThumb1_1.webp",
            date: "15th,April,2024",
            title: "Top 5 Most Famous Technology Trend in 2024"
        },
        {
            img: "/public/footerThumb1_2.webp",
            date: "20th,June,2024",
            title: "The Surfing Man Will Blow Your Mind"
        }
    ],
    membersCardData: [
        {
            img: "/public/04.webp",
            name: "Masirul Islam",
            job: "Web Designer"
        },
        {
            img: "/public/05.webp",
            name: "Jessica Mardol",
            job: "Cyber Expert"
        },
        {
            img: "/public/06.webp",
            name: "Arnold Hemingway",
            job: "Web Expert"
        }, {
            img: "/public/07.webp",
            name: "Shikon Haque",
            job: "Data Analyst"
        }
    ],
    infoCardData: [
        {
            address: "4648 Rocky Road Philadelphia PA",
            email: "email.example@gmailcom",
            phone: "+8854545451"

        },
    ]

};

// Exporting individual data categories
export const homeHeroData = projectData.homeHeroData;
export const sectionTitles = projectData.sectionTitles;
export const brandImgs = projectData.brandImgs;
export const servicesCards = projectData.servicesCards;
export const servicesFooterData = projectData.servicesFooterData;
export const pricingCardsData = projectData.pricingCardsData;
export const testimonialsCardData = projectData.testimonialsCardData;
export const blogsCardData = projectData.blogsCardData;
export const quickLinksData = projectData.quickLinksData;
export const recentPostCardData = projectData.recentPostCardData;
export const HeroData = projectData.HeroData;
export const aboutBrands = projectData.aboutBrands;
export const membersCardData = projectData.membersCardData;
export const infoCardData = projectData.infoCardData
export default projectData; // Exporting the entire projectData object as default
