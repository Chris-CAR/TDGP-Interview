import { createContext, useContext, useState, useMemo } from 'react';
import { IProject } from 'src/main/app/App.model';

const ProjectsContext = createContext<any>(null);

export function ProjectsProvider({ children }: any) {
  const [selectedProject, setSelectedProject] = useState<IProject>();

  const value = useMemo(
    () => ({
      selectedProject,
      setSelectedProject
    }),
    [selectedProject]
  );

  return <ProjectsContext.Provider value={value}>{children}</ProjectsContext.Provider>;
}

export interface IProjectsContext {
  selectedProject: IProject | undefined;
  setSelectedProject: (value: IProject | undefined) => void;
}

export function useProjectsContext() {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error('useProjectsContext must be used within a ProjectsProvider');
  }
  return context;
}
