export interface ArticleDetail {
  img: string
  title: string
  description: string
}

export interface ExperienceDetail {
  id: number
  title: string
  image: string
  description: string
  learned: ArticleDetail[]
  locatedCompany: ArticleDetail[]
}

export interface Experience {
  id: number
  date: string
  title: string
  description: string
  isLast: boolean
}