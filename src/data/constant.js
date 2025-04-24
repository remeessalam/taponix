import logoImg from "../assets/images/logo/logo1.png";
// porfolio image
// Import all images at the top (Web Development)
import FiveGHomesImg from "../assets/web-development-portfolio/5ghomes.png";
import BayutImg from "../assets/web-development-portfolio/bayut.png";
import ColdCreekcapImg from "../assets/web-development-portfolio/cold creekcap.png";
import EmergencyMusicImg from "../assets/web-development-portfolio/emergency music .png";
import FlatiornImg from "../assets/web-development-portfolio/flatiorn.png";
import MavenImg from "../assets/web-development-portfolio/maven.png";
import MenissaCateringsImg from "../assets/web-development-portfolio/menissa caterings.png";
import MethodistImg from "../assets/web-development-portfolio/methodist.png";
import ThinkRealityImg from "../assets/web-development-portfolio/think reality.png";

// Import all images at the top (App Development)
import DubaiTravelGuideImg from "../assets/app-development-portfolio/dubai travel guide.png";
import EloraHairPalourImg from "../assets/app-development-portfolio/elora hair palour.png";
import EvansFrancisImg from "../assets/app-development-portfolio/evans francis.png";
import HouseOfDeliverenceImg from "../assets/app-development-portfolio/house of deliverence.png";
import MybitsShopImg from "../assets/app-development-portfolio/mybitsshop.png";
import NamazImg from "../assets/app-development-portfolio/namaz.png";
import PoteaImg from "../assets/app-development-portfolio/potea.png";
import RentopBikeAndCarImg from "../assets/app-development-portfolio/rentop bike and car.png";
// all services
export const services = [
  {
    id: 1,
    title: "Web Development",
    icon: require("../assets/images/icons/software-development.png"),
    description:
      "Custom, responsive websites tailored to your brand—from landing pages to e-commerce platforms. We craft digital experiences that engage and convert.",
    link: "/services/web-development",
  },
  {
    id: 2,
    title: "App Development",
    icon: require("../assets/images/icons/android-development.png"),
    description:
      "Intuitive, scalable mobile apps for iOS, Android, and cross-platform. We bring your ideas to life with sleek design and smooth functionality.",
    link: "/services/app-development",
  },
  {
    id: 3,
    title: "AI & ML Development",
    icon: require("../assets/images/icons/ai.png"),
    description:
      "Leverage AI and ML to automate, analyze, and innovate—custom models, predictive analytics, NLP, and more to power smarter decisions.",
    link: "/services/ai-ml-development",
  },
  {
    id: 4,
    title: "Blockchain Solutions",
    icon: require("../assets/images/icons/blockchain.png"),
    description:
      "Secure, transparent, and decentralized solutions—from smart contracts to dApps and token launches. Let’s build the future of trust.",
    link: "/services/blockchain-solutions",
  },
  {
    id: 5,
    title: "Cloud Computing Services",
    icon: require("../assets/images/icons/cloudcomputing.png"),
    description:
      "Scalable and secure cloud solutions—from strategy and migration to infrastructure management and security optimization.",
    link: "/services/cloud-computing-services",
  },
  {
    id: 6,
    title: "VR & AR Development",
    icon: require("../assets/images/icons/arvr.png"),
    description:
      "Immersive AR/VR experiences for marketing, training, and entertainment—interactive, high-quality, and tailor-made for impact.",
    link: "/services/vr-ar-development",
  },
  {
    id: 7,
    title: "Data Science Services",
    icon: require("../assets/images/icons/data-science.png"),
    description:
      "Unlock insights from your data with predictive modeling, visualization, big data management, and seamless integration.",
    link: "/services/data-science",
  },
  {
    id: 8,
    title: "AI Calling Agency",
    icon: require("../assets/images/icons/ai-calling.png"),
    description:
      "Transform customer service with AI-powered assistants, voice recognition, automated scheduling, and real-time analytics.",
    link: "/services/ai-calling-agency",
  },
  {
    id: 9,
    title: "IoT Development",
    icon: require("../assets/images/icons/iot.png"),
    description:
      "Connect devices, gain real-time insights, and drive smart operations with secure, scalable IoT solutions.",
    link: "/services/iot-development",
  },
];

// details
export const companyDetails = {
  logo: logoImg,
  phone: "+91-9492660509",
  location:
    "8-3-318/9/5,Jaya Prakash Nagar, Engineers Colony Yella Reddy Guda, Ameerpet, Hyderabad, Telangana 500073",
  email: "info@taponixinfinity.com",
  whatsapplink:
    "https://api.whatsapp.com/send/?phone=9492660509&text&type=phone_number&app_absent=0",
};

export const landingPageNavLinks = [
  {
    id: 1,
    label: "Home",
    link: "banner",
  },
  {
    id: 2,
    label: "Services",
    link: "services",
  },
  {
    id: 3,
    label: "Portfolio",
    link: "portfolio",
  },
  {
    id: 4,
    label: "Reviews",
    link: "reviews",
  },
  {
    id: 5,
    label: "Contact",
    link: "contact",
  },
];

// website pages links
export const websitePagesLinks = [
  {
    id: 1,
    link: "/",
    label: "Home",
  },
  {
    id: 2,
    link: "/about-us",
    label: "About Us",
  },
  {
    id: 3,
    link: "/services",
    label: "Services",
  },
  {
    id: 4,
    link: "/blogs",
    label: "Blogs",
  },
  {
    id: 5,
    link: "/contact",
    label: "Contact Us",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerence Website",
    icon: require("../assets/images/icons/online-shopping.png"),
    description:
      "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth. ",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: require("../assets/images/icons/socialmedia.png"),
    description:
      "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: require("../assets/images/icons/landing-page.png"),
    description:
      " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: require("../assets/images/icons/software-development.png"),
    description:
      "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: require("../assets/images/icons/ios-development.png"),
    description:
      "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: require("../assets/images/icons/android-development.png"),
    description:
      "We design and develop tailor-made Android apps that align with your vision and business goals.Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: require("../assets/images/icons/flutter-development.png"),
    description:
      "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies. ",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: require("../assets/images/icons/hybrid-app-development.png"),
    description:
      "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// development workflow
export const webDevelopmentWorkflow = [
  {
    id: "01",
    title: "Requirements Analysis",
    icon: require("../assets/images/icons/requirement-analysis.png"),
    description:
      "We delve deep to understand your goals, target audience, and project needs. Through collaborative discussions, we solidify the website's functionalities and user journeys.",
  },
  {
    id: "02",
    title: "Design & Planning",
    icon: require("../assets/images/icons/planning.png"),
    description:
      "Our team crafts a user-centric blueprint. We meticulously plan the website's architecture, information flow, and visual identity, ensuring an intuitive and engaging experience.",
  },
  {
    id: "03",
    title: "Development",
    icon: require("../assets/images/icons/software-development.png"),
    description:
      "Our skilled developers bring your vision to life. We leverage cutting-edge technologies to build a secure and scalable website or web application that seamlessly integrates with your existing systems.",
  },
  {
    id: "04",
    title: "Testing",
    icon: require("../assets/images/icons/testing.png"),
    description:
      "We subject your website to rigorous testing to ensure flawless performance across all devices. Once satisfied, we launch your masterpiece with a smooth transition and ongoing support.",
  },
  {
    id: "05",
    title: "Support",
    icon: require("../assets/images/icons/support.png"),
    description:
      "Our commitment extends beyond launch. We provide ongoing maintenance, security updates, and expert assistance to keep your website thriving in the ever-evolving digital landscape.",
  },
];

export const appDevelopmentWorkflow = [
  {
    id: "01",
    title: "Requirements Analysis",
    icon: require("../assets/images/icons/requirement-analysis.png"),
    description:
      "We delve deep to understand your app's purpose, target audience, and desired functionalities. Through workshops and discussions, we'll solidify your app's foundation.",
  },
  {
    id: "02",
    title: "Design & Planning",
    icon: require("../assets/images/icons/planning.png"),
    description:
      "We craft a user-centric experience. Our designers create intuitive interfaces, while our planners map out the development roadmap, ensuring a smooth and efficient build.",
  },
  {
    id: "03",
    title: "Development",
    icon: require("../assets/images/icons/software-development.png"),
    description:
      "Our skilled engineers bring your app to life. Using cutting-edge tools and following best practices, we meticulously code every feature, ensuring a robust and functional app.",
  },
  {
    id: "04",
    title: "Testing",
    icon: require("../assets/images/icons/testing.png"),
    description:
      "We rigorously test every aspect of your app across different devices and scenarios. Our goal To identify and fix any glitches before launch, guaranteeing a seamless user experience.",
  },
  {
    id: "05",
    title: "Support",
    icon: require("../assets/images/icons/support.png"),
    description:
      "Your app's success is our priority. We offer ongoing support to address any issues and provide updates to keep your app functioning at its best.",
  },
];

// General Development Workflow
export const generalDevelopmentWorkflow = [
  {
    id: "01",
    title: "Requirements Gathering",
    icon: require("../assets/images/icons/requirement-analysis.png"),
    description:
      "We engage with stakeholders to gather comprehensive project requirements and understand their goals through collaborative discussions.",
  },
  {
    id: "02",
    title: "Design & Planning",
    icon: require("../assets/images/icons/planning.png"),
    description:
      "Our team crafts a user-centric design and creates a detailed project plan, outlining the architecture, timelines, and deliverables.",
  },
  {
    id: "03",
    title: "Development",
    icon: require("../assets/images/icons/software-development.png"),
    description:
      "Our skilled developers bring your vision to life, leveraging modern technologies to build a secure and scalable product that meets all specifications.",
  },
  {
    id: "04",
    title: "Testing",
    icon: require("../assets/images/icons/testing.png"),
    description:
      "We subject your product to rigorous testing to ensure flawless performance across all devices, identifying and resolving any issues before launch.",
  },
  {
    id: "05",
    title: "Support",
    icon: require("../assets/images/icons/support.png"),
    description:
      "Our commitment extends beyond launch, providing ongoing maintenance and support to keep your product thriving in the ever-evolving digital landscape.",
  },
];

// testimonials
export const testimonials = [
  {
    id: 1,
    name: "Sarah L.",
    img: require("../assets/images/testimonials/review-p1.png"),
    designation: "Marketing Director, TechPulse Solutions",
    review:
      "We partnered with TAPONIX INFINITY to redesign our website, and it was an incredible experience. The team was attentive to our vision and really captured the essence of our brand. The result was a sleek, user-friendly site that not only looks great but functions flawlessly. Since the launch, our traffic and engagement have skyrocketed. We couldn't have asked for a better outcome.",
  },
  {
    id: 2,
    name: "John P.",
    img: require("../assets/images/testimonials/review-p2.png"),
    designation: "Founder & CEO, FreshBrew Café",
    review:
      "Our old website was holding us back, but TAPONIX INFINITY transformed it into a modern, responsive platform. The entire process was smooth, and they made sure to communicate every step of the way. Our new website is attracting more customers, and it’s easier than ever to manage content.",
  },
  {
    id: 3,
    name: "Maya T.",
    img: require("../assets/images/testimonials/review-p3.png"),
    designation: "Head of Product, SwiftGo Mobility",
    review:
      "We needed an app that would engage our customers and elevate their experience. TAPONIX INFINITY exceeded our expectations. From concept to launch, they made sure the app was intuitive, fast, and user-friendly. We've already seen a significant uptick in user engagement, and our customers love the new app.",
  },
  {
    id: 4,
    name: "David K.",
    img: require("../assets/images/testimonials/review-p4.png"),
    designation: "Chief Technology Officer, FinPay Solutions",
    review:
      "The team at TAPONIX INFINITY helped us develop an app that works flawlessly on both iOS and Android. They guided us through the entire process, and the result was exactly what we had envisioned. Our users are happier, and our app's performance has exceeded expectations.",
  },
  {
    id: 5,
    name: "Anjali R.",
    img: require("../assets/images/testimonials/review-p5.png"),
    designation: "Operations Manager, GreenTech Innovations",
    review:
      "Working with TAPONIX INFINITY on our AI project was a game changer. The AI-powered solution they developed has automated many of our key processes, saving us time and money. They understood our needs perfectly and delivered a product that has greatly improved our efficiency and decision-making.",
  },
  {
    id: 6,
    name: "Peter M.",
    img: require("../assets/images/testimonials/review-p4.png"),
    designation: "Director of Data Analytics, RetailHub",
    review:
      "We were initially unsure about how to integrate machine learning into our operations, but TAPONIX INFINITY made it simple. They built predictive models that are now helping us make better decisions faster. The entire process was collaborative, and the results speak for themselves.",
  },
  {
    id: 7,
    name: "Rachel W.",
    img: require("../assets/images/testimonials/review-p4.png"),
    designation: "HR Manager, TechX Industries",
    review:
      "The VR training solution that TAPONIX INFINITY developed for us is incredible. It’s engaging, effective, and has greatly improved how we train new employees. We’ve already seen significant improvements in training outcomes, and it’s all thanks to the immersive experience they created.",
  },
  {
    id: 8,
    name: "Mark T.",
    img: require("../assets/images/testimonials/review-p4.png"),
    designation: "Marketing Lead, FashionNow",
    review:
      "We approached TAPONIX INFINITY to create an AR campaign to boost our marketing efforts, and the results were nothing short of amazing. They brought our concept to life with a creative and interactive experience that resonated deeply with our customers. Our engagement numbers have never been higher!",
  },
  {
    id: 9,
    name: "Linda S.",
    img: require("../assets/images/testimonials/review-p4.png"),
    designation: "Supply Chain Manager, ClearPath Logistics",
    review:
      "We reached out to TAPONIX INFINITY to help us implement a blockchain solution for our supply chain, and we couldn’t be more satisfied. Their team was meticulous in understanding our requirements and delivered a system that enhances transparency and security. It’s already had a positive impact on our operations.",
  },
  {
    id: 10,
    name: "Ryan D.",
    img: require("../assets/images/testimonials/review-p4.png"),
    designation: "COO, PayChain Technologies",
    review:
      "The blockchain-based payment system developed by TAPONIX INFINITY has transformed how we handle transactions. It’s secure, reliable, and incredibly fast. Their team made the whole process straightforward and seamless, and the results have been excellent.",
  },
  {
    id: 11,
    name: "Grace P.",
    img: require("../assets/images/testimonials/review-p4.png"),
    designation: "IT Director, GlobalSoft Solutions",
    review:
      "Migrating our systems to the cloud was something we had been putting off for years, but TAPONIX INFINITY made the process easy. They guided us through every step, and now we have a secure, scalable cloud environment that’s improved our operational efficiency. We can’t imagine going back to the old way of doing things!",
  },
  {
    id: 12,
    name: "Tom C.",
    img: require("../assets/images/testimonials/review-p4.png"),
    designation: "Founder, FinEdge Capital",
    review:
      "Thanks to TAPONIX INFINITY, we were able to move to the cloud smoothly and without any major disruptions. Their expertise in cloud computing helped us enhance our infrastructure, save on IT costs, and scale our operations as we grow. We’re more agile than ever.",
  },
  {
    id: 13,
    name: "Olivia J.",
    img: require("../assets/images/testimonials/review-p4.png"),
    designation: "Chief Marketing Officer, DigitalNext",
    review:
      "Partnering with TAPONIX INFINITY to help us analyze and visualize our data was one of the best decisions we’ve made. They created a dashboard that gives us real-time insights into our customers, allowing us to make data-driven decisions that have directly impacted our bottom line. Their team is top-notch!",
  },
  {
    id: 14,
    name: "Victor L.",
    img: require("../assets/images/testimonials/review-p4.png"),
    designation: "Operations Director, HomeGoods Retailers",
    review:
      "The predictive models that TAPONIX INFINITY developed for us have been invaluable. We’re now able to anticipate demand patterns, optimize our inventory, and ultimately increase our profitability. The clarity and insights their team provided have been game-changing for our operations.",
  },
  {
    id: 15,
    name: "Stephanie B.",
    img: require("../assets/images/testimonials/review-p4.png"),
    designation: "Customer Support Manager, AutoCare Solutions",
    review:
      "The AI-powered customer service solution we implemented with TAPONIX INFINITY has made a huge difference. We’ve seen a reduction in wait times and an increase in customer satisfaction. The AI is highly effective in handling routine queries, leaving our human agents to focus on more complex issues. It’s improved our efficiency dramatically.",
  },
  {
    id: 16,
    name: "Henry G.",
    img: require("../assets/images/testimonials/review-p4.png"),
    designation: "Director of Customer Experience, MobileTech",
    review:
      "We decided to integrate AI calling into our customer service operations, and TAPONIX INFINITY helped us develop a system that’s both intuitive and effective. Our customers are receiving faster responses, and we’re seeing higher levels of engagement. It’s been a big win for our customer experience team.",
  },
  {
    id: 17,
    name: "Eleanor H.",
    img: require("../assets/images/testimonials/review-p4.png"),
    designation: "Maintenance Manager, Manufacturing Co.",
    review:
      "The IoT solutions TAPONIX INFINITY developed for us have completely transformed the way we monitor and manage our equipment. We can now track performance in real-time, which has allowed us to prevent breakdowns and reduce maintenance costs. Their team was professional, and the results speak for themselves.",
  },
  {
    id: 18,
    name: "George D.",
    img: require("../assets/images/testimonials/review-p4.png"),
    designation: "Product Manager, SmartHome Systems",
    review:
      "With the IoT platform developed by TAPONIX INFINITY, we’ve been able to streamline operations and collect data from all our devices in real time. This has enabled us to improve efficiency and make smarter decisions. They did an excellent job understanding our needs and tailoring a solution that fits perfectly.",
  },
];

// industry company serve
export const industriesCompanyServe = [
  {
    id: 1,
    title: "Healthcare",
    img: require("../assets/images/industries/Healthcare.webp"),
    desc: "Transforming patient care and operations with AI-powered diagnostics, data analytics, and telemedicine solutions.",
  },
  {
    id: 2,
    title: "E-commerce & Retail",
    img: require("../assets/images/industries/E-commerce & Retail.webp"),
    desc: "Enhancing customer experiences with personalized recommendations, inventory management, and secure online transactions.",
  },
  {
    id: 3,
    title: "Finance & Banking",
    img: require("../assets/images/industries/Finance & Banking.webp"),
    desc: "Streamlining processes with AI, blockchain, and machine learning for fraud detection, risk assessment, and smarter investment strategies.",
  },
  {
    id: 4,
    title: "Energy",
    img: require("../assets/images/industries/Energy.webp"),
    desc: "Optimizing energy management, forecasting, and sustainability with IoT and data-driven AI solutions.",
  },
  {
    id: 5,
    title: "Real Estate",
    img: require("../assets/images/industries/Real Estate.webp"),
    desc: "Revolutionizing property management, investment decisions, and customer engagement with AI and predictive analytics.",
  },
  {
    id: 6,
    title: "Manufacturing",
    img: require("../assets/images/industries/Manufacturing.webp"),
    desc: "Driving automation, predictive maintenance, and operational efficiency with AI, machine learning, and IoT technologies.",
  },
  {
    id: 7,
    title: "Data Analytics & Business Intelligence",
    img: require("../assets/images/industries/Data Analytics & Business Intelligence.webp"),
    desc: "Actionable insights from big data to drive informed decision-making and growth strategies.",
  },
  {
    id: 8,
    title: "IoT Development",
    img: require("../assets/images/industries/IoT Development.webp"),
    desc: "Connecting devices and systems to enhance automation and operational efficiency",
  },
  {
    id: 9,
    title: "Logistics & Supply Chain",
    img: require("../assets/images/industries/Logistics & Supply Chain.webp"),
    desc: "Enhancing logistics, inventory, and supply chain management with AI and IoT-enabled tracking and optimization.",
  },
  {
    id: 10,
    title: "Education",
    img: require("../assets/images/industries/Education.webp"),
    desc: " Personalized learning experiences, predictive analytics for student outcomes, and automated administrative processes using AI and ML.",
  },
  {
    id: 10,
    title: "Telecom",
    img: require("../assets/images/industries/Telecom.webp"),
    desc: " Boosting network efficiency, customer service, and fraud prevention through AI-driven solutions.",
  },
];

export const webPortfolio = [
  {
    id: 1,
    img: FiveGHomesImg,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 2,
    img: BayutImg,
    title: "Bayut",
    link: "https://www.bayut.com",
  },
  {
    id: 3,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 4,
    img: EmergencyMusicImg,
    title: "Emergency Music",
    link: "https://www.figma.com/proto/GwlIMQuIuFevhOEp8moALy/emergence-music-distribuBon?page-id=6298%3A7215&type=design&node-id=6298-7776&viewport=407%2C314%2C0.11&t=QCtz7M4USn6gI1CG-1&scaling=min-zoom",
  },
  {
    id: 5,
    img: FlatiornImg,
    title: "Flatiorn",
    link: "",
  },
  {
    id: 6,
    img: MavenImg,
    title: "Maven",
    link: "",
  },
  {
    id: 7,
    img: MenissaCateringsImg,
    title: "Menissa Caterings",
    link: "https://messinascatering.com",
  },
  {
    id: 8,
    img: MethodistImg,
    title: "Methodist",
    link: "",
  },
  {
    id: 9,
    img: ThinkRealityImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
];

export const appPortfolio = [
  {
    id: 1,
    img: DubaiTravelGuideImg,
    title: "Dubai Travel Guide",
    // link: "https://play.google.com/store/apps/details?id=com.eBps.dubai.travel.guide&pcampaignid=web_share",
  },
  {
    id: 2,
    img: EloraHairPalourImg,
    title: "Elora Hair Palour",
    // link: "https://play.google.com/store/apps/details?id=app.barbera.io&pcampaignid=web_share",
  },
  {
    id: 3,
    img: EvansFrancisImg,
    title: "Evans Francis",
    // link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.evansfrancis&pcampaignid=web_share",
  },
  {
    id: 4,
    img: HouseOfDeliverenceImg,
    title: "House of Deliverence",
    // link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.hod&pcampaignid=web_share",
  },
  {
    id: 5,
    img: MybitsShopImg,
    title: "Mybits Shop",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 6,
    img: NamazImg,
    title: "Namaz",
    // link: "https://play.google.com/store/apps/details?id=com.iccbrossard.prayerBmes&pcampaignid=web_share",
  },
  {
    id: 7,
    img: PoteaImg,
    title: "Potea",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 8,
    img: RentopBikeAndCarImg,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];
