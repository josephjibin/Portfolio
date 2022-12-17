export interface Education {
    university: string;
    course: string;
    duration: string;
    
  }
  
  export interface WorkExperience {
    role: string;
    company: string;
    duration: string;
    description: string[];
  }
  
  export interface Skill {
    name: string;
    level: string;
    rating: number;
  }
  
  export interface Project {
    title: string;
    technologies: string;
    description: string[];
  }
  