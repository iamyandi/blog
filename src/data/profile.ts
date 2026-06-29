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
  name: '闫珶',
  birthYear: 1997,
  location: '上海',
  tagline: 'IT从业者 / 陶瓷艺术设计背景 / 画家 / 插画师',
  bio: '6年Java开发经验，任职于甲方央企银行。兼具技术与艺术双重背景，热爱代码与画笔。',
  avatarUrl: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ylcylz_fsph_ryhs/ljhwZthlaukjlkulzlp/feisuda/avatar/base/1.jpg',
  heroImageUrl: '/spark/app/app_17937h3mkgd/runtime/api/v1/storage/object/bucket_aadkihhdpsodg_static/static%2Faadkignyjwoco_ve_miaoda',
  timelineImageUrl: '/spark/app/app_17937h3mkgd/runtime/api/v1/storage/object/bucket_aadkihhdpsodg_static/static%2Faadkiew7cloai_ve_miaoda',
  skillsImageUrl: '/spark/app/app_17937h3mkgd/runtime/api/v1/storage/object/bucket_aadkihhdpsodg_static/static%2Faadkifg4u6iag_ve_miaoda',
  timeline: [
    {
      id: '1',
      year: '2015-2019',
      title: '陶瓷艺术设计专业',
      description: '大学主修陶瓷艺术设计，打下扎实的造型与审美基础。'
    },
    {
      id: '2',
      year: '2019-至今',
      title: 'Java后端开发工程师',
      description: '6年Java开发经验，任职于甲方央企银行，专注后端架构。'
    },
    {
      id: '3',
      year: '2020-至今',
      title: '画家 / 插画师 / 美术老师',
      description: '业余从事绘画创作与艺考素描教学，多幅作品被收藏。'
    }
  ],
  skills: [
    {
      category: '技术栈',
      items: ['Java后端', 'Spring Boot', 'Linux运维', 'Python自动化', 'Docker', 'MySQL']
    },
    {
      category: '艺术技能',
      items: ['陶瓷设计', '绘画', '插画', '素描教学']
    }
  ],
  contact: {
    email: 'yanchen@example.com',
    github: 'https://github.com/yanchen',
    location: '上海'
  },
  hobbies: ['健身减脂', '网文创作', '金融投资'],
  family: {
    daughter: '潇潇',
    daughterBirth: '2024-06-03'
  }
}