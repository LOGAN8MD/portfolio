export const portfolio = {
  nav: [
    { label: 'Summary', href: '#summary' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    name: 'Deepak Mishra',
    role: 'Full Stack Developer / MERN Stack Developer',
    location: 'Mumbai, India',
    tagline:
      'Full Stack Developer with 4 years of experience building responsive, scalable, cloud-native applications with React.js, Python, Node.js, and GCP.',
    metrics: [
      { value: '4+', label: 'Years Experience' },
      { value: 'GCP', label: 'Cloud-Native Delivery' },
      { value: 'AI', label: 'Speech AI & LLM Workflows' },
    ],
  },
  about: {
    eyebrow: 'Professional Summary',
    title: 'Engineering scalable full-stack systems with cloud, clean UI, and product-grade execution.',
    body:
      'Full Stack Developer experienced in building responsive and scalable web applications using React.js, Python, Node.js, and Google Cloud Platform. Delivered production-ready solutions for enterprise clients including Mahindra & Mahindra by integrating cloud services, enhancing UI performance, and collaborating with cross-functional teams.',
    strengths: [
      'Frontend and backend development across React.js, Node.js, Express.js, Python, and MongoDB',
      'GCP integrations with Compute Engine, BigQuery, Cloud Functions, and Cloud Storage',
      'Prompt engineering and LLaMA fine-tuning for business-aligned AI output',
      'Secure REST APIs, authentication, analytics dashboards, and deployment automation',
    ],
  },
  skills: [
    {
      title: 'AI / ML',
      items: ['Speech AI', 'Prompt Engineering', 'LLaMA Fine-Tuning', 'Claude AI', 'ChatGPT', 'Vertex AI Workbench'],
    },
    {
      title: 'Frontend',
      items: ['React.js', 'JavaScript', 'Material-UI', 'Tailwind CSS', 'Axios', 'Redux', 'TanStack Query'],
    },
    {
      title: 'Backend',
      items: ['Node.js', 'Express.js', 'Python', 'Flask', 'GraphQL', 'REST APIs', 'NGINX', 'JWT'],
    },
    {
      title: 'Database & Cloud',
      items: ['MongoDB', 'Prisma ORM', 'BigQuery', 'SQL', 'Google Cloud Platform', 'Cloud Functions', 'Compute Engine'],
    },
    {
      title: 'Mobile & Tools',
      items: ['Java', 'Android Studio', 'XML Layouts', 'Android SDK', 'GitHub', 'GitLab'],
    },
  ],
  experience: [
    {
      role: 'MERN Stack Developer - SMBP Project',
      company: 'Neosoft',
      period: '11/2025 - Present',
      location: 'Mumbai, India',
      points: [
        'Developed backend modules for a role-based service management system using Node.js, Express.js, MongoDB, and Prisma ORM.',
        'Implemented booking lifecycle management, technician assignment, payment processing, JWT authentication, and role-based access control.',
        'Built scalable REST APIs with pagination, efficient data modeling, audit logging, and secure branch-level data isolation.',
        'Used AI-assisted tools such as Claude AI and ChatGPT for API design, debugging, and productivity enhancement.',
      ],
    },
    {
      role: 'Full Stack Developer - Speech AI Project',
      company: 'UpSolve, Client: Mahindra & Mahindra',
      period: '01/2024 - 10/2025',
      location: 'Mumbai, India',
      points: [
        'Integrated GCP services including Compute Engine, BigQuery with SQL, Cloud Functions, and Cloud Storage using Python to reduce latency and improve backend efficiency.',
        'Built a secure login interface and analytics dashboard using React.js, Context API, and custom hooks while optimizing rendering and initial load time.',
        'Led prompt engineering and LLaMA fine-tuning to improve AI output accuracy aligned with business needs.',
        'Collaborated with 5+ engineers across SF, DMS, and MRC teams to deliver high-performance cloud-based solutions.',
        'Automated deployment processes using Python scripts and cloud tools to increase release speed and scalability.',
      ],
    },
    {
      role: 'Android Developer - Clamp Deduction Project',
      company: 'UpSolve, Client: Mahindra & Mahindra',
      period: '03/2023 - 12/2023',
      location: 'Mumbai, India',
      points: [
        'Designed and implemented Android applications using Java, XML, and Android Studio to improve mobile app performance and UI responsiveness.',
        'Delivered internal-use mobile tools that improved productivity for over 100 team members.',
        'Developed features based on user feedback, reducing bug rates and improving release stability.',
        'Created Node.js and Express APIs for database persistence and smooth app-to-backend data integration.',
      ],
    },
    {
      role: 'MERN Stack Developer',
      company: 'Mindstine Academy',
      period: '02/2022 - 01/2023',
      location: 'Mumbai, India',
      points: [
        'Developed a full-stack web application for file uploads, description updates, and historical data views using JavaScript and React.js.',
        'Built RESTful APIs with Node.js and Express.js for file upload, URL mapping, metadata handling, validation, and structured responses.',
        'Integrated MongoDB for storage and retrieval with efficient indexing and scalable NoSQL schema design.',
        'Connected frontend and backend through Axios and collaborated with Git and agile sprints to deliver features on time.',
      ],
    },
  ],
  projects: [
    {
      title: '3MT E-Commerce Platform',
      category: 'Multi-Lingual Industrial Tools Marketplace',
      description:
        'A full-stack industrial tools marketplace with multilingual browsing, real-time search, cart management, orders, authentication, and cloud media handling.',
      image: '/projects/3mt-product-range.png',
      images: [
        {
          src: '/projects/3mt-product-range.png',
          alt: '3MT product range page with filtering and product cards',
          caption: 'Product range with search, filters, and catalogue cards',
        },
        {
          src: '/projects/3mt-home-products.png',
          alt: '3MT homepage product section with industrial tools',
          caption: 'Homepage and featured products section',
        },
        {
          src: '/projects/3mt-product-detail.png',
          alt: '3MT product detail page with add to cart and WhatsApp enquiry',
          caption: 'Product detail screen with cart and WhatsApp enquiry',
        },
        {
          src: '/projects/3mt-cart.png',
          alt: '3MT cart page with order summary',
          caption: 'Cart flow with quantity controls and order summary',
        },
        {
          src: '/projects/3mt-services.png',
          alt: '3MT services page showing machine sales and repair services',
          caption: 'Services page for sales, repair, parts, support, and guidance',
        },
      ],
      fullDescription:
        'A full-stack e-commerce platform developed for the industrial tools sector, featuring a responsive customer-facing website and secure backend infrastructure. The platform supports multilingual product browsing, real-time search, shopping cart management, order processing, authentication, and cloud-based media management, delivering a seamless shopping experience across devices.',
      stack: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Cloudinary', 'i18next'],
      impact:
        'Delivered a scalable and secure full-stack e-commerce solution with multilingual support, optimized product discovery, streamlined order management, and reliable cloud-based infrastructure.',
      details: [
        'Developed a responsive React.js frontend with English and Hindi localization using i18next.',
        'Built dynamic product catalogs, product detail pages, shopping cart functionality, and real-time product search using Redux Toolkit.',
        'Designed secure RESTful APIs using Node.js and Express.js for authentication, product management, and order processing.',
        'Created MongoDB data models for users, products, and orders using Mongoose.',
        'Implemented JWT-based authentication and password encryption using bcryptjs.',
        'Integrated Cloudinary for secure image and file uploads with Multer.',
        'Established centralized error handling across frontend and backend using Axios interceptors, custom middleware, and global error handlers.',
        'Delivered a mobile-first user experience using React.js and Tailwind CSS.',
      ],
      githubLinks: [
        { label: 'Frontend GitHub', href: 'https://github.com/LOGAN8MD/3mt-website' },
        { label: 'Backend GitHub', href: 'https://github.com/LOGAN8MD/3mtserver' },
      ],
      liveLinks: [
        { label: 'Live App', href: 'https://3mt-machine-tools.netlify.app/' },
      ],
    },
    {
      title: 'Buildable Land Analysis Platform',
      category: 'Full-Stack GIS Land Assessment System',
      description:
        'A full-stack GIS application that analyzes land parcels and calculates buildable acreage after environmental and infrastructure constraints.',
      image: '/projects/buildable-land-analysis.png',
      images: [
        {
          src: '/projects/buildable-land-analysis.png',
          alt: 'Buildable Land Analysis Platform showing selected parcel and buildable area results',
          caption: 'Parcel analysis with buildable, excluded, wetland, flood zone, and building overlays',
        },
        {
          src: '/projects/buildable-land-layers.png',
          alt: 'Buildable Land Analysis Platform map layers and buffer settings',
          caption: 'Layer controls, buffer settings, and detailed constraint breakdown',
        },
        {
          src: '/projects/buildable-land-map.png',
          alt: 'Buildable Land Analysis Platform zoomed map view across Austin',
          caption: 'Wide map context with parcel constraints and analysis results',
        },
      ],
      fullDescription:
        'A full-stack GIS application that analyzes land parcels and calculates buildable acreage after applying environmental and infrastructure constraints such as wetlands, flood zones, and existing buildings. The platform provides an interactive map interface, spatial analysis engine, configurable setback controls, and manual editing tools to help users evaluate land development potential.',
      stack: ['React.js', 'Vite', 'FastAPI', 'GeoPandas', 'Shapely', 'MapLibre GL', 'Mapbox Draw', 'GeoJSON', 'Pydantic'],
      impact:
        'Delivered a scalable GIS-based land analysis solution capable of identifying buildable acreage, visualizing environmental constraints, and providing transparent spatial analysis results.',
      details: [
        'Developed an interactive GIS mapping interface for parcel selection, land visualization, and constraint analysis.',
        'Built spatial analysis APIs using FastAPI, GeoPandas, and Shapely to calculate buildable versus restricted land areas.',
        'Implemented configurable setback calculations for wetlands, flood zones, and building clearances.',
        'Designed manual exclude and restore drawing tools allowing users to modify buildable areas directly on the map.',
        'Created automated spatial workflows including geometry clipping, buffering, overlay analysis, and acreage calculations.',
        'Developed detailed land-use breakdown reports explaining removed areas and constraint impacts.',
        'Integrated MapLibre GL and Mapbox Draw for real-time geospatial visualization and editing.',
        'Implemented validation, error handling, and testing for spatial operations and geometry processing.',
      ],
      githubLinks: [
        { label: 'GitHub', href: 'https://github.com/LOGAN8MD/Buildable-Land-Analysis' },
      ],
      liveLinks: [],
    },
    {
      title: 'Birthday Song AI Generator',
      category: 'AI-Powered Personalized Birthday Song Platform',
      galleryAspect: 'portrait',
      description:
        'An AI-driven web application that generates personalized birthday lyrics and playable audio using user preferences, prompt engineering, and text-to-speech.',
      image: '/projects/birthday-song-result.png',
      images: [
        {
          src: '/projects/birthday-song-welcome.png',
          alt: 'Birthday Song AI Generator welcome screen',
          caption: 'Welcome and onboarding screen',
        },
        {
          src: '/projects/birthday-song-signup.png',
          alt: 'Birthday Song AI Generator signup screen',
          caption: 'User signup and registration flow',
        },
        {
          src: '/projects/birthday-song-details.png',
          alt: 'Birthday Song AI Generator recipient details screen',
          caption: 'Recipient details collection',
        },
        {
          src: '/projects/birthday-song-preferences.png',
          alt: 'Birthday Song AI Generator preference selection screen',
          caption: 'Personalization and preference selection',
        },
        {
          src: '/projects/birthday-song-style.png',
          alt: 'Birthday Song AI Generator music style screen',
          caption: 'Music style and song setup',
        },
        {
          src: '/projects/birthday-song-loading.png',
          alt: 'Birthday Song AI Generator loading screen',
          caption: 'AI song generation loading state',
        },
        {
          src: '/projects/birthday-song-result.png',
          alt: 'Birthday Song AI Generator generated song result screen',
          caption: 'Generated song result with share and download actions',
        },
      ],
      fullDescription:
        'An AI-driven web application that generates personalized birthday song lyrics based on user preferences, recipient details, and music style selections. The platform combines AI-generated content, custom prompt engineering, user onboarding flows, and text-to-speech technology to create unique birthday songs that can be played directly within the application.',
      stack: ['React.js', 'Node.js', 'JavaScript', 'MongoDB', 'OpenAI API', 'Text-to-Speech APIs', 'REST APIs', 'Netlify'],
      impact:
        'Delivered an end-to-end AI-powered content generation platform capable of producing personalized birthday songs within seconds with dynamic personalization and audio playback.',
      details: [
        'Developed a responsive multi-step user experience for collecting recipient details, song preferences, and personalization inputs.',
        'Implemented secure user registration and OTP verification workflows with input validation.',
        'Integrated OpenAI ChatGPT API to generate personalized birthday song lyrics dynamically.',
        'Designed custom prompt-engineering logic to personalize lyrics using recipient name, gender, and selected music genre.',
        'Built backend APIs for user management, lyric generation, and application workflows using Node.js.',
        'Implemented text-to-speech integration to convert AI-generated lyrics into playable audio.',
        'Created a mobile-first React application with smooth navigation across onboarding and song-generation screens.',
        'Optimized application performance and user experience for fast lyric generation and audio playback.',
      ],
      githubLinks: [
        { label: 'Frontend GitHub', href: 'https://github.com/LOGAN8MD/Birthday_Song_AI_Frontend' },
        { label: 'Backend GitHub', href: 'https://github.com/LOGAN8MD/Birthday_Song_AI_server' },
      ],
      liveLinks: [
        { label: 'Live App', href: 'https://birthday-song-ai-generator.netlify.app/' },
      ],
    },
    {
      title: 'Digital Asset Management System',
      category: 'Full-Stack DAM Platform',
      description:
        'A full-stack DAM platform for uploading, organizing, searching, viewing, and downloading digital assets such as images, PDFs, and videos.',
      image: '/projects/dam-dashboard.png',
      images: [
        {
          src: '/projects/dam-dashboard.png',
          alt: 'Digital Asset Management System dashboard with upload and filter panels',
          caption: 'Dashboard with upload panel, filtering, search, and asset cards',
        },
        {
          src: '/projects/dam-asset-grid.png',
          alt: 'Digital Asset Management System asset grid with view, download, and delete actions',
          caption: 'Asset grid with metadata, tags, view, download, and delete actions',
        },
      ],
      fullDescription:
        'A full-stack Digital Asset Management system built to upload, organize, search, view, and download digital assets such as images, PDFs, and videos. The platform follows a monolithic 3-tier architecture with a React frontend, Node.js and Express backend, MongoDB metadata storage, and local file storage for managing uploaded assets efficiently.',
      stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Mongoose', 'Multer', 'Axios', 'CORS', 'Dotenv'],
      impact:
        'Delivered a clean and functional full-stack DAM platform with reliable asset upload, metadata management, search, filtering, and download capabilities.',
      details: [
        'Developed a responsive React.js frontend for uploading assets, viewing asset galleries, and managing digital files.',
        'Built asset upload functionality with progress indicators, success confirmation, and error handling.',
        'Created backend APIs using Node.js and Express.js for file upload, asset retrieval, search, and filtering.',
        'Implemented Multer-based file handling with validation for images, PDFs, videos, unsupported file types, and file-size limits.',
        'Designed MongoDB and Mongoose schemas to store asset metadata including filename, file type, size, upload date, tags, and file URL.',
        'Implemented search and filtering by filename, file type, upload date, and tags.',
        'Added view and download functionality for uploaded assets.',
        'Used AI coding assistance during development and manually refined architecture, validation, state management, and API structure.',
      ],
      githubLinks: [
        { label: 'Frontend GitHub', href: 'https://github.com/LOGAN8MD/DAM-Frontend' },
        { label: 'Backend GitHub', href: 'https://github.com/LOGAN8MD/DAM-backend' },
      ],
      liveLinks: [
        { label: 'Live App', href: 'https://dams-project.netlify.app/' },
      ],
    },
  ],
  education: [
    {
      degree: 'B.C.A. - Bachelor of Computer Application',
      institution: 'Yashwantrao Chavan Maharashtra Open University',
      period: 'CGPA 7.78',
    },
  ],
  achievements: [
    {
      title: 'Datacom Software Development Job Simulation on Forage',
      period: 'July 2025',
      href: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/gCW7Xki5Y3vNpBmnn/L3NcyCoAjLno9d3T9_gCW7Xki5Y3vNpBmnn_DGHcQeWYZtLHDcG5a_1753975451395_completion_certificate.pdf',
    },
    {
      title: 'React.js from Mindstine Academy',
      period: 'Jan 2023',
      href: 'https://drive.google.com/file/d/15f4gKdSvB2Lcvy0Zr9zsVl7YBE0L-_YQ/view',
    },
    {
      title: 'ReactJS from SkillUp by Simplilearn',
      period: 'July 2022',
      href: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzI1IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljZG4ubmV0XC9zaGFyZVwvdGh1bWJfMzk5MTA4NV8xNjcwNDA0NDQyLnBuZyIsInVzZXJuYW1lIjoiREVFUEFLIE1JU0hSQSJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4215%2FReactJS-for-Beginners%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1134021739613773088&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVd3EKcjV3Kw3zKUsCAFNs8PIlAAAA',
    },
    
    {
      title: 'Java Programming from Great Learning',
      period: 'April 2022',
      href: 'https://www.mygreatlearning.com/certificate/IZHCNXEF',
    },
    {
      title: 'Web Designing from Asterix Solution',
      period: 'September 2019',
      href: 'https://drive.google.com/file/d/1nOmyucN0o5qU7IqRrefmks-f6ZoUIqEK/view',
    },
  ],
  contact: {
    email: 'deepak.mishra2327@gmail.com',
    phone: '+918286104286',
    location: 'Mumbai, India',
    links: [
      { label: 'GitHub', href: 'https://github.com/LOGAN8MD?tab=repositories' },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/deepak-mishra-85230b233' },
    ],
  },
};
