export type DataType = {
    homePage: HomePageType
    skillPage: SkillPageType[]
    projectPage: ProjectsPageType[]
    experiancePage: ExperiancePageType[]
}

export type HomePageType = {
    name: string
    surname: string
    subTitle: string
    photo: string
}

export type SkillPageType = {
    title: string
    icon: string
}

export type ProjectsPageType = {
    title: string
    tech: string[]
    description: string
    linkGit: string
    linkLive: string
} 

export type ExperiancePageType = {
    logo: string
    title: string
    description: string
    duration: string
    stack: string[]
}

export type FormType = {
    name: string;
    email: string;
    message: string;
  };