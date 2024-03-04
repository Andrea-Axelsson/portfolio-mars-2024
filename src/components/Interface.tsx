interface Tag {
    tag1: string;
    tag2?: string;
    tag3?: string;
    tag4?: string;
    tag5?: string;
    tag6?: string;
}

interface Project{
    id: number;
    projectTitle: string;
    projectImage: string;
    tags: Tag;
    bodyText: string;
    website: string;
    github: string;
}

interface ProjectProps{
    portfolioProject: JSX.Element[]
}

export type {Tag, Project, ProjectProps}