import { Container } from 'squid-navalweb-ui';

const LoadingScreenView = ({ loadingMessages }: { loadingMessages: string[] }) => {
  return (
    <div
      style={{
        position: 'fixed',
        inset: '0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '150000',
        backdropFilter: 'blur(2px)'
      }}
    >
      <Container
        height="100%"
        width="100%"
        progress={-1}
        progressLabel={loadingMessages[0] || 'Carregando...'}
      />
    </div>
  );
};

export default LoadingScreenView;
