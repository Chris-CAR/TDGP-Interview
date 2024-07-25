import { IProjectsViewProps } from './Projects.model';
import './Projects.styles.css';
import NewProject from 'src/components/molecules/NewProject';
import { useAppContext } from 'src/main/app/App.context';
import getInitials from 'src/commons/helpers/functions/getInitials';

import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { Container, Typography, Button, Avatar } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

function ProjectsView({
  selectedProject,
  showNewProjectPanel,
  handleUpdateProject,
  handleDeleteProject,
  handleClosePanel,
  action
}: Readonly<IProjectsViewProps>) {
  const { projects } = useAppContext();

  const columns: GridColDef[] = [
    {
      field: 'warName',
      description: 'Nome de Guerra',
      headerName: 'Nome',
      flex: 1,
      renderCell: (params) => {
        const { titleShort, titleFull } = params.row;
        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              height: '100%',
              width: '100%'
            }}
          >
            <Avatar
              // src={photo ?? undefined}
              src={undefined}
              alt="Foto de Perfil"
              sx={{
                borderRadius: 5,
                height: 36,
                width: 36
              }}
            >
              {getInitials(titleShort)}
            </Avatar>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '10px'
              }}
            >
              <Typography sx={{ fontSize: '14px' }}>{titleShort}</Typography>
              <Typography sx={{ fontSize: '12px', color: '#73787e' }}>{titleFull}</Typography>
            </div>
          </div>
        );
      }
    },
    {
      field: 'edit',
      headerName: '',
      sortable: false,
      disableColumnMenu: true,
      resizable: false,
      renderCell: (params) => {
        return (
          <div style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
            <EditIcon
              sx={{ pr: 1 }}
              onClick={() => {
                handleUpdateProject({ project: params.row });
              }}
            />
            <DeleteForeverIcon
              color="error"
              onClick={() => {
                handleDeleteProject({ projectId: params.row.id });
              }}
            />
          </div>
        );
      }
    }
  ];

  return (
    <Container
      maxWidth={false}
      sx={{
        padding: '16px',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {showNewProjectPanel && (
        <NewProject
          action={action}
          selectedProject={selectedProject}
          handleClosePanel={handleClosePanel}
        />
      )}
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          minWidth: '100%',
          width: '100%'
        }}
      >
        <Typography variant="h4" sx={{ pt: 5, pb: 3 }}>
          Projetos
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            width: '140px',
            height: '50px',
            bgcolor: '#5B4EFB',
            color: 'white',
            ':hover': { bgcolor: '#342c7a' }
          }}
        >
          Adicionar
        </Button>
      </Container>
      {
        <DataGrid
          autoHeight
          rows={projects}
          rowHeight={70}
          columnHeaderHeight={40}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 }
            },
            sorting: {
              sortModel: [{ field: 'warName', sort: 'asc' }]
            }
          }}
          pageSizeOptions={[5, 10, 15, 20]}
          checkboxSelection
          sx={{
            '& .MuiCheckbox-root.Mui-checked': {
              color: '#121621'
            }
          }}
        />
      }
    </Container>
  );
}

export default ProjectsView;
