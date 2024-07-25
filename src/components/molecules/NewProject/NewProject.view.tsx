import './NewProject.styles.css';
import Box from '@mui/material/Box';
import shadows from '@mui/material/styles/shadows';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Typography, IconButton, Avatar, TextField, Button, MenuItem } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function NewProjectView({
  action,
  handleClosePanel,
  handleRegister,
  newProject,
  persons
}: Readonly<{
  action: string;
  handleClosePanel: any;
  handleRegister: any;
  newProject: any;
  persons: { value: string; label: string }[];
}>) {
  const listOfTextBar = [
    {
      label: 'Título Completo',
      content: newProject.state.titleFull,
      category: 'titleFull',
      optional: false,
      type: 'text',
      onChange: (e: any) => {
        newProject.set({ ...newProject.state, titleFull: e.target.value });
      }
    },
    {
      label: 'Título Curto',
      content: newProject.state.titleShort,
      category: 'titleShort',
      optional: false,
      type: 'text',
      onChange: (e: any) => {
        newProject.set({ ...newProject.state, titleShort: e.target.value });
      }
    },
    {
      label: 'Data de início',
      content: newProject.state.startDate,
      category: 'startDate',
      optional: true,
      type: 'date',
      onChange: (e: any) => {
        newProject.set({ ...newProject.state, startDate: e.target.value });
      }
    },
    {
      label: 'Duração (em meses)',
      content: newProject.state.durationMonths,
      category: 'durationMonths',
      optional: true,
      type: 'number',
      onChange: (e: any) => {
        newProject.set({ ...newProject.state, durationMonths: e.target.value });
      }
    },
    {
      label: 'Tipo de investimento',
      content: newProject.state.investimentType,
      category: 'investimentType',
      optional: true,
      onChange: (e: any) => {
        newProject.set({ ...newProject.state, investimentType: e.target.value });
      }
    },
    {
      label: 'Vínculo Institucional',
      content: newProject.state.institutionalLink,
      category: 'institutionalLink',
      optional: true,
      onChange: (e: any) => {
        newProject.set({ ...newProject.state, institutionalLink: e.target.value });
      }
    }
  ];

  const coordinator = {
    label: 'Coordenador',
    content: newProject.state.coordinator,
    category: 'coordinator',
    optional: false,
    onChange: (e: any) => {
      newProject.set({ ...newProject.state, coordinator: e.target.value });
    }
  };

  const interlocutor = {
    label: 'Interlocutor',
    content: newProject.state.interlocutor,
    category: 'interlocutor',
    optional: false,
    onChange: (e: any) => {
      newProject.set({ ...newProject.state, interlocutor: e.target.value });
    }
  };

  const photo = {
    label: 'Photo',
    content: newProject.state.photo,
    category: 'photo',
    optional: true,
    onChange: (newPhoto: any) => {
      newProject.set({ ...newProject.state, photo: newPhoto });
    }
  };

  const description = {
    label: 'Descrição',
    content: newProject.state.description,
    category: 'description',
    optional: true,
    onChange: (e: any) => {
      newProject.set({ ...newProject.state, description: e.target.value });
    }
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        photo.onChange(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Box
        sx={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: 'white',
          boxShadow: shadows[5],
          zIndex: 2,
          borderRadius: '5px'
        }}
      >
        <Box className="close-bt" sx={{ pr: 1 }}>
          <IconButton
            onClick={() => {
              handleClosePanel();
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Box className="modal-title">
          <AddCircleOutlineIcon color="primary" fontSize="large" />
          <Typography color={'primary'}>Registrar novo projeto</Typography>
        </Box>
        <Box className="main-content">
          <Box className="profile-and-cellphone">
            <label htmlFor="profile-picture-upload">
              <Box boxShadow={shadows[2]} sx={{ borderRadius: '5px', cursor: 'pointer' }}>
                <Avatar
                  src={photo.content ?? ''}
                  alt="Foto de Perfil"
                  sx={{
                    borderRadius: 0,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                    height: 236,
                    width: 236,
                    marginBottom: '8px'
                  }}
                />
                <Typography fontStyle={'bold'} fontSize={'14px'} color={'black'}>
                  Logotipo do Projeto
                </Typography>
                <Typography color={'gray'} fontSize={'10px'} pb={1}>
                  Clique para inserir
                </Typography>
                <input
                  id="profile-picture-upload"
                  type="file"
                  onChange={handlePhotoUpload}
                  accept="image/*"
                  style={{ display: 'none' }}
                />
              </Box>
            </label>
            <Box className="text-field" sx={{ marginTop: '16px' }}>
              <TextField
                id={'coordinator-field'}
                defaultValue={coordinator.content}
                label={coordinator.label}
                variant="outlined"
                error={!coordinator.optional && !newProject.state.coordinator}
                onChange={coordinator.onChange}
                select
                sx={{ width: '236px' }}
              >
                <MenuItem key={'Nenhum'} value={''} sx={{ fontStyle: 'italic' }}>
                  {'Nenhum'}
                </MenuItem>
                {persons.map((person) => (
                  <MenuItem key={person.value} value={person.value}>
                    {person.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <Box className="text-field">
              <TextField
                id={'interlocutor-field'}
                defaultValue={interlocutor.content}
                label={interlocutor.label}
                variant="outlined"
                error={!interlocutor.optional && !newProject.state.interlocutor}
                onChange={interlocutor.onChange}
                select
                sx={{ width: '236px' }}
              >
                <MenuItem key={'Nenhum'} value={''} sx={{ fontStyle: 'italic' }}>
                  {'Nenhum'}
                </MenuItem>
                {persons.map((person) => (
                  <MenuItem key={person.value} value={person.value}>
                    {person.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </Box>
          <Box className="user-content">
            <Box className="user-content ">
              {listOfTextBar.map((obj) => (
                <Box className="text-field" key={obj.label}>
                  <TextField
                    id={obj.label}
                    defaultValue={obj.content ? obj.content : null}
                    label={obj.label}
                    variant="outlined"
                    error={!obj.optional && !newProject.state[obj.category]}
                    onChange={obj.onChange}
                    sx={{ width: '300px', marginBottom: '8px' }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: 560, height: 200 }}>
          <TextField
            id={description.label}
            defaultValue={description.content ? description.content : null}
            label={description.label}
            variant="outlined"
            error={!description.optional && !newProject.state[description.category]}
            onChange={description.onChange}
            multiline
            rows={1}
            fullWidth
            sx={{
              marginBottom: '8px',
              '& .MuiInputBase-input': {
                minHeight: '150px'
              }
            }}
          />
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{ width: '350px', marginBottom: '20px', marginTop: '10px' }}
            onClick={() => handleRegister()}
          >
            {action === 'update' ? 'Atualizar' : 'Registrar'}
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default NewProjectView;
