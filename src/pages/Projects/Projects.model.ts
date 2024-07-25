import { IProject } from 'src/main/app/App.model';

export interface IProjectsViewProps {
  selectedProject: IProject;
  showNewProjectPanel: boolean;
  handleRegisterProject: () => void;
  handleUpdateProject: ({ project }: { project: IProject }) => void;
  handleDeleteProject: ({ projectId }: { projectId: string }) => void;
  handleClosePanel: () => void;
  action: string;
}
