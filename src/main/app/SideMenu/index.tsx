// Importa o controller e o context (se tiver), cria o componente com nome geral e o exporta para o resto da aplicação

import SideMenuController from './SideMenu.controller';

const SideMenu = () => {
  return <SideMenuController />;
};

export default SideMenu;
