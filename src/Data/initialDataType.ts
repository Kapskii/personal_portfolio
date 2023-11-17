export type DataType = {
    homePage: HomePageType
    skillPage: SkillPageType[]
    projectPage: ProjectsPageType[]
}

export type HomePageType = {
    name: string
    subTitle: string
}

export type SkillPageType = {
    title: string
    icon: string
}

export type ProjectsPageType = {
    title: string
    tech: string[]
} 