import styles from './SideMenu.module.css';

import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import WorkspacesIcon from '@mui/icons-material/Workspaces';

import { useAppContext } from '../App.context';

import { Box, Typography, Tabs, Tab } from '@mui/material';
import { Link } from 'react-router-dom';

function SideMenuView() {
  const { selectedTab, setSelectedTab } = useAppContext();

  const tabs = [
    {
      value: 'overview',
      label: <Typography sx={{ pl: 1 }}>Visão Geral</Typography>,
      icon: <SpaceDashboardIcon />
    },
    {
      label: <Typography sx={{ pl: 1 }}>Projetos</Typography>,
      value: 'projects',
      icon: <WorkspacesIcon />
    }
  ];

  return (
    <div className={styles.main}>
      <Typography sx={{ p: 2, color: '#9aa0a7', fontSize: 16 }}>Menu Principal</Typography>
      <Box
        sx={{
          bgcolor: '#121621',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left'
        }}
      >
        <Tabs
          orientation="vertical"
          value={selectedTab === '' ? 'overview' : selectedTab}
          onChange={(_, value) => {
            setSelectedTab(value);
          }}
        >
          {tabs.map((tab) => (
            <Tab
              key={tab.value}
              icon={tab.icon}
              iconPosition="start"
              component={Link}
              to={`/${tab.value}`}
              label={tab.label}
              value={tab.value}
              sx={{
                color: selectedTab === tab.value ? '#ffffff' : '#B3B9C1',
                ':hover': {
                  bgcolor: selectedTab === tab.value ? '#635BFF' : '#1B1F2A',
                  color: '#ffffff'
                },
                '&.Mui-selected': {
                  color: '#ffffff',
                  bgcolor: '#635BFF'
                },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'left',
                '& .MuiTypography-root': {
                  fontSize: '15px',
                  textTransform: 'none'
                },
                minHeight: '60px',
                paddingLeft: 4
              }}
            />
          ))}
        </Tabs>
      </Box>
      <Typography sx={{ p: 2, color: '#9aa0a7', fontSize: 16, fontStyle: 'italic' }}>
        Menu de Projeto (em breve)
      </Typography>
    </div>
  );
}

export default SideMenuView;
