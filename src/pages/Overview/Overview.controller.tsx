// No controller fica a lógica do componente
// Importa o view e o context (se precisar) e é exportado para o index
import OverviewView from './Overview.view';

function OverviewController() {
  return <OverviewView />;
}

export default OverviewController;
