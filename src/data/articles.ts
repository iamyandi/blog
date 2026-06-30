// EXPORTS: IArticle, MOCK_ARTICLES
export interface IArticle {
  id: string
  title: string
  summary: string
  category: 'tech' | 'art' | 'life'
  tags: string[]
  date: string
  content: string
  imageUrl: string
  readTime: number
}

export const MOCK_ARTICLES: IArticle[] = [
  {
    id: '1',
    title: 'Spring Boot 微服务实战',
    summary: '从零搭建生产级微服务架构',
    category: 'tech',
    tags: ['Java', 'Spring Boot', '微服务'],
    date: '2024-12-15',
    content: '# Spring Boot 微服务实战\n\n## 前言\n本文记录使用 Spring Boot 搭建微服务的完整过程...',
    imageUrl: '/spark/app/app_17937h3mkgd/runtime/api/v1/storage/object/bucket_aadkihhdpsodg_static/static%2Faadkie7o7iwbg_ve_miaoda',
    readTime: 12
  },
  {
    id: '2',
    title: 'AI Agent 开发实战：构建智能助手',
    summary: '从 LLM 调用到多 Agent 协作的完整指南',
    category: 'tech',
    tags: ['AI', 'Agent', 'LLM', 'Python'],
    date: '2024-11-20',
    content: '# AI Agent 开发实战：构建智能助手\n\n## 什么是 AI Agent\nAI Agent 是能够感知环境、做出决策并执行行动的智能系统...',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20robot%20assistant%20with%20digital%20brain%20technology%20concept&image_size=landscape_16_9',
    readTime: 12
  },
  {
    id: '3',
    title: '系统架构师实战：微服务设计模式',
    summary: '深入剖析分布式系统架构设计的核心模式',
    category: 'tech',
    tags: ['架构', '微服务', '分布式', '设计模式'],
    date: '2024-10-05',
    content: '# 系统架构师实战：微服务设计模式\n\n## 架构设计原则\n优秀的系统架构需要平衡性能、可扩展性和可维护性...',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=system%20architecture%20diagram%20cloud%20computing%20microservices&image_size=landscape_16_9',
    readTime: 15
  },
  {
    id: '4',
    title: '新手爸爸的育儿笔记',
    summary: '记录女儿潇潇的成长点滴',
    category: 'life',
    tags: ['育儿', '家庭', '成长'],
    date: '2024-09-12',
    content: '# 新手爸爸的育儿笔记\n\n## 初为人父\n2024年6月3日，潇潇来到了这个世界...',
    imageUrl: '/spark/app/app_17937h3mkgd/runtime/api/v1/storage/object/bucket_aadkihhdpsodg_static/static%2Faadkigntg2cbo_ve_miaoda',
    readTime: 6
  },
  {
    id: '5',
    title: 'Docker 容器化部署指南',
    summary: '从 Dockerfile 到 K8s 的实践路径',
    category: 'tech',
    tags: ['Docker', 'DevOps', 'Linux'],
    date: '2024-08-28',
    content: '# Docker 容器化部署指南\n\n## 为什么需要容器化\n在现代软件开发中...',
    imageUrl: '/spark/app/app_17937h3mkgd/runtime/api/v1/storage/object/bucket_aadkihhdpsodg_static/static%2Faadkifg4u6ghg_ve_miaoda',
    readTime: 15
  },
  {
    id: '6',
    title: '素描基础：光影与结构',
    summary: '艺考教学中的核心观察方法',
    category: 'art',
    tags: ['素描', '教学', '美术'],
    date: '2024-07-15',
    content: '# 素描基础\n\n## 观察方法\n画好素描的第一步是学会观察...',
    imageUrl: '/spark/app/app_17937h3mkgd/runtime/api/v1/storage/object/bucket_aadkihhdpsodg_static/static%2Faadkietrshwfi_ve_miaoda',
    readTime: 9
  }
]