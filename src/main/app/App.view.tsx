import React from 'react';

import styles from './App.module.css';

import SideMenu from './SideMenu';
import { AppRoutes } from '../routers';
import { BrowserRouter } from 'react-router-dom';

import ErrorPanel from 'src/components/molecules/ErrorPanel';
import LoadingScreen from 'src/components/molecules/LoadingScreen';
import { basePath } from 'src/config';

function AppView() {
  return (
    <BrowserRouter basename={basePath}>
      <React.Suspense fallback={<></>}>
        <div>
          <ErrorPanel />
          <LoadingScreen />
          <div className={styles.root}>
            <div className={styles.sidebar}>
              <SideMenu />
            </div>
            <div className={styles.content}>
              <AppRoutes />
            </div>
          </div>
        </div>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default AppView;
