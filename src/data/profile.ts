// EXPORTS: IProfile, MOCK_PROFILE
export interface IProfile {
  id: string
  name: string
  birthYear: number
  location: string
  tagline: string
  bio: string
  avatarUrl: string
  heroImageUrl: string
  timelineImageUrl: string
  skillsImageUrl: string
  timeline: ITimelineItem[]
  skills: ISkillGroup[]
  contact: IContact
  hobbies: string[]
  family: IFamily
}

export interface ITimelineItem {
  id: string
  year: string
  title: string
  description: string
}

export interface ISkillGroup {
  category: string
  items: string[]
}

export interface IContact {
  email: string
  github: string
  location: string
}

export interface IFamily {
  daughter: string
  daughterBirth: string
}

export const MOCK_PROFILE: IProfile = {
  id: '1',
  name: 'Aaron',
  birthYear: 1997,
  location: '上海',
  tagline: 'IT从业者 / Java开发工程师 / 系统架构师  / agent开发',
  bio: '6年Java开发经验，任职于金融机构央企。兼具微服务开发与AI agent 开发双重背景，热爱代码、科学与哲学。',
  avatarUrl: 'https://pica.zhimg.com/v2-a746c09d95a9b50198e8c01d675c3eaa_1440w.jpg',
  heroImageUrl: '/spark/app/app_17937h3mkgd/runtime/api/v1/storage/object/bucket_aadkihhdpsodg_static/static%2Faadkignyjwoco_ve_miaoda',
  timelineImageUrl: '/spark/app/app_17937h3mkgd/runtime/api/v1/storage/object/bucket_aadkihhdpsodg_static/static%2Faadkiew7cloai_ve_miaoda',
  skillsImageUrl: '/spark/app/app_17937h3mkgd/runtime/api/v1/storage/object/bucket_aadkihhdpsodg_static/static%2Faadkifg4u6iag_ve_miaoda',
  timeline: [
    {
      id: '1',
      year: '2015-2019',
      title: '通信工程专业',
      description: '大学主修通信工程，打下扎实的通信与网络基础。工作后成为后端开发工程师。'
    },
    {
      id: '2',
      year: '2019-2024',
      title: 'Java后端开发工程师',
      description: '6年Java开发经验，任职于甲方央企银行，专注后端架构。'
    },
    {
      id: '3',
      year: '2024-至今',
      title: '项目管理 / 架构师 / 技术负责人',
      description: '负责项目架构设计、技术团队管理与项目进度协调。'
    }
  ],
  skills: [
    {
      category: '技术栈',
      items: ['Java后端', 'Spring Boot', 'Linux运维', 'Python自动化', 'Docker', 'MySQL']
    },
    {
      category: '运动技能',
      items: ['篮球', '游泳', '健身', '哲学']
    }
  ],
  contact: {
    email: 'ydi_sir@163.com',
    github: 'https://github.com/iamyandi',
    location: '上海'
  },
  hobbies: ['健身减脂', '篮球', '游泳','哲学'],
  family: {
    daughter: '潇潇',
    daughterBirth: '2024-06-03'
  }
}