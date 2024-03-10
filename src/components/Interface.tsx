// Defines the structure for tags associated with a project. Each project can have up to 6 tags.
// `tag1` is mandatory, whereas `tag2` to `tag6` are optional.
//This is used in ProjectData.tsx

interface Tag {
    tag1: string;
    tag2?: string;
    tag3?: string;
    tag4?: string;
    tag5?: string;
    tag6?: string;
}

// Defines the structure for a Project, including its id, title, image, tags, body text, and links.
interface Project{
    id: number;
    projectTitle: string;
    projectImage: string;
    tags: Tag;
    bodyText: string;
    website: string;
    github: string;
}

// Defines props for components that represent portfolio projects. It expects an array of JSX elements.
interface ProjectProps{
    portfolioProject: JSX.Element[]
}

export type {Tag, Project, ProjectProps}