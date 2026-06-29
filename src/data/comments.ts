// EXPORTS: IComment, MOCK_COMMENTS
export interface IComment {
  id: string
  articleId: string
  author: string
  avatarUrl: string
  content: string
  createdAt: string
}

export const MOCK_COMMENTS: IComment[] = [
  {
    id: '1',
    articleId: '1',
    author: '代码行者',
    avatarUrl: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ylcylz_fsph_rhys/ljhwZthlaukjlkulzlp/feisuda/avatar/base/1.jpg',
    content: 'Spring Boot 3.x 的虚拟线程支持讲得很透彻，实战经验丰富！',
    createdAt: '2025-01-15 14:30'
  },
  {
    id: '2',
    articleId: '1',
    author: '运维老张',
    avatarUrl: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ylcylz_fsph_rhys/ljhwZthlaukjlkulzlp/feisuda/avatar/base/2.jpg',
    content: 'Docker Compose 那部分解决了我的痛点，感谢分享。',
    createdAt: '2025-01-16 09:12'
  },
  {
    id: '3',
    articleId: '2',
    author: '青瓷手艺人',
    avatarUrl: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ylcylz_fsph_rhys/ljhwZthlaukjlkulzlp/feisuda/avatar/base/3.jpg',
    content: '釉面肌理的把控太到位了，期待更多陶瓷作品分享。',
    createdAt: '2025-01-20 16:45'
  },
  {
    id: '4',
    articleId: '2',
    author: '艺术生小王',
    avatarUrl: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ylcylz_fsph_rhys/ljhwZthlaukjlkulzlp/feisuda/avatar/base/4.jpg',
    content: '从技术转艺术这条路很特别，给了我很多启发。',
    createdAt: '2025-01-21 10:08'
  },
  {
    id: '5',
    articleId: '3',
    author: '插画爱好者',
    avatarUrl: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ylcylz_fsph_rhys/ljhwZthlaukjlkulzlp/feisuda/avatar/base/5.jpg',
    content: '手绘草图的线条感真好，能出个教程吗？',
    createdAt: '2025-02-01 11:20'
  },
  {
    id: '6',
    articleId: '3',
    author: '设计小陈',
    avatarUrl: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ylcylz_fsph_rhys/ljhwZthlaukjlkulzlp/feisuda/avatar/base/6.jpg',
    content: '配色方案很高级，深蓝+暖灰的搭配学到了。',
    createdAt: '2025-02-02 08:55'
  },
  {
    id: '7',
    articleId: '4',
    author: '奶爸日记',
    avatarUrl: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ylcylz_fsph_rhys/ljhwZthlaukjlkulzlp/feisuda/avatar/base/7.jpg',
    content: '同为新手爸爸，深有同感，潇潇很可爱！',
    createdAt: '2025-02-10 19:30'
  },
  {
    id: '8',
    articleId: '4',
    author: '健身达人',
    avatarUrl: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ylcylz_fsph_rhys/ljhwZthlaukjlkulzlp/feisuda/avatar/base/8.jpg',
    content: '减脂期的饮食计划能详细说说吗？',
    createdAt: '2025-02-11 07:15'
  },
  {
    id: '9',
    articleId: '5',
    author: '架构师老李',
    avatarUrl: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ylcylz_fsph_rhys/ljhwZthlaukjlkulzlp/feisuda/avatar/base/9.jpg',
    content: '架构图画得很清晰，银行系统的设计思路值得参考。',
    createdAt: '2025-02-15 13:40'
  },
  {
    id: '10',
    articleId: '6',
    author: '素描老师',
    avatarUrl: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ylcylz_fsph_rhys/ljhwZthlaukjlkulzlp/feisuda/avatar/base/10.jpg',
    content: '石膏像的明暗处理很到位，基本功扎实。',
    createdAt: '2025-02-20 15:22'
  }
]