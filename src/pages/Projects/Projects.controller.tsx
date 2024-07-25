import { useEffect, useState } from 'react';
// @ts-ignore
import project from 'src/api/tdgp/project';

import ProjectsView from './Projects.view';

import { IProject } from 'src/main/app/App.model';
import { useAppContext } from 'src/main/app/App.context';

function ProjectsController() {
  const { setProjects } = useAppContext();
  const { setLoading } = useAppContext();

  const [showNewProjectPanel, setShowNewProjectPanel] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<IProject>({} as IProject);
  const [action, setAction] = useState<string>('create');

  const handleClosePanel = () => {
    setShowNewProjectPanel(false);
  };

  const handleOpenPanel = () => {
    setShowNewProjectPanel(true);
  };

  const handleRegisterProject = () => {
    setAction('create');
    const blankProject: IProject = {} as IProject;
    setSelectedProject(blankProject);
  };

  const handleUpdateProject = ({ project }: { project: IProject }) => {
    setAction('update');
    setSelectedProject(project);
  };

  const handleDeleteProject = ({ projectId }: { projectId: string }) => {
    project
      .deleteProject(projectId)
      .then(() => {
        project.getProjects().then((res: any) => setProjects(res?.data));
      })
      .finally(() => setLoading('Deletando projeto...', false));
  };

  useEffect(() => {
    setLoading('Carregando projetos...', true);
    project
      .getProjects()
      .then((res: any) => setProjects(res?.data))
      .finally(() => setLoading('Carregando projetos...', false));
  }, [selectedProject]);
  return (
    <ProjectsView
      selectedProject={selectedProject}
      showNewProjectPanel={showNewProjectPanel}
      handleRegisterProject={handleRegisterProject}
      handleUpdateProject={handleUpdateProject}
      handleDeleteProject={handleDeleteProject}
      handleClosePanel={handleClosePanel}
      action={action}
    />
  );
}

export default ProjectsController;
