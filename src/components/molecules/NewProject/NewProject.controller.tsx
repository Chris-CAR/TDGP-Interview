import { useEffect, useState } from 'react';
import NewProjectView from './NewProject.view';
import { IProject } from 'src/main/app/App.model';
// @ts-ignore
import api from '../../../api/tdgp';
import { useAppContext } from 'src/main/app/App.context';

function NewProjectController({
  action,
  selectedProject,
  handleClosePanel
}: Readonly<{
  action: string;
  selectedProject?: IProject;
  handleClosePanel: any;
}>) {
  const [newProject, setNewProject] = useState<IProject>({
    id: selectedProject?.id ?? '',
    titleFull: selectedProject?.titleFull ?? '',
    titleShort: selectedProject?.titleShort ?? '',
    coordinator: selectedProject?.coordinator ?? '',
    interlocutor: selectedProject?.interlocutor ?? '',
    startDate: selectedProject?.startDate ?? null,
    durationMonths: selectedProject?.durationMonths ?? null,
    investimentType: selectedProject?.investimentType ?? '',
    institutionalLink: selectedProject?.institutionalLink ?? '',
    petrobrasManagement: selectedProject?.petrobrasManagement ?? '',
    description: selectedProject?.description ?? ''
  });

  const { setProjects } = useAppContext();
  const { setError, setLoading } = useAppContext();
  const [persons, setPersons] = useState<{ value: string; label: string }[]>();

  const handleRegister = () => {
    const newProjectData: any = {};

    Object.keys(newProject).map((key) => {
      if (newProject[key] !== null) {
        newProjectData[key] = newProject[key];
      }
    });

    if (action === 'update') {
      setLoading('Atualizando projeto...', true);
      api
        .updateProject(selectedProject?.id, newProjectData)
        .then(() => {
          api.getProjects().then((res: any) => setProjects(res?.data));
        })
        .catch((res: any) => setError(res))
        .finally(() => {
          handleClosePanel();
          setLoading('Atualizando projeto...', false);
        });
    } else {
      setLoading('Registrando projeto...', true);
      api
        .createProject(newProjectData)
        .then(() => {
          api.getProjects().then((res: any) => setProjects(res?.data));
        })
        .catch((res: any) => setError(res))
        .finally(() => {
          handleClosePanel();
          setLoading('Registrando projeto...', false);
        });
    }
  };

  useEffect(() => {
    api
      .getPersons()
      .then((res: any) => {
        const personsList: { value: string; label: string }[] = [];
        res.data.map((person: any) => {
          personsList.push({ value: person.id, label: person.warName });
        });
        setPersons(personsList);
      })
      .catch((res: any) => setError(res));
  }, []);

  return (
    <NewProjectView
      action={action}
      handleClosePanel={handleClosePanel}
      handleRegister={handleRegister}
      newProject={{ state: newProject, set: setNewProject }}
      persons={persons ?? []}
    />
  );
}

export default NewProjectController;
