import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Container, Box, Avatar, Typography } from '@mui/material';

export default function SelectLabels() {
  const [project, setProject] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setProject(event.target.value);
  };

  return (
    <Container>
      <Box
        sx={{
          paddingTop: 4,
          paddingBottom: 3,
          paddingRight: 1,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly'
        }}
      >
        <Avatar alt="App Logo" src="src/commons/assets/images/app-logo.png" />
        <Typography sx={{ alignSelf: 'center', color: 'rgb(228, 228, 228)' }}>
          Software Sem Nome
        </Typography>
      </Box>
      <Box sx={{ py: 2 }}>
        <FormControl sx={{ width: '100%' }}>
          <InputLabel
            id="demo-simple-select-helper-label"
            sx={{
              color: 'rgb(180, 180, 180)',
              '&.Mui-focused': { color: 'rgb(180, 180, 180)' }
            }}
          >
            Projeto
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={project}
            label="Projeto"
            onChange={handleChange}
            sx={{
              color: 'white',
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgb(180, 180, 180)'
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgb(180, 180, 180)'
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgb(180, 180, 180)'
              },
              '.MuiSvgIcon-root ': {
                fill: 'white'
              }
            }}
          >
            <MenuItem value="">
              <em>Nenhum</em>
            </MenuItem>
            <MenuItem value={'SUBWEB 4.0'}>SUBWEB 4.0</MenuItem>
            <MenuItem value={'GP-SUB'}>GP-SUB</MenuItem>
            <MenuItem value={'PipeAPI'}>PipeAPI</MenuItem>
          </Select>
          <FormHelperText sx={{ color: 'white', visibility: project ? 'hidden' : 'visible' }}>
            Selecione um projeto
          </FormHelperText>
        </FormControl>
      </Box>
    </Container>
  );
}
