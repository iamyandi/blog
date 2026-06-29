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
    title: '青釉瓷器的温度',
    summary: '探索陶瓷釉面背后的工艺美学',
    category: 'art',
    tags: ['陶瓷', '釉面', '手工艺'],
    date: '2024-11-20',
    content: '# 青釉瓷器的温度\n\n## 釉色的秘密\n青釉之美，在于那一抹温润...',
    imageUrl: '/spark/app/app_17937h3mkgd/runtime/api/v1/storage/object/bucket_aadkihhdpsodg_static/static%2Faadkigntg2cao_ve_miaoda',
    readTime: 8
  },
  {
    id: '3',
    title: '插画创作：从草图到成品',
    summary: '分享一幅商业插画的完整创作流程',
    category: 'art',
    tags: ['插画', '创作', '手绘'],
    date: '2024-10-05',
    content: '# 插画创作流程\n\n## 灵感来源\n每一幅插画都始于一个想法...',
    imageUrl: '/spark/app/app_17937h3mkgd/runtime/api/v1/storage/object/bucket_aadkihhdpsodg_static/static%2Faadkifsdcpyfg_ve_miaoda',
    readTime: 10
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