export type DataType = {
    homePage: HomePageType
    skillPage: SkillPageType[]
}

export type HomePageType = {
    name: string
    subTitle: string
}

export type SkillPageType = {
    title: string
    subTitle: string
}