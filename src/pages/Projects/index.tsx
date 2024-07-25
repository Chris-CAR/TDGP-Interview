import ProjectsController from './Projects.controller';
import { ProjectsProvider } from './Projects.context';

const Projects = () => {
  return (
    <ProjectsProvider>
      <ProjectsController />
    </ProjectsProvider>
  );
};

export default Projects;
