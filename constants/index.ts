import { RxHome, RxPerson, RxDashboard, RxClipboard, RxGithubLogo } from "react-icons/rx";
import { HiDownload } from "react-icons/hi";
//import { BsArrowRight, BsLinkedin } from "react-icons/bs";

export const SkillData = [
  // Langs
  {
    name: "C",
    Image: "/c-lang.svg",
    width: 69,
    height: 69,
  },
  {
    name: "Golang",
    Image: "/golang.png",
    width: 104,
    height: 104,
  },
  {
    name: "Java",
    Image: "/java.png",
    width: 87,
    height: 87,
  },
  {
    name: "Kotlin",
    Image: "/kotlin.png",
    width: 56,
    height: 56,
  },
  {
    name: "Python",
    Image: "/python.png",
    width: 79,
    height: 79,
  },
  {
    name: "Javascript",
    Image: "/js.png",
    width: 62,
    height: 62,
  },
  {
    name: "Typescript",
    Image: "/ts.png",
    width: 71,
    height: 71,
  },
  {
    name: "Sql",
    Image: "/sql.svg",
    width: 72,
    height: 72,
  },
  // Web dev
  {
    name: "Html5",
    Image: "/html.png",
    width: 77,
    height: 77,
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 93,
    height: 93,
  },
  {
    name: "Tailwindcss",
    Image: "/tailwind.png",
    width: 78,
    height: 78,
  },
  {
    name: "Nodejs",
    Image: "/node-js.png",
    width: 77,
    height: 77,
  },
  {
    name: "React",
    Image: "/react.png",
    width: 77,
    height: 77,
  },
  {
    name: "Nextjs",
    Image: "/next.png",
    width: 77,
    height: 77,
  },
  {
    name: "Nestjs",
    Image: "/nestjs.svg",
    width: 76,
    height: 76,
  },
  {
    name: "Spring",
    Image: "/spring.svg",
    width: 93,
    height: 93,
  },
  // Microservices
  {
    name: "Microservices",
    Image: "/microservices.svg",
    width: 72,
    height: 72,
  },
  {
    name: "Swagger",
    Image: "/swagger.svg",
    width: 73,
    height: 73,
  },
  // Comunication protocols
  {
    name: "RSocket",
    Image: "/rsocket.svg",
    width: 61,
    height: 61,
  },
  {
    name: "gRPC",
    Image: "/grpc.svg",
    width: 93,
    height: 93,
  },
  {
    name: "tRPC",
    Image: "/trpc.svg",
    width: 71,
    height: 71,
  },
  {
    name: "GraphQL",
    Image: "/graphql.svg",
    width: 86,
    height: 86,
  },
  // Building platforms
  {
    name: "Gradle",
    Image: "/gradle.svg",
    width: 69,
    height: 69,
  },
  {
    name: "Maven",
    Image: "/maven.svg",
    width: 82,
    height: 82,
  },
  {
    name: "Npm",
    Image: "/npm.svg",
    width: 65,
    height: 65,
  },
  {
    name: "Pip",
    Image: "/pip.svg",
    width: 83,
    height: 83,
  },
  // ORMs
  {
    name: "Hibernet",
    Image: "/hibernate.svg",
    width: 64,
    height: 64,
  },
  {
    name: "Prisma",
    Image: "/prisma.webp",
    width: 64,
    height: 64,
  },
  {
    name: "Typeorm",
    Image: "/typeorm.svg",
    width: 65,
    height: 65,
  },
  // Databases & Caches
  {
    name: "Oracle",
    Image: "/oracle.svg",
    width: 110,
    height: 200,
  },
  {
    name: "Postgresql",
    Image: "/postgresql.png",
    width: 70,
    height: 70,
  },
  {
    name: "Mysql",
    Image: "/mysql.png",
    width: 70,
    height: 70,
  },
  {
    name: "Mongodb",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },
  {
    name: "Elasticsearch",
    Image: "/elasticsearch.svg",
    width: 64,
    height: 64,
  },
  {
    name: "Redis",
    Image: "/redis.png",
    width: 65,
    height: 65,
  },
  // Streaming and messaging
  {
    name: "Kafka",
    Image: "/kafka.svg",
    width: 63,
    height: 63,
  },
  {
    name: "Rabbitmq",
    Image: "/rabbitmq.svg",
    width: 62,
    height: 62,
  },
  // Bpm
  {
    name: "Temporal",
    Image: "/temporal.svg",
    width: 72,
    height: 72,
  },
  // AI
  {
    name: "Neuralnet",
    Image: "/neural-network.svg",
    width: 77,
    height: 77,
  },
  {
    name: "Pytorch",
    Image: "/pytorch.svg",
    width: 68,
    height: 68,
  },
  {
    name: "Langchain",
    Image: "/langchain.png",
    width: 98,
    height: 98,
  },
  {
    name: "Streamlit",
    Image: "/streamlit.svg",
    width: 97,
    height: 97,
  },
  {
    name: "Ray",
    Image: "/ray.svg",
    width: 65,
    height: 65,
  },
  {
    name: "Chatgpt",
    Image: "/chatgpt.png",
    width: 77,
    height: 77,
  },
  {
    name: "Gemini",
    Image: "/gemini.svg",
    width: 82,
    height: 82,
  },
  // VCS & DevOps
  {
    name: "Confluence",
    Image: "/confluence.svg",
    width: 67,
    height: 67,
  },
  {
    name: "Git",
    Image: "/git.svg",
    width: 67,
    height: 67,
  },
  {
    name: "Gitlab",
    Image: "/gitlab.svg",
    width: 67,
    height: 67,
  },
  {
    name: "JFrog",
    Image: "/jfrog.svg",
    width: 67,
    height: 67,
  },
  // VM/cotainers, orchestration
  {
    name: "Docker",
    Image: "/docker.svg",
    width: 67,
    height: 67,
  },
  {
    name: "Kubernetes",
    Image: "/kubernetes.svg",
    width: 68,
    height: 68,
  },
  {
    name: "Openshift",
    Image: "/openshift.svg",
    width: 68,
    height: 68,
  },
  // Cloud
  {
    name: "Aws",
    Image: "/aws.svg",
    width: 67,
    height: 67,
  },
  // IDE
  {
    name: "vscode",
    Image: "/vscode.svg",
    width: 65,
    height: 65,
  },
  {
    name: "idea",
    Image: "/idea.svg",
    width: 65,
    height: 65,
  },
  {
    name: "githubcopilot",
    Image: "/githubcopilot.svg",
    width: 67,
    height: 67,
  },
  // OS
  {
    name: "Linux",
    Image: "/linux.svg",
    width: 73,
    height: 73,
  },
  {
    name: "Bash",
    Image: "/bash.svg",
    width: 105,
    height: 105,
  },


];

export const Socials = [
  {
    name: "Github",
    src: "/github-logo.png",
    link: "https://github.com",
  },
  {
    name: "LinkedIn",
    src: "/LI-In-Bug.png",
    link: "https://linkedin.com",
  },
  /*{
    name: "Discord",
    src: "/discord.svg",
    link: "dummy",
  },*/
];

export const Projects = [
  {
    title: "Typescript (github.com/azinch/WebPortfolio)",
    text: "My Portfolio. Tech stack: Next 14, React, Tailwind, Framer Motion, Axios, Nodemailer.",
    src: "/WebPortfolio.png",
  },
  {
    title: "Typescript (next13-ai-companion)",
    text: "AI Companion Chatbot (create/chat with llm-powered heroes). Tech stack: Next 13, React, Tailwind, Shadcn/UI, Clerk, Stripe, Toast, MySQL, Prisma, Langchain, Pinecone.",
    src: "/next13-ai-companion.png",
  },
  {
    title: "Typescript",
    text: "A simple Billing system. Event-Driven microservices for User Auth, Ordering and Billing. Tech stack: JWT, RabbitMQ, MongoDB, docker-compose.",
    src: "/nestjs-rabbitmq-ms.png",
  },
  {
    title: "Typescript",
    text: "GRPC microservices: frontend apigateway receives external request via REST and communicates it to backend auth through GRPC, to update internal database. Tech stack: GRPC, REST.",
    src: "/nestjs-grpc.png",
  },
  {
    title: "Golang",
    text: "Bank services (create & manage bank accounts). Tech stack: Gin http, PostgreSQL, Redis, gRPC, Asyncq, K8s.",
    src: "/simplebank.png",
  },
  {
    title: "Golang",
    text: "Shopping Cart API (add/remove/checkout cart items). Technological stack: Temporal WF.",
    src: "/temporal-ecommerce.png",
  },
  {
    title: "Java",
    text: "A sample Ordering system. Event-Driven microservices for User, Order, Payment, Shipment. Tech stack: AxonIQ (saga pattern), Spring Boot, REST, JPA, Oracle DB, Kafka, Openshift.",
    src: "/axoniq-saga-java-app.png",
  },
  {
    title: "Java",
    text: "Deep-Java-Learning Multi-Layer-Perceptron for Telco service consumption. Tech stack: AWS DJL, Spring, Oracle, Kafka, Openshift.",
    src: "/ai-java-djl-mlp-app.png",
  },

  {
    title: "Kotlin",
    text: "Simple Blog app. Tech stack: Spring Boot, JPA, H2 database, Mustache templates for UI.",
    src: "/spring-kotlin-blog-app.png",
  },
  {
    title: "Kotlin",
    text: "Chat app. Technological stack: Spring WebFlux, Kotlin Extensions and Coroutines, streaming with RSocket.",
    src: "/spring-kotlin-chat-app.png",
  },
  {
    title: "Python",
    text: "Video2Audio Converter. Microservices for Gateway, User Auth, Converter and Notification. Tech stack: Flask, JWT, RabbitMQ, MongoDB, MySQL, Docker/K8s.",
    src: "/microservices-python.png",
  },
  {
    title: "Python",
    text: "Pytorch demo project. Implementation of various NNs, Transfer Learning and so on. Tech stack: Pytorch, Numpy, Matplotlib.",
    src: "/neural-networks-with-pytorch.png",
  },
  {
    title: "Python",
    text: "NanoGPT network for text generation (1M params).",
    src: "/nanogpt-with-pytorch.png",
  },
  {
    title: "Python",
    text: "2 apps powered by Langchain: RAG customization of LLM general model, using provided knowledge base: 1. CSV files, 2. Database.",
    src: "/llm_langchain_rag_python.png",
  },

];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    link: "/my-skills",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
  {
    name: "/my-github",
    icon: RxGithubLogo,
    link: "https://github.com",
  },
  {
    name: "/my-cv",
    icon: HiDownload,
    link: "/Andrey_Zinchenko-CV.pdf",
  },
  {
    name: "/contact-me",
    icon: RxClipboard,
    link: "/contact-me",
  },
];
