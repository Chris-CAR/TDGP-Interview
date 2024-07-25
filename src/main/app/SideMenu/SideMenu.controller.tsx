import SideMenuView from './SideMenu.view';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppContext } from '../App.context';

function SideMenuController() {
  const { setSelectedTab } = useAppContext();

  const location = useLocation();

  useEffect(() => {
    // Obtém o path atual da localização
    const currentPath = location.pathname.split('/')[1];

    // Define a tab selecionada com base no path atual
    setSelectedTab(currentPath ?? 'overview');
  }, [location]);
  return <SideMenuView />;
}

export default SideMenuController;
