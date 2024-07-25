import { useEffect } from 'react';
import AppView from './App.view';
import { useAppContext } from './App.context';
// @ts-ignore
import project from 'src/api/tdgp/project';

function AppController() {

  return <AppView />;
}

export default AppController;
