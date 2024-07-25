import LoadingScreenView from './LoadingScreen.view';
import { useAppContext } from 'src/main/app/App.context';

const LoadingScreenController = () => {
  const { loadingMessages } = useAppContext();
  return (
    <>{loadingMessages.length > 0 && <LoadingScreenView loadingMessages={loadingMessages} />}</>
  );
};

export default LoadingScreenController;
