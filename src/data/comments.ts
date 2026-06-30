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
    avatarUrl: 'https://api.dicebear.com/9.x/avataaars/svg?seed=CodeRunner',
    content: 'Spring Boot 3.x 的虚拟线程支持讲得很透彻，实战经验丰富！',
    createdAt: '2025-01-15 14:30'
  },
  {
    id: '2',
    articleId: '1',
    author: '运维老张',
    avatarUrl: 'https://api.dicebear.com/9.x/avataaars/svg?seed=DevOpsMaster',
    content: 'Docker Compose 那部分解决了我的痛点，感谢分享。',
    createdAt: '2025-01-16 09:12'
  },
  {
    id: '3',
    articleId: '2',
    author: 'AI开发者小李',
    avatarUrl: 'https://api.dicebear.com/9.x/avataaars/svg?seed=AIDeveloper',
    content: '多 Agent 协作的设计思路很清晰，终于明白怎么搭建智能助手了！',
    createdAt: '2025-01-20 16:45'
  },
  {
    id: '4',
    articleId: '2',
    author: '算法工程师',
    avatarUrl: 'https://api.dicebear.com/9.x/avataaars/svg?seed=AlgorithmExpert',
    content: 'LLM 调用的最佳实践讲得很透彻，Prompt 工程部分受益匪浅。',
    createdAt: '2025-01-21 10:08'
  },
  {
    id: '5',
    articleId: '3',
    author: '后端架构师',
    avatarUrl: 'https://api.dicebear.com/9.x/avataaars/svg?seed=BackendArchitect',
    content: '微服务设计模式总结得很全面，服务网格那部分解决了我的痛点。',
    createdAt: '2025-02-01 11:20'
  },
  {
    id: '6',
    articleId: '3',
    author: '技术负责人',
    avatarUrl: 'https://api.dicebear.com/9.x/avataaars/svg?seed=TechLeader',
    content: '分布式事务和一致性的处理方案很实用，架构演进路线清晰。',
    createdAt: '2025-02-02 08:55'
  },
  {
    id: '7',
    articleId: '4',
    author: '奶爸日记',
    avatarUrl: 'https://api.dicebear.com/9.x/avataaars/svg?seed=NewDad',
    content: '同为新手爸爸，深有同感，宝贝很可爱！',
    createdAt: '2025-02-10 19:30'
  },
  {
    id: '8',
    articleId: '4',
    author: '健身达人',
    avatarUrl: 'https://api.dicebear.com/9.x/avataaars/svg?seed=FitLife',
    content: '减脂期的饮食计划能详细说说吗？',
    createdAt: '2025-02-11 07:15'
  },
  {
    id: '9',
    articleId: '5',
    author: '架构师老李',
    avatarUrl: 'https://api.dicebear.com/9.x/avataaars/svg?seed=SeniorArchitect',
    content: '架构图画得很清晰，系统设计思路值得参考。',
    createdAt: '2025-02-15 13:40'
  },
  {
    id: '10',
    articleId: '6',
    author: '技术博主',
    avatarUrl: 'https://api.dicebear.com/9.x/avataaars/svg?seed=TechBlogger',
    content: '技术分享很实用，期待更多干货文章！',
    createdAt: '2025-02-20 15:22'
  }
]